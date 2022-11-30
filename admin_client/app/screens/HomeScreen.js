import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../COLORS/Colors";

const HomeScreen = () => {
  return (
    <View>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
