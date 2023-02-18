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
import { Color } from "../../COLORS/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";

import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";
import { ApiPoint } from "../../api/endPoint";
import Loadder from "../../components/Loadder";
import { ButtonComp, Input, TopComp } from "../../components/Reuse/Reuseable";
import { uploadFileToStorage } from "../../firebase/FBUpload";
import { addUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [6, 6],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setImage(result.assets[0].uri);
    }
  };

  const SubmitData = async () => {
    const fileds = [username, email, password, phone];
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
      username,
      phone,
    };
    setUploading(true);
    uploadFileToStorage(image).then(async (url) => {
      console.log("url", url);
      userInfo.profileImg = url;
      try {
        const response = await axios.post(
          `${ApiPoint}/auth/register`,
          userInfo
        );

        // console.log(response.data);
        const value = response.data.user;
        dispatch(addUser(value));
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("user", jsonValue);
        setUploading(false);
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
        setUploading(false);
      }
    });
  };

  const goBackFunc = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      {uploading && <Loadder />}
      <TopComp text={"Register"} navigation={navigation} onPress={goBackFunc} />

      <View style={styles.contentWrapper}>
        <TouchableOpacity style={styles.uploadWrapper} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.imgStyle} />
          ) : (
            <>
              <Ionicons name="image" size={30} />
              <Text>Upload a Profile Pic!</Text>
            </>
          )}
        </TouchableOpacity>
        <Input
          placeholder="Username"
          extraInputStyle={styles.extraInputStyle}
          setValue={setUsername}
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
  uploadWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.GRAY,
    width: "100%",
    height: 80,
    marginBottom: 10,
  },
  imgStyle: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  btnExtrastyle: {
    height: 50,
  },
});
