import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Color } from "../../COLORS/Colors";
import TopSearchComp from "../../components/Reuse/TopSearchComp";
import { WIDTH } from "../../utils/Dimension";
import {
  ButtonComp,
  Lodder,
  NotifyComp,
  ProductImageSlider,
} from "../../components/Reuse/Reuseable";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import UseFetch from "../../api/useFetch";
import { ApiPoint } from "../../api/endPoint";
import Products from "../../components/Products";
import { pageLogo, takaIcon } from "../../utils/DummyImgFile";
import dataFetch from "../../api/dataFetch";
import Wait from "../../components/Wait";

const ProductDetails = ({ route }) => {
  const { value } = route.params;
  const [wait, setWait] = useState(true);
  const { loading, err, data } = UseFetch(
    `${ApiPoint}/product/similarproduct?categorie=${value?.categorie}`
  );

  const { load, wrong, resData } = dataFetch(
    `${ApiPoint}/product/samestore?id=${value?.postedBy._id}`
  );

  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWait(false);
    }, 1500);
  }, [value]);

  const selectImg = (i) => {
    setImgIndex(i);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      <TopSearchComp
        name="cart-outline"
        extraInputStyle={styles.extraInputStyle}
        cart
        color={Color.RED}
      />
      {wait ? (
        <Wait />
      ) : (
        <>
          <ScrollView style={styles.contentWrapper}>
            <Image
              source={{ uri: value.featuredImg[imgIndex] }}
              style={styles.imgStyle}
            />
            <View style={styles.productDescWrapper}>
              <View style={styles.productDescContainer}>
                <View style={styles.paddingHorizontal}>
                  <Text style={styles.name}>{value.name}</Text>

                  <Text style={styles.description}>{value.description}</Text>
                </View>
                <View style={styles.priceWrapper}>
                  <Image source={{ uri: takaIcon }} style={styles.takaIcon} />
                  <Text style={styles.price}>{value.price}</Text>
                </View>

                <View style={styles.ratingandSellContainer}>
                  <Fontisto name="star" color={"orange"} />
                  <Text style={styles.rating}>
                    {value.rating.length} ({value.rating.length})
                  </Text>

                  <View style={[styles.flexStyle, styles.soldContainer]}>
                    <Ionicons name="chevron-forward-outline" size={18} />
                    <Text style={styles.likes}>Total Sold </Text>
                    <Text style={styles.totalSell}>{value.totalSell}</Text>
                  </View>
                  <View style={[styles.flexStyle, styles.soldContainer]}>
                    <Ionicons name="heart-outline" size={18} />
                    <Text style={styles.likes}>Likes {value.likes.length}</Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.askContainer}>
                  <View style={[styles.flexStyle, { flex: 1 }]}>
                    <Fontisto name="hipchat" size={16} />
                    <Text style={[styles.likes, { marginLeft: 5 }]}>
                      Ask question or give review
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward-outline" size={18} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.askContainer}>
                  <View style={[styles.flexStyle, { flex: 1 }]}>
                    <Image source={{ uri: pageLogo }} style={styles.shopLogo} />
                    <Text style={[styles.likes, styles.shopname]}>
                      {value.postedBy.shopname}
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward-outline" size={18} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.imgSliderWrapper}>
              <ProductImageSlider
                data={value.featuredImg}
                onPress={selectImg}
                imgIndex={imgIndex}
              />
            </View>

            <View style={styles.imgSliderWrapper}>
              <Text>Reviews...</Text>
            </View>

            <MatchProducts
              loading={loading}
              err={err}
              products={data?.products}
              text="Similar Product's"
            />
            <MatchProducts
              loading={load}
              err={wrong}
              products={resData?.products}
              text="From Same Store"
            />
          </ScrollView>

          <BottomComp />
        </>
      )}
    </View>
  );
};

export default ProductDetails;

const MatchProducts = ({ loading, err, products, text }) => (
  <View style={styles.imgSliderWrapper}>
    <Text style={styles.titleText}>{text}</Text>
    {loading ? (
      <Lodder />
    ) : err ? (
      <NotifyComp text="Something went wrong" />
    ) : products.length > 0 ? (
      <Products ProductsData={products} />
    ) : (
      <NotifyComp text="No item till now" />
    )}
  </View>
);

const BottomComp = () => {
  return (
    <View style={styles.BottomContainer}>
      <TouchableOpacity style={styles.alingItemStyle}>
        <Ionicons name="heart-outline" size={18} />
        <Text style={styles.storeText}>Favorite</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.alingItemStyle}>
        <Fontisto name="hipchat" size={18} />
        <Text style={styles.storeText}>Chat</Text>
      </TouchableOpacity>
      <ButtonComp text="Add To Cart" btnExtrastyle={styles.btnExtrastyle} />
      <ButtonComp text="Buy Now" btnExtrastyle={styles.btnExtrastyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
  },
  extraInputStyle: {
    width: "70%",
  },
  imgStyle: {
    width: WIDTH,
    height: WIDTH / 1.1,
  },
  productDescWrapper: {
    padding: 10,
  },

  productDescContainer: {
    backgroundColor: Color.WHITE,
    paddingVertical: 15,
    borderRadius: 5,
    elevation: 1,
  },
  paddingHorizontal: {
    paddingHorizontal: 10,
  },
  name: {
    color: Color.RED,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 3,
  },
  description: {},
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -5,
    marginTop: 2,
    paddingHorizontal: 10,
    marginBottom: 6,
  },

  flexStyle: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  ratingandSellContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderTopColor: Color.GRAY,
    borderTopWidth: 1,
    height: 35,
  },
  takaIcon: {
    width: 20,
    height: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
  },
  rating: {
    marginLeft: 5,
  },
  soldContainer: {
    marginLeft: 10,
  },
  totalSell: {
    marginTop: -4,
  },
  shopLogo: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
  shopname: { marginLeft: 5, fontWeight: "700" },
  likes: {
    fontSize: 12,
    marginLeft: 3,
    marginTop: -3,
  },
  askContainer: {
    height: 35,
    justifyContent: "center",
    borderTopColor: Color.GRAY,
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    paddingRight: 10,
  },

  imgSliderWrapper: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },

  titleText: {
    marginBottom: 8,
  },

  //   BottomContainer styles

  BottomContainer: {
    height: 50,
    backgroundColor: Color.WHITE,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnExtrastyle: {
    width: "28%",
  },
  alingItemStyle: {
    alignItems: "center",
  },
  storeText: {
    fontSize: 12,
    marginTop: 1,
  },
});
