import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Color } from "../../COLORS/Colors";
import TopSearchComp from "../../components/Reuse/TopSearchComp";
import UseFetch from "../../api/useFetch";
import dataFetch from "../../api/dataFetch";
import { ApiPoint } from "../../api/endPoint";
import { Lodder } from "../../components/Reuse/Reuseable";
import Products from "../../components/Products";

const SearchScreen = () => {
  const [name, setName] = useState("");

  const { load, wrong, resData, reFetch } = dataFetch(
    `${ApiPoint}/product/search?name=${name}`
  );

  const searchFunc = () => {
    reFetch();
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={Color.RED} />
      <TopSearchComp
        name="cart-outline"
        extraInputStyle={styles.extraInputStyle}
        color={Color.RED}
        setValue={setName}
        search
        btnOnpress={searchFunc}
      />

      <ScrollView style={styles.contentWrapper}>
        {name ? (
          <>
            {load ? (
              <Lodder />
            ) : wrong ? (
              <View style={styles.errorStyle}>
                <Text>Something went wrong!</Text>
                <Text>{wrong?.message}</Text>
              </View>
            ) : resData?.totleProducts == 0 ? (
              <Text style={styles.text}>No product found {name} named!</Text>
            ) : (
              <Products ProductsData={resData?.products} />
            )}
          </>
        ) : (
          <Text style={styles.text}>Type product name!</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: 55,
    paddingHorizontal: 10,
  },

  extraInputStyle: {
    width: "60%",
  },
  text: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});
