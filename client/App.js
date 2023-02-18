import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./app/navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </KeyboardAvoidingView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
