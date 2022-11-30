import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Color } from "../COLORS/Colors";
import { ButtonComp, Input, TopComp } from "../components/Reuse/Reuseable";
import Loadder from "../components/Loadder";

const Register = ({ navigation }) => {
  const [shopname, setShopName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const SubmitData = async () => {
    const fileds = [shopname, email, password, phone];
    const required = fileds.every(Boolean);
    if (!required) {
      return Alert.alert("FILL ALL THE FIELD");
    }
    if (phone.length < 11 || phone.length > 11) {
      return Alert.alert("Invalid number!!");
    }

    let userInfo = {
      email: email.toLowerCase(),
      password,
      shopname,
      phone,
    };
    setUploading(true);
    try {
      const response = await axios.post(`${ApiPoint}/auth/register`, userInfo);

      // console.log(response.data);
      const value = response.data.user;
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("user", jsonValue);
      setUploading(false);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  const goBackFunc = () => {
    navigation.navigate("LoggedComp");
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      {uploading && <Loadder />}
      <TopComp text={"Register"} navigation={navigation} onPress={goBackFunc} />

      <View style={styles.contentWrapper}>
        <Input
          placeholder="Shopname"
          extraInputStyle={styles.extraInputStyle}
          setValue={setShopName}
        />
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
        <Input
          placeholder="Number"
          extraInputStyle={styles.extraInputStyle}
          setValue={setPhone}
        />

        <ButtonComp
          text="SIGNIN"
          btnExtrastyle={styles.btnExtrastyle}
          onPress={SubmitData}
        />
      </View>
    </View>
  );
};

export default Register;

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
