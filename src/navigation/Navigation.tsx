import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import AccountScreen from "../screens/AccountScreen/AccountScreen";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Accueil"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name == "Accueil") {
              iconName = "home-outline";
            } else if (route.name == "Recherche") {
              iconName = "search-outline";
            } else if (route.name == "Compte") {
              iconName = "person-outline";
            }

            return <Ionicons name={iconName} size={24} color={color} />;
          },
          tabBarLabelStyle: styles.tabLabel,
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "grey",
        })}
      >
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Recherche" component={SearchScreen} />
        <Tab.Screen name="Compte" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    display: "none",
  },
});
