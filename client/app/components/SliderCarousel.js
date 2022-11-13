import { ImageBackground, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { WIDTH } from "../utils/Dimension";

const data = [
  {
    img: "https://static.vecteezy.com/system/resources/previews/003/692/287/original/big-sale-discount-promotion-banner-template-with-blank-product-podium-scene-graphic-free-vector.jpg",
    id: 1,
  },
  {
    img: "https://img.freepik.com/free-vector/red-sale-price-tag-style-banner-design-template_1017-27328.jpg?w=2000",
    id: 2,
  },
  {
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/big-sale-banner-design-template-7a455468cdb295f8b7320d6b492c7105_screen.jpg?ts=1602781632",
    id: 2,
  },
];

export const SliderCarousel = () => {
  return (
    <Carousel
      loop
      width={WIDTH}
      height={WIDTH / 2}
      autoPlay={true}
      data={data}
      scrollAnimationDuration={5000}
      renderItem={({ item, index }) => (
        <ImageBackground
          style={styles.imageStyle}
          source={{ uri: item.img }}
        ></ImageBackground>
      )}
    />
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
  },
});
