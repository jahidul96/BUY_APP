import { StyleSheet, TextInput } from "react-native";
import { Color } from "../../COLORS/Colors";

export const Input = ({ placeholder, extraInputStyle }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.inputStyle, extraInputStyle]}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: "100%",
    height: 33,
    paddingHorizontal: 15,
    backgroundColor: Color.GRAY,
  },
});
