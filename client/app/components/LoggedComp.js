import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ButtonComp } from "./Reuse/Reuseable";
import { useNavigation } from "@react-navigation/native";

const LoggedComp = () => {
  const navigation = useNavigation();

  const gotoRegister = () => {
    navigation.navigate("Register");
  };
  const gotoLogin = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SignIn/Login!</Text>
      <View style={styles.btnWrapper}>
        <ButtonComp
          text="SignIn"
          btnExtrastyle={styles.btnExtrastyle}
          btnExtraTextStyle={styles.btnExtraTextStyle}
          onPress={gotoRegister}
        />
        <ButtonComp
          text="Login"
          btnExtraTextStyle={styles.btnExtraTextStyle}
          onPress={gotoLogin}
        />
      </View>
    </View>
  );
};

export default LoggedComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "700",
  },
  btnWrapper: {
    width: "50%",
  },
  btnExtrastyle: {
    marginBottom: 10,
  },
  btnExtraTextStyle: {
    fontSize: 16,
  },
});
