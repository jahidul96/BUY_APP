import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Color } from "../../COLORS/Colors";
import TopSearchComp from "../../components/Reuse/TopSearchComp";
import UseFetch from "../../api/useFetch";
import { ApiPoint } from "../../api/endPoint";
import MatchProducts from "../../components/Reuse/MatchProducts";
import Wait from "../../components/Wait";

const Categories = ({ route }) => {
  const { value } = route.params;
  const [productCategorie, setProductCategorie] = useState(value?.categorie);
  const [wait, setWait] = useState(true);

  const { loading, err, data } = UseFetch(
    `${ApiPoint}/product/similarproduct?categorie=${productCategorie}`
  );

  useEffect(() => {
    setTimeout(() => {
      setWait(false);
    }, 1500);
  }, []);

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
        <ScrollView style={styles.contentWrapper}>
          <MatchProducts
            loading={loading}
            err={err}
            products={data?.products}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  extraInputStyle: {
    width: "70%",
  },
  contentWrapper: {
    flex: 1,
    paddingTop: 60,
  },
});
