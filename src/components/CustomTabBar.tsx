import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
    const icons: Record<string, keyof typeof MaterialIcons.glyphMap> = {
        map: "place",
        save: "bookmark-border",
        account: "person-outline",
    };

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const label =
                    route.name === "map"
                        ? "マップ"
                        : route.name === "save"
                            ? "保存"
                            : "アカウント";

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableWithoutFeedback
                        key={route.key}
                        onPress={onPress}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                    >
                        <View style={styles.tab}>
                            <View style={styles.iconWrapper}>
                                <MaterialIcons
                                    name={icons[route.name]}
                                    size={35}
                                    color={isFocused ? "#66BB6A" : "#CCCCCC"}
                                />
                            </View>
                            <View style={styles.labelWrapper}>
                                <Text
                                    style={[
                                        styles.label,
                                        { color: isFocused ? "#66BB6A" : "#CCCCCC" },
                                    ]}
                                    numberOfLines={1}
                                >
                                    {label}
                                </Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        height: 100,
        borderTopWidth: 2,
        borderColor: "#F5F5F5",
        alignItems: "center",
    },

    tab: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },

    iconWrapper: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        bottom: 20,
    },

    labelWrapper: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        position: "absolute",
        bottom: 3,
    },

    label: {
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center",
    },
});
