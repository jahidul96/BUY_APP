import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import ProductDetails from "../screens/product/ProductDetails";
import SearchScreen from "../screens/search/SearchScreen";
import BottomNavigation from "./BottomNavigation";
import Categories from "../screens/categorieScreen/Categories";
import Register from "../auth/Register";
import Login from "../auth/Login";
import AskQuestion from "../screens/product/AskQuestion";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="main" component={BottomNavigation} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="AskQuestion" component={AskQuestion} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
