import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Color } from "../../COLORS/Colors";
import { TopComp } from "../../components/Reuse/Reuseable";
import AntDesign from "react-native-vector-icons/AntDesign";

const img =
  "https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1";
const Cart = () => {
  const arr = [1, 2, 3];
  return (
    <View style={styles.container}>
      <TopComp text="Cart" extraStyle={styles.topComExtraStyle} name={"cart"} />
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      <ScrollView style={styles.mainContainer}>
        {arr.map((data) => (
          <SingleCartProduct key={data} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Cart;

const SingleCartProduct = () => (
  <View style={styles.productStyle}>
    <Image source={{ uri: img }} style={styles.imgStyle} />
    <View style={styles.middleContentStyle}>
      <Text>Iphone 14</Text>
      <Text style={styles.shonnameStyle}>shopname</Text>
      <View style={styles.flexStyle}>
        <CartAddRemoveBtn name={"plus"} />
        <Text style={styles.counter}>0</Text>
        <CartAddRemoveBtn name={"minus"} />
      </View>
    </View>

    <View style={styles.rightConatinerStyle}>
      <CartAddRemoveBtn name={"delete"} color={Color.RED} />
      <Text style={styles.shonnameStyle}>1220 * 2</Text>
      <Text>Price</Text>
    </View>
  </View>
);

const CartAddRemoveBtn = ({ name, color }) => (
  <TouchableOpacity>
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
});
