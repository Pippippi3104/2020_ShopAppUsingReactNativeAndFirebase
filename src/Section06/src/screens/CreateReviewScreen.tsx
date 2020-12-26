import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
/* components */
import { IconButton } from "../components/IconButton";
import { TextArea } from "../components/TextArea";
import { StarInput } from "../components/StarInput";
/* types */
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { RouteProp } from "@react-navigation/native";

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

  useLayoutEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <IconButton onPress={() => navigation.goBack()} name="x" />
      ),
    });
  }, [navigation, shop]);

  return (
    <SafeAreaView style={styles.container}>
      <StarInput score={score} onChangeScore={(value) => setScore(value)} />
      <TextArea 
      　value={text} 
      　onChangeText={(value) => setText(value)} 
      　label="レビュー"
      　placeholder="レビューを書いてください"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});