import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Categories } from "../data/Categories";
import { Color } from "../COLORS/Colors";

const ProductCategorie = ({ onPress }) => {
  return (
    <View style={styles.container}>
      {Categories.map((data) => (
        <TouchableOpacity
          style={styles.wrapper}
          key={data.id}
          onPress={() => onPress(data)}
        >
          <ImageBackground
            blurRadius={2}
            source={{ uri: data.img }}
            style={styles.imgStyle}
            borderRadius={10}
          >
            <Text style={styles.categorieText}>{data.categorie}</Text>
          </ImageBackground>
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
    paddingTop: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  wrapper: {
    width: 57,
    height: 50,
    marginBottom: 15,
    marginRight: 10,
    alignItems: "center",
  },

  imgStyle: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  categorieText: {
    fontSize: 10,
    color: Color.WHITE,
    fontWeight: "700",
    width: "70%",
    textAlign: "center",
  },
});
