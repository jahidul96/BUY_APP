import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import UseFetch from "../../api/useFetch";

const HomeScreen = () => {
  return (
    <View
      style={{
        padding: 50,
      }}
    >
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
