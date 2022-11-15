import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../COLORS/Colors";

const Loadder = () => {
  return (
    <View style={styles.indicatorStyle}>
      <ActivityIndicator color={Color.RED} size={"small"} />
    </View>
  );
};

export default Loadder;

const styles = StyleSheet.create({
  indicatorStyle: {
    position: "absolute",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
});
