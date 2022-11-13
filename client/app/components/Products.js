import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { HEIGHT, WIDTH } from "../utils/Dimension";
import { Color } from "../COLORS/Colors";

const Products = ({ ProductsData }) => {
  return (
    <View style={styles.container}>
      {ProductsData?.map((data, index) => (
        <Product data={data} key={data._id} />
      ))}
    </View>
  );
};

export default Products;

const Product = ({ data }) => {
  return (
    <TouchableOpacity style={styles.productContainer}>
      <Image source={{ uri: data.featuredImg[0] }} style={styles.imgStyle} />
      <View style={styles.footerContainer}>
        <View
          style={[styles.flexContainer, { justifyContent: "space-between" }]}
        >
          <Text style={styles.titleStyle}>{data.name}</Text>
          <View style={styles.flexContainer}>
            <Text style={styles.titleStyle}>{data.rating.length}</Text>
            <Text style={styles.titleStyle}>({data.rating.length})</Text>
          </View>
        </View>
        <Text style={styles.priceText}>$ {data.price}</Text>
        <Text style={[styles.priceText, styles.shopname]}>
          {data.postedBy.shopname}
        </Text>
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
    paddingBottom: 5,
    backgroundColor: Color.WHITE,
    elevation: 2,
    borderRadius: 5,
    marginBottom: 10,
  },
  imgStyle: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  footerContainer: {
    padding: 5,
  },
  flexContainer: {
    flexDirection: "row",
  },
  titleStyle: {
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1,
  },
  priceText: {
    marginTop: 4,
    fontSize: 11,
    fontWeight: "600",
    color: Color.RED,
  },
  shopname: {
    color: "blue",
  },
});
