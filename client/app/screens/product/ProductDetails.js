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
import React, { useContext, useEffect, useRef, useState } from "react";
import { Color } from "../../COLORS/Colors";
import TopSearchComp from "../../components/Reuse/TopSearchComp";
import { HEIGHT, WIDTH } from "../../utils/Dimension";
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
import MatchProducts from "../../components/Reuse/MatchProducts";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { getSingleProduct } from "../../api/getSingleProduct";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MainUserContext } from "../../context/MainUserContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const ProductDetails = ({ route, navigation }) => {
  const { value } = route.params;
  const [wait, setWait] = useState(true);
  const user = useSelector((state) => state.user.user);
  const [likes, setLikes] = useState([]);
  const [favorites, setFavorites] = useState(
    user == null ? [] : user?.favorites
  );
  const [imgIndex, setImgIndex] = useState(0);
  const scrollRef = useRef(null);
  const dispatch = useDispatch();

  // check already liked or not
  const isAlreadyLiked = likes.filter((val) => val.likedBy == user?.email);

  // check already favorite or not
  const isAlreadyFavorites = favorites?.filter((fav) => fav == value._id);

  // data fetch from db
  const { loading, err, data } = UseFetch(
    `${ApiPoint}/product/similarproduct?categorie=${value?.categorie}`
  );

  // same store data
  const { load, wrong, resData } = dataFetch(
    `${ApiPoint}/product/samestore?id=${value?.postedBy._id}`
  );

  // like post button

  const LikePost = () => {
    if (!user) {
      return navigation.navigate("Profile");
    }
    if (isAlreadyLiked.length == 0) {
      let val = [
        ...likes,
        {
          likedBy: user?.email,
        },
      ];
      likePost(val);
      setLikes(val);
    } else {
      let val = likes.filter((like) => like.likedBy != user?.email);
      likePost(val);
      setLikes(val);
    }
  };

  const likePost = async (val) => {
    try {
      await axios.put(`${ApiPoint}/product/like/${value._id}`, val);
    } catch (error) {
      console.log(error);
    }
  };

  // add to cart button
  const addProduct = async () => {
    if (!user) {
      return navigation.navigate("Profile");
    }
    dispatch(addToCart(value));
  };

  // buynow button
  const buyNow = async () => {
    if (!user) {
      return navigation.navigate("Profile");
    }
    navigation.navigate("BuyAProduct", { value });
  };

  // adto favorites button
  const addtoFav = async () => {
    if (!user) {
      return navigation.navigate("Profile");
    }
    if (isAlreadyFavorites.length == 0) {
      const val = [...favorites, value?._id];

      setFavorites(val);
      addFavToDb(val, user?._id);
    } else {
      const val = favorites.filter((fav) => fav != value?._id);

      setFavorites(val);
      addFavToDb(val, user._id);
    }
  };

  const addFavToDb = async (val, id) => {
    try {
      const res = await axios.put(`${ApiPoint}/auth/favorites/${id}`, val);
      setFavorites(res.data.user.favorites);
    } catch (error) {
      console.log(error);
    }
  };

  // api and some data call/rerender page
  useEffect(() => {
    setTimeout(() => {
      getSingleProduct(`${ApiPoint}/product/${value._id}`).then((data) => {
        setLikes(data.data.product.likes);
      });
      setWait(false);
    }, 1500);
    setImgIndex(0);
    scrollRef?.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, [value]);

  // select image and update func
  const selectImg = (i) => {
    setImgIndex(i);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />

      {/* top position comp! */}
      <TopSearchComp
        name="cart-outline"
        extraInputStyle={styles.extraInputStyle}
        cart
        color={Color.RED}
        onPress={() => navigation.navigate("Cart")}
      />
      {wait ? (
        // loadder
        <Wait />
      ) : (
        <>
          <ScrollView style={styles.contentWrapper} ref={scrollRef}>
            {/* product featured image */}
            <Image
              source={{ uri: value?.featuredImg[imgIndex] }}
              style={styles.imgStyle}
            />

            {/* image slider */}
            <View style={styles.imgSliderWrapper}>
              <ProductImageSlider
                data={value?.featuredImg}
                onPress={selectImg}
                imgIndex={imgIndex}
              />
            </View>

            {/* top product name, desc, price  */}
            <View style={styles.productDescWrapper}>
              <View style={styles.productDescContainer}>
                <View style={styles.paddingHorizontal}>
                  <Text style={styles.name}>{value?.name}</Text>

                  <Text style={styles.description}>{value?.description}</Text>
                </View>
                <View style={styles.priceWrapper}>
                  <Image source={{ uri: takaIcon }} style={styles.takaIcon} />
                  <Text style={styles.price}>{value?.price}</Text>
                </View>

                {/* like rating and sell count  */}
                <View style={styles.ratingandSellContainer}>
                  <Fontisto name="star" color={"orange"} />
                  <Text style={styles.rating}>
                    {value.rating.length} ({value?.rating.length})
                  </Text>
                  <View style={[styles.flexStyle, styles.soldContainer]}>
                    <Ionicons name="chevron-forward-outline" size={18} />
                    <Text style={styles.likes}>Total Sold </Text>
                    <Text style={styles.totalSell}>{value?.totalSell}</Text>
                  </View>
                  <View style={[styles.flexStyle, styles.soldContainer]}>
                    <TouchableOpacity onPress={LikePost}>
                      <Ionicons
                        name="heart"
                        size={19}
                        color={
                          isAlreadyLiked?.length == 0 ? "black" : Color.RED
                        }
                      />
                    </TouchableOpacity>
                    <Text style={styles.likes}>Likes {likes.length}</Text>
                  </View>
                </View>

                {/* ask question and comment button */}
                <View style={styles.askContainer}>
                  <TouchableOpacity
                    style={styles.wrapperstyle}
                    onPress={() => navigation.navigate("AskQuestion")}
                  >
                    <View style={[styles.flexStyle, { flex: 1 }]}>
                      <Fontisto name="hipchat" size={16} />
                      <Text style={[styles.likes, { marginLeft: 5 }]}>
                        Ask question or give review
                      </Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={18} />
                  </TouchableOpacity>
                </View>

                {/* shopname navigation button */}

                <View style={styles.askContainer}>
                  <TouchableOpacity style={styles.wrapperstyle}>
                    <View style={[styles.flexStyle, { flex: 1 }]}>
                      <Image
                        source={{ uri: pageLogo }}
                        style={styles.shopLogo}
                      />
                      <Text style={[styles.likes, styles.shopname]}>
                        {value?.postedBy.shopname}
                      </Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={18} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* reviews */}
            <View
              style={{
                marginBottom: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text>Reviews...</Text>
            </View>

            {/* similar categories product */}
            <Text style={styles.titleText}>Similar Product's</Text>
            <MatchProducts
              loading={loading}
              err={err}
              products={data?.products}
            />

            {/* same store products */}
            <Text style={styles.titleText}>From Same Store</Text>
            <MatchProducts
              loading={load}
              err={wrong}
              products={resData?.products}
            />
          </ScrollView>

          {/* bottom comp */}
          <BottomComp
            addProduct={addProduct}
            buyNow={buyNow}
            isAlreadyFavorites={isAlreadyFavorites}
            addtoFav={addtoFav}
          />
        </>
      )}
    </View>
  );
};

export default ProductDetails;

const BottomComp = ({ addProduct, buyNow, isAlreadyFavorites, addtoFav }) => {
  return (
    <View style={styles.BottomContainer}>
      <TouchableOpacity style={styles.alingItemStyle} onPress={addtoFav}>
        <Ionicons
          name="heart"
          size={18}
          color={isAlreadyFavorites?.length == 0 ? "black" : Color.RED}
        />
        <Text style={styles.storeText}>Favorite</Text>
      </TouchableOpacity>
      <>
        <ButtonComp
          text="Add To Cart"
          btnExtrastyle={styles.btnExtrastyle}
          onPress={addProduct}
        />
        <ButtonComp
          text="Buy Now"
          btnExtrastyle={styles.btnExtra2style}
          onPress={buyNow}
        />
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.LightGray,
  },
  contentWrapper: {
    flex: 1,
  },
  extraInputStyle: {
    width: "70%",
  },
  imgStyle: {
    width: WIDTH,
    height: HEIGHT / 3,
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
    height: 40,
    justifyContent: "center",
    borderTopColor: Color.GRAY,
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    paddingRight: 10,
  },

  wrapperstyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },

  imgSliderWrapper: {
    paddingHorizontal: 10,
    marginTop: 15,
  },

  titleText: {
    marginBottom: 8,
    paddingHorizontal: 10,
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
    marginRight: 15,
  },
  btnExtra2style: {
    width: "28%",
  },
  alingItemStyle: {
    alignItems: "center",
    flex: 1,
  },
  storeText: {
    fontSize: 12,
    marginTop: 1,
  },
});
