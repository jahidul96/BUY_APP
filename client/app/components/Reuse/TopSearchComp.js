import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Color } from "../../COLORS/Colors";
import { WIDTH } from "../../utils/Dimension";
import { Input } from "./Reuseable";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../context/UserContext";

const TopSearchComp = ({ noBack, extraInputStyle, name, cart, color }) => {
  const { auth } = useContext(UserContext);
  const navigation = useNavigation();
  return (
    <View style={styles.topInputWrapper}>
      {noBack ? null : (
        <Ionicons
          name="arrow-back-outline"
          size={27}
          color={Color.RED}
          onPress={() => navigation.goBack()}
        />
      )}

      <Input placeholder="Search.." extraInputStyle={extraInputStyle} />
      <View>
        {cart && auth ? (
          <View style={styles.cartCountContainer}>
            <Text style={styles.cartText}>{auth?.cartItems.length}</Text>
          </View>
        ) : null}
        <Ionicons name={name} size={27} color={color} />
      </View>
    </View>
  );
};

export default TopSearchComp;

const styles = StyleSheet.create({
  topInputWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: WIDTH,
    paddingHorizontal: 15,
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 999,
  },
  cartCountContainer: {
    width: 17,
    height: 17,
    backgroundColor: Color.RED,
    borderRadius: 100,
    position: "absolute",
    top: -5,
    right: -3,
    zIndex: 999,
    justifyContent: "center",
    alignItems: "center",
  },
  cartText: {
    color: Color.WHITE,
    fontSize: 10,
    fontWeight: "700",
  },
});
