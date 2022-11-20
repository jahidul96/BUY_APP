import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../redux/cartSlice";
import { ButtonComp } from "./Reuse/Reuseable";

const TotalComp = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);
  return (
    <View>
      {cart?.cartItem?.length > 0 && (
        <>
          <View style={styles.bottomContainer}>
            <Text>Total Amount : </Text>
            <Text style={styles.totalAmount}>{cart?.cartTotalAmount} Tk</Text>
          </View>

          <View
            style={{
              paddingHorizontal: 15,
              marginVertical: 15,
            }}
          >
            <ButtonComp text="ORDER!" />
          </View>
        </>
      )}
    </View>
  );
};

export default TotalComp;

const styles = StyleSheet.create({
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
