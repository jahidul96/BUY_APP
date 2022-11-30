import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  addToCart,
  decreaseCartQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { Color } from "../COLORS/Colors";

const CartProduct = ({ data }) => {
  const dispatch = useDispatch();
  // console.log(data);

  // incriment cart quantity
  const addProduct = () => {
    dispatch(addToCart(data));
  };

  // decrement cartQuantity
  const decrementCartQuantity = () => {
    dispatch(decreaseCartQuantity(data));
  };
  // remove product from cart
  const removeProductfromCart = () => {
    dispatch(removeFromCart(data._id));
  };
  return (
    <View style={styles.productStyle}>
      <Image source={{ uri: data?.featuredImg[0] }} style={styles.imgStyle} />
      <View style={styles.middleContentStyle}>
        <Text>{data?.name}</Text>
        <Text style={styles.shopnameStyle}>{data.postedBy.shopname}</Text>
        <View style={styles.flexStyle}>
          <CartAddRemoveBtn name={"plus"} onPress={addProduct} />
          <Text style={styles.counter}>{data.cartQuantity}</Text>
          <CartAddRemoveBtn name={"minus"} onPress={decrementCartQuantity} />
        </View>
      </View>

      <View style={styles.rightConatinerStyle}>
        <CartAddRemoveBtn
          name={"delete"}
          color={Color.RED}
          onPress={removeProductfromCart}
        />
        <Text style={styles.shopnameStyle}>
          {data.price} * {data.cartQuantity}
        </Text>
        <Text>{data.price * data.cartQuantity} Tk</Text>
      </View>
    </View>
  );
};

const CartAddRemoveBtn = ({ name, color, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <AntDesign name={name} size={20} color={color} />
  </TouchableOpacity>
);

export default CartProduct;

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
  counter: {
    marginHorizontal: 7,
    fontSize: 16,
  },
  flexStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightConatinerStyle: {
    alignItems: "center",
  },
  shopnameStyle: {
    marginVertical: 5,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
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
