import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../COLORS/Colors";

const Wait = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Color.RED} size="small" />
    </View>
  );
};

export default Wait;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
