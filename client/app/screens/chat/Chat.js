import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import LoggedComp from "../../components/LoggedComp";
import { UserContext } from "../../context/UserContext";
import { Color } from "../../COLORS/Colors";

const Chat = () => {
  const { user } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      {user ? (
        <ScrollView>
          <Text>Chat's</Text>
        </ScrollView>
      ) : (
        <LoggedComp />
      )}
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
