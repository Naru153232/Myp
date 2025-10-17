import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import globalStyles from "../globalStyles";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function StartAppScreen() {
    const navigation = useNavigation<NavigationProp<any>>();
    
    useEffect(() => {
        // ログイン認証をする
        setTimeout(() => {
            navigation.navigate("MainTabs");
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={globalStyles.appLogo}>Myp</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
});
