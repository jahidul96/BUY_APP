import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ButtonComp, Input } from "./Reuseable";
import { useSelector } from "react-redux";

const OrderInfo = ({ onPress }) => {
  const user = useSelector((state) => state.user.user);
  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const [password, setPassword] = useState("");
  const [addres, setAddres] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardPassword, setCardPassword] = useState("");
  const [confirmCardPassword, setConfirmCardPassword] = useState("");

  const data = {
    username,
    email,
    password,
    phone,
    addres,
    cardNumber,
    cardPassword,
    confirmCardPassword,
  };
  return (
    <View>
      <Input
        placeholder="Username"
        extraInputStyle={styles.extraInputStyle}
        value={username}
        setValue={setUsername}
      />
      <Input
        placeholder="Email"
        extraInputStyle={styles.extraInputStyle}
        value={email}
        setValue={setEmail}
      />
      <Input
        placeholder="Password"
        extraInputStyle={styles.extraInputStyle}
        value={password}
        setValue={setPassword}
      />
      <Input
        placeholder="Phone"
        extraInputStyle={styles.extraInputStyle}
        value={phone}
        setValue={setPhone}
      />
      <Input
        placeholder="Address"
        extraInputStyle={styles.extraInputStyle}
        value={addres}
        setValue={setAddres}
      />
      <Input
        placeholder="Card Number"
        extraInputStyle={styles.extraInputStyle}
        value={cardNumber}
        setValue={setCardNumber}
      />
      <Input
        placeholder="Card Password"
        extraInputStyle={styles.extraInputStyle}
        value={cardPassword}
        setValue={setCardPassword}
      />
      <Input
        placeholder="Card Confirm Password"
        extraInputStyle={styles.extraInputStyle}
        value={confirmCardPassword}
        setValue={setConfirmCardPassword}
      />
      <ButtonComp
        text="Order!"
        btnExtrastyle={styles.btnExtrastyle}
        onPress={() => onPress(data)}
      />
    </View>
  );
};

export default OrderInfo;

const styles = StyleSheet.create({
  extraInputStyle: {
    height: 43,
    marginBottom: 8,
  },
  btnExtrastyle: {
    height: 43,
    borderRadius: 0,
  },
});
