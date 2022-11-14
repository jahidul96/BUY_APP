import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../../COLORS/Colors";

const Cart = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      <Text>Cart</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
