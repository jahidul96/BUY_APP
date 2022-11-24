import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Color } from "../../COLORS/Colors";
import { TopComp } from "../../components/Reuse/Reuseable";
import { useSelector } from "react-redux";
import CartProduct from "../../components/CartProduct";
import TotalComp from "../../components/TotalComp";
import OrderInfo from "../../components/Reuse/OrderInfo";

const Cart = () => {
  const [order, setOrder] = useState(false);
  const cart = useSelector((state) => state.cart);

  const OrderNow = (val) => {
    console.log(val);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      {order ? (
        // customer/user/order info/
        <View style={styles.orderContainer}>
          <TouchableOpacity
            onPress={() => setOrder(!order)}
            style={styles.closeContainer}
          >
            <Text style={styles.crossText}>X</Text>
          </TouchableOpacity>
          <OrderInfo onPress={OrderNow} />
        </View>
      ) : (
        // cart items
        <>
          {/* top component */}
          <TopComp
            text="Cart"
            extraStyle={styles.topComExtraStyle}
            name={"cart"}
          />
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

            <TotalComp onPress={() => setOrder(!order)} />
          </ScrollView>
        </>
      )}
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
  orderContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  closeContainer: {
    position: "absolute",
    right: 15,
    top: 10,
  },
  crossText: {
    color: Color.RED,
    fontSize: 20,
  },
});
