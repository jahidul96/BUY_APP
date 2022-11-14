import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../COLORS/Colors";

const Register = () => {
  return (
    <View>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      <Text>Register</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
