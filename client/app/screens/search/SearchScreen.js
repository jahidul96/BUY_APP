import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../../COLORS/Colors";
import TopSearchComp from "../../components/Reuse/TopSearchComp";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      <TopSearchComp
        name="cart-outline"
        extraInputStyle={styles.extraInputStyle}
        cart
        color={Color.RED}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  extraInputStyle: {
    width: "70%",
  },
});
