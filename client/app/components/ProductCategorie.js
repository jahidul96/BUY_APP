import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Categories } from "../data/Categories";
import { Color } from "../COLORS/Colors";

const ProductCategorie = () => {
  return (
    <View style={styles.container}>
      {Categories.map((data) => (
        <TouchableOpacity style={styles.wrapper} key={data.id}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: data.img }} style={styles.imgStyle} />
          </View>
          <Text style={styles.categorieText}>{data.categorie}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProductCategorie;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 15,
  },
  wrapper: {
    width: 70,
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  imageWrapper: {
    width: 40,
    height: 30,
  },
  imgStyle: {
    width: 35,
    height: 25,
  },
  categorieText: {
    fontSize: 11,
    width: "70%",
    textAlign: "center",
    marginTop: 4,
  },
});
