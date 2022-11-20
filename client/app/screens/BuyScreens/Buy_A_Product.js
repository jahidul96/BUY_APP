import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../../COLORS/Colors";
import { ButtonComp } from "../../components/Reuse/Reuseable";

const Buy_A_Product = ({ route }) => {
  const { value } = route.params;

  // console.log(value);
  return (
    <View>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      <View></View>
      <BuyProduct data={value} />
      <View style={styles.bottomContainer}>
        <Text>Total Amount : </Text>
        <Text style={styles.totalAmount}>{value.price} Tk</Text>
      </View>

      <View
        style={{
          paddingHorizontal: 15,
          marginVertical: 15,
        }}
      >
        <ButtonComp text="PLACE AN ORDER!" />
      </View>
    </View>
  );
};

const BuyProduct = ({ data }) => (
  <View style={styles.productStyle}>
    <Image source={{ uri: data?.featuredImg[0] }} style={styles.imgStyle} />
    <View style={styles.middleContentStyle}>
      <Text style={styles.shopnameStyle}>{data.name}</Text>
      <Text>{data.postedBy.shopname}</Text>
    </View>
    <Text>{data.price} TK</Text>
  </View>
);

export default Buy_A_Product;

const styles = StyleSheet.create({
  productStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 85,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: Color.GRAY,
    paddingVertical: 10,
  },

  imgStyle: {
    width: 55,
    height: 70,
  },
  middleContentStyle: {
    flex: 1,
    marginLeft: 20,
  },
  rightConatinerStyle: {
    alignItems: "center",
  },
  shopnameStyle: {
    marginVertical: 5,
  },

  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 15,
    marginVertical: 7,
  },

  totalAmount: {
    fontWeight: "700",
    marginLeft: 5,
    fontSize: 16,
  },
});
