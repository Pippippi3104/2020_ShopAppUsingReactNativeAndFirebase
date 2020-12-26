import React, {useEffect} from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

/* components */
import { ShopDetail } from "../components/ShopDetail";
import { FloatingActionButton } from "../components/FloatingActionButton";

/* types */
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
    navigation: StackNavigationProp<RootStackParamList, "Shop">;
    route: RouteProp<RootStackParamList, "Shop">
};

export const ShopScreen: React.FC<Props> = ({navigation, route}: Props) => {
    const {shop} = route.params;
    console.log(shop);

    useEffect(() => {
        navigation.setOptions({ title: shop.name });
    }, [shop]);

    return (
        <SafeAreaView style={styles.container}>
            <ShopDetail shop={shop} />
            <FloatingActionButton 
                iconName="plus"
                onPress={() => navigation.navigate("CreateReview", {shop})}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
    },
});





