import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import LoggedComp from "../../components/LoggedComp";
import { Color } from "../../COLORS/Colors";
import { useSelector } from "react-redux";

const Favorite = () => {
  const user = useSelector((state) => state.user.user);

  // console.log(user);
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
