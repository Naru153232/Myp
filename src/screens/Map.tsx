import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function MapScreen() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text>test</Text>
                <Text>test</Text>
                <Text>test</Text>
                <Text>test</Text>
                <Text>test</Text>
                <Text>test</Text>
                <Text>test</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    
    scrollContent: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
    },
});
