import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Color } from "../../COLORS/Colors";
import { Input } from "../../components/Reuse/Reuseable";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HEIGHT, WIDTH } from "../../utils/Dimension";
import { SliderCarousel } from "../../components/SliderCarousel";
import ProductCategorie from "../../components/ProductCategorie";

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      <View style={styles.topInputWrapper}>
        <Input
          placeholder="Search.."
          extraInputStyle={styles.extraInputStyle}
        />
        <Ionicons name="person-circle" size={30} />
      </View>
      <SliderCarousel />
      <ProductCategorie />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Color.WHITE,
    position: "relative",
  },
  topInputWrapper: {
    position: "absolute",
    width: WIDTH,
    paddingHorizontal: 15,
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 999,
  },
  extraInputStyle: {
    width: "85%",
  },
  imageStyle: {
    flex: 1,
  },
});
