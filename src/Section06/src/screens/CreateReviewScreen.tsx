import React, { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, View, Image, Alert } from "react-native";
import firebase from "firebase";
import {createReviewRef, uploadImage} from "../lib/firebase";
import { pickImage } from "../lib/image-picker";
import {UserContext} from "../contexts/userContexts";
import {ReviewsContext} from "../contexts/reviewsContext";
import {getExtention} from "../utils/file";
/* components */
import { IconButton } from "../components/IconButton";
import { TextArea } from "../components/TextArea";
import { StarInput } from "../components/StarInput";
import { Button } from "../components/Button";
import { Loading } from "../components/Loading";
/* types */
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { RouteProp } from "@react-navigation/native";
import { Review } from "../types/review";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "CreateReview">;
  route: RouteProp<RootStackParamList, "CreateReview">;
};

export const CreateReviewScreen: React.FC<Props> = ({
  navigation,
  route,
}: Props) => {
  const { shop } = route.params;
  const [text, setText] = useState<string>("");
  const [score, setScore] = useState<number>(3);
  const {user} = useContext(UserContext);
  const [imageUri, setImageUri] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { reviews, setReviews } = useContext(ReviewsContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <IconButton onPress={() => navigation.goBack()} name="x" />
      ),
    });
  }, [navigation, shop]);

  const onSubmit = async () => {
    if(!text || !imageUri) {
      Alert.alert("レビューまたは画像がありません");
      return;
    }

    setLoading(true);

    //documentのIDを先に取得
    const reviewRef = await createReviewRef(shop.id);

    //storageのpathを決定
    const ext = getExtention(imageUri);
    const storagePath = "reviews/"+reviewRef.id+"."+ext;

    //画像をstorageにアップロード
    const downloadUrl = await uploadImage(imageUri, storagePath);

    //reviewドキュメントを作る
    const review = {
      id: reviewRef.id,
      user: {
        name: user.name,
        id: user.id,
      },
      shop: {
        name: shop.name,
        id: shop.id,
      },
      text,
      score,
      imageUrl: downloadUrl,
      updatedAt: firebase.firestore.Timestamp.now(),
      createdAt: firebase.firestore.Timestamp.now(),
    } as Review;
    await reviewRef.set(review);
    //レビュー一覧に即時反映する
    setReviews([review, ...reviews]);
    setLoading(false);
    navigation.goBack();
  };

  const onPickImage = async () =>{
    const uri = await pickImage();
    setImageUri(uri);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StarInput score={score} onChangeScore={(value) => setScore(value)} />
      <TextArea 
      　value={text} 
      　onChangeText={(value) => setText(value)} 
      　label="レビュー"
      　placeholder="レビューを書いてください"
      />
      <View style={styles.container}>
         <IconButton name="camera" onPress={onPickImage} color="#ccc" />
         {!!imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
      <Button text="レビューを投稿する" onPress={onSubmit} />
      <Loading visible={loading} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  photoCOntainer: {
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 8,
  },
});