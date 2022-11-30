import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Products from "../Products";
import { Lodder, NotifyComp } from "./Reuseable";

const MatchProducts = ({ loading, err, products }) => (
  <View style={styles.imgSliderWrapper}>
    {loading ? (
      <Lodder />
    ) : err ? (
      <NotifyComp text="Something went wrong" />
    ) : products?.length > 0 ? (
      <Products ProductsData={products} />
    ) : (
      <NotifyComp text="No item!" />
    )}
  </View>
);

export default MatchProducts;

const styles = StyleSheet.create({
  imgSliderWrapper: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
