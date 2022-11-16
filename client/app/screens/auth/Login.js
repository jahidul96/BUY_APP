import { Alert, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";

import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Color } from "../../COLORS/Colors";
import { UserContext } from "../../context/UserContext";
import Loadder from "../../components/Loadder";
import { ApiPoint } from "../../api/endPoint";
import { ButtonComp, Input, TopComp } from "../../components/Reuse/Reuseable";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uploading, setUploading] = useState(false);
  const { auth, setAuthUser } = useContext(UserContext);

  // console.log("user", user);

  const goBackFunc = () => {
    navigation.navigate("Home");
  };

  const login = async () => {
    if (!email || !password) {
      return Alert.alert("FILL ALL THE FIELD");
    }
    setUploading(true);
    try {
      const response = await axios.post(`${ApiPoint}/auth/login`, {
        email: email.toLowerCase(),
        password,
      });

      // console.log(response.data);

      const value = response.data.user;
      setAuthUser(value);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("user", jsonValue);
      setUploading(false);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      {uploading && <Loadder />}
      <TopComp text={"Login"} onPress={goBackFunc} />
      <View style={styles.contentWrapper}>
        <Input
          placeholder="Email"
          extraInputStyle={styles.extraInputStyle}
          setValue={setEmail}
        />
        <Input
          placeholder="Password"
          extraInputStyle={styles.extraInputStyle}
          setValue={setPassword}
        />
        <ButtonComp
          text="LOGIN"
          btnExtrastyle={styles.btnExtrastyle}
          onPress={login}
        />
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
