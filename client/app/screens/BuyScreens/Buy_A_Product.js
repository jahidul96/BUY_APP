import { Alert, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Color } from "../../COLORS/Colors";
import { ButtonComp, TopComp } from "../../components/Reuse/Reuseable";
import OrderInfo from "../../components/Reuse/OrderInfo";

const Buy_A_Product = ({ route, navigation }) => {
  const { value } = route.params;
  const [order, setOrder] = useState(false);

  // console.log(value);

  const placeAnOrder = () => {
    setOrder(true);
    // console.log(value.postedBy);
  };

  const OrderNow = (val) => {
    // if (val.password == "") {
    //   return Alert.alert("password missing!");
    // }
    console.log(val);
  };
  return (
    <View style={styles.root}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />

      <TopComp
        text={"OrderNow"}
        extraStyle={styles.extraStyle}
        onPress={() => navigation.goBack()}
      />
      {order ? (
        <View style={styles.container}>
          <OrderInfo onPress={OrderNow} />
        </View>
      ) : (
        <>
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
            <ButtonComp text="PLACE AN ORDER!" onPress={placeAnOrder} />
          </View>
        </>
      )}
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
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  productStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 85,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: Color.GRAY,
    borderTopWidth: 1,
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
  extraStyle: {
    paddingHorizontal: 15,
  },
});
