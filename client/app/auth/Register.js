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
import { Color } from "../COLORS/Colors";
import { ButtonComp, Input, TopComp } from "../components/Reuse/Reuseable";
import Ionicons from "react-native-vector-icons/Ionicons";

const Register = ({ navigation }) => {
  const goBackFunc = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      <TopComp text={"Register"} navigation={navigation} onPress={goBackFunc} />
      <View style={styles.contentWrapper}>
        <TouchableOpacity style={styles.uploadWrapper}>
          <Ionicons name="image" size={30} />
          <Text>Upload a Profile Pic!</Text>
        </TouchableOpacity>
        <Input
          placeholder="Username"
          extraInputStyle={styles.extraInputStyle}
        />
        <Input placeholder="Email" extraInputStyle={styles.extraInputStyle} />
        <Input
          placeholder="Password"
          extraInputStyle={styles.extraInputStyle}
        />
        <Input placeholder="Number" extraInputStyle={styles.extraInputStyle} />
        <ButtonComp text="SIGNIN" btnExtrastyle={styles.btnExtrastyle} />
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
  btnExtrastyle: {
    height: 50,
  },
});
