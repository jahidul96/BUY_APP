import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { HEIGHT, WIDTH } from "../utils/Dimension";
import { Color } from "../COLORS/Colors";
import { useNavigation } from "@react-navigation/native";
import { takaIcon } from "../utils/DummyImgFile";
import { Ionicons } from "../utils/IconExport";

const Products = ({ ProductsData }) => {
  const navigation = useNavigation();
  const _productDetails = (value) => {
    navigation.navigate("ProductDetails", { value });
    // console.log(value);
  };
  return (
    <View style={styles.container}>
      {ProductsData?.map((data, index) => (
        <Product data={data} key={data._id} onPress={_productDetails} />
      ))}
    </View>
  );
};

export default Products;

const Product = ({ data, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => onPress(data)}
    >
      <Image source={{ uri: data.featuredImg[0] }} style={styles.imgStyle} />
      <View style={styles.footerContainer}>
        <View
          style={[styles.flexContainer, { justifyContent: "space-between" }]}
        >
          <Text style={styles.titleStyle}>{data?.name}</Text>
          <View style={styles.flexContainer}>
            <Ionicons name="star" color={"orange"} />
            <Text style={styles.rating}>({data?.rating?.length})</Text>
          </View>
        </View>
        <View style={styles.priceWrapper}>
          <Image source={{ uri: takaIcon }} style={styles.tkIconStyle} />
          <Text style={styles.priceText}> {data?.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  productContainer: {
    width: WIDTH / 2.2,
    paddingBottom: 10,
    backgroundColor: Color.WHITE,
    elevation: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  imgStyle: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  footerContainer: {
    padding: 5,
  },
  flexContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 11,
    fontWeight: "600",
    marginLeft: 2,
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  tkIconStyle: {
    width: 16,
    height: 25,
    marginLeft: -3,
  },
  titleStyle: {
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  priceText: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: "600",
    color: Color.RED,
  },
  shopname: {
    color: "blue",
  },
});
