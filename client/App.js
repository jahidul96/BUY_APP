import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./app/context/UserContext";
import Navigation from "./app/navigation/Navigation";

export default function App() {
  return (
    <UserProvider>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <NavigationContainer>
          <Navigation />
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
