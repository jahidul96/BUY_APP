import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../COLORS/Colors";
import { ButtonComp, Input, TopComp } from "../components/Reuse/Reuseable";

const Login = ({ navigation }) => {
  const goBackFunc = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      <TopComp text={"Login"} onPress={goBackFunc} />
      <View style={styles.contentWrapper}>
        <Input placeholder="Email" extraInputStyle={styles.extraInputStyle} />
        <Input
          placeholder="Password"
          extraInputStyle={styles.extraInputStyle}
        />
        <ButtonComp text="LOGIN" btnExtrastyle={styles.btnExtrastyle} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  extraInputStyle: {
    marginBottom: 10,
    height: 50,
    borderRadius: 5,
  },

  btnExtrastyle: {
    height: 50,
  },
});
