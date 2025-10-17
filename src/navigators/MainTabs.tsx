import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "../screens/Map";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tab.Screen
                name="map"
                component={MapScreen}
            />
            <Tab.Screen
                name="save"
                component={MapScreen}
            />
            <Tab.Screen
                name="account"
                component={MapScreen}
            />
        </Tab.Navigator>
    );
}
