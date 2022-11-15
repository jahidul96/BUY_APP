import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Color } from "../../COLORS/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Lodder = () => (
  <View style={styles.lodderStyle}>
    <ActivityIndicator size="small" color={Color.RED} />
  </View>
);

export const TopComp = ({ text, onPress, extraStyle, name }) => (
  <View style={[styles.topCompContainer, extraStyle]}>
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={name ? name : "arrow-back"} size={20} />
    </TouchableOpacity>
    <Text style={styles.topText}>{text}</Text>
    <Text></Text>
  </View>
);

export const NotifyComp = ({ text }) => (
  <View
    style={{
      alignItems: "center",
      marginTop: 100,
    }}
  >
    <Text
      style={{
        fontSize: 17,
        fontWeight: "600",
      }}
    >
      {text}
    </Text>
  </View>
);

export const Input = ({ placeholder, extraInputStyle, value, setValue }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.inputStyle, extraInputStyle]}
      onChangeText={(text) => setValue(text)}
    />
  );
};

export const ButtonComp = ({
  text,
  btnExtrastyle,
  btnExtraTextStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, btnExtrastyle]}
      onPress={onPress}
    >
      <Text style={[styles.btnText, btnExtraTextStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export const ProductImageSlider = ({ data, onPress, imgIndex }) => (
  <View style={styles.imgSliderWrapper}>
    {data.map((productImg, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.imgWrapper, imgIndex == index && styles.borderStyle]}
        onPress={() => onPress(index)}
      >
        <Image source={{ uri: productImg }} style={styles.productImgStyle} />
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  lodderStyle: {
    marginTop: 30,
  },
  inputStyle: {
    width: "100%",
    height: 33,
    paddingHorizontal: 15,
    backgroundColor: Color.GRAY,
  },
  buttonStyle: {
    width: "100%",
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.RED,
    borderRadius: 5,
  },
  btnText: {
    color: Color.WHITE,
    fontSize: 12,
    fontWeight: "700",
  },

  imgSliderWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  imgWrapper: {
    marginRight: 8,
    width: 60,
    height: 60,
  },

  borderStyle: {
    borderWidth: 2,
    borderColor: Color.RED,
  },

  productImgStyle: {
    width: "100%",
    height: "100%",
  },

  topCompContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 45,
  },
  topText: {
    fontSize: 16,
  },
});
