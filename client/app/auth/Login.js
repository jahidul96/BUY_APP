import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../COLORS/Colors";

const Login = () => {
  return (
    <View>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      <Text>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
