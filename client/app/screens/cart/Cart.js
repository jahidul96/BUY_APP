import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Color } from "../../COLORS/Colors";
import { ButtonComp, TopComp } from "../../components/Reuse/Reuseable";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCartQuantity,
  getTotal,
  removeFromCart,
} from "../../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);
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
            <SingleCartProduct data={data} key={data._id} />
          ))
        ) : (
          <View>
            <Text style={styles.emptyText}>No Cart Item Till now!</Text>
          </View>
        )}
        {cart?.cartItem?.length > 0 && (
          <>
            <View style={styles.bottomContainer}>
              <Text>Total Amount : </Text>
              <Text style={styles.totalAmount}>{cart.cartTotalAmount} Tk</Text>
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
      </ScrollView>
    </View>
  );
};

export default Cart;

const SingleCartProduct = ({ data }) => {
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
        <Text style={styles.shonnameStyle}>{data.postedBy.shopname}</Text>
        <View style={styles.flexStyle}>
          <CartAddRemoveBtn name={"plus"} onPress={addProduct} />
          <Text style={styles.counter}>0</Text>
          <CartAddRemoveBtn name={"minus"} onPress={decrementCartQuantity} />
        </View>
      </View>

      <View style={styles.rightConatinerStyle}>
        <CartAddRemoveBtn
          name={"delete"}
          color={Color.RED}
          onPress={removeProductfromCart}
        />
        <Text style={styles.shonnameStyle}>
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
  shonnameStyle: {
    marginVertical: 7,
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
