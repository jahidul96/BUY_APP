import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import LoggedComp from "../../components/LoggedComp";
import { UserContext } from "../../context/UserContext";
import { Color } from "../../COLORS/Colors";

const Favorite = () => {
  const { user } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      {user ? (
        <ScrollView>
          <Text>Favorite's</Text>
        </ScrollView>
      ) : (
        <LoggedComp />
      )}
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
