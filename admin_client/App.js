import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/HomeScreen";
import Register from "./app/screens/Register";
import Login from "./app/screens/Login";
import LoggedComp from "./app/components/LoggedComp";
import { useEffect, useState } from "react";
import { getUserFromAsync } from "./app/utils/LocalStorage";
import { UserProvider } from "./app/context/UserContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserFromAsync()
      .then((value) => {
        setUser(value);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <UserProvider>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {user ? (
              <>
                <Stack.Screen name="Home" component={HomeScreen} />
              </>
            ) : (
              <>
                <Stack.Screen name="LoggedComp" component={LoggedComp} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardAvoidingView>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
