import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserProvider } from "./app/context/UserContext";
import BottomNavigation from "./app/navigation/BottomNavigation";

export default function App() {
  return (
    <UserProvider>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <NavigationContainer>
          <BottomNavigation />
        </NavigationContainer>
      </KeyboardAvoidingView>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
