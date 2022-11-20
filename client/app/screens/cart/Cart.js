import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Color } from "../../COLORS/Colors";
import { TopComp } from "../../components/Reuse/Reuseable";
import { useSelector } from "react-redux";
import CartProduct from "../../components/CartProduct";
import TotalComp from "../../components/TotalComp";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <View style={styles.container}>
      <TopComp text="Cart" extraStyle={styles.topComExtraStyle} name={"cart"} />
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}
      >
        {cart?.cartItem?.length > 0 ? (
          cart?.cartItem?.map((data) => (
            <CartProduct data={data} key={data._id} />
          ))
        ) : (
          <View>
            <Text style={styles.emptyText}>No Cart Item Till now!</Text>
          </View>
        )}

        <TotalComp />
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  mainContainer: {
    flex: 1,
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: Color.GRAY,
  },

  topComExtraStyle: {
    paddingHorizontal: 15,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});
