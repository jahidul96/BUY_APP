import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import LoggedComp from "../../components/LoggedComp";
import { UserContext } from "../../context/UserContext";
import { Color } from "../../COLORS/Colors";

const ProfileScreen = () => {
  const { user } = useContext(UserContext);

  // console.log(user);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      {user ? (
        <ScrollView>
          <Text>profile data</Text>
        </ScrollView>
      ) : (
        <LoggedComp />
      )}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
