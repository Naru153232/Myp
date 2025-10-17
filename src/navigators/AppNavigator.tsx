import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartAppScreen from "../screens/StartApp";
import MainTabs from "./MainTabs";

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="StartApp"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="StartApp"
                    component={StartAppScreen}
                    options={{
                        animation: "none",
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name="MainTabs"
                    component={MainTabs}
                    options={{
                        animation: "none",
                        gestureEnabled: true
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
