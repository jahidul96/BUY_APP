import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserFromAsync = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("user");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value

    console.log(e.message);
  }
};

export const removeValueFromAsync = async () => {
  try {
    await AsyncStorage.removeItem("user");
    console.log("Done.");
  } catch (e) {
    // remove error
    console.log(e.message);
  }
};
