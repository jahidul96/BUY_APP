import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import LoggedComp from "../../components/LoggedComp";

const AskQuestion = () => {
  const { auth } = useContext(UserContext);

  return (
    <View style={styles.root}>
      {auth ? (
        <View>
          <Text>AskQuestion</Text>
        </View>
      ) : (
        <LoggedComp />
      )}
    </View>
  );
};

export default AskQuestion;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
