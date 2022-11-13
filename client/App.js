import { StatusBar } from "expo-status-bar";
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/home/HomeScreen";
import ProfileScreen from "./app/screens/profile/ProfileScreen";
import { UserProvider } from "./app/context/UserContext";
import ProductDetails from "./app/screens/product/ProductDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
          </Stack.Navigator>
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
