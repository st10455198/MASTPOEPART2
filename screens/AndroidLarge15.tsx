import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const AndroidLarge15 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.androidLarge3}>
      <Image
        style={styles.download31}
        contentFit="cover"
        source={require("../assets/download-3-1.png")}
      />
      <Text style={[styles.cart, styles.cartTypo]}> cart</Text>
      <Image
        style={[styles.androidLarge3Child, styles.cartPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.androidLarge3Item, styles.checkoutPosition]} />
      <Text style={[styles.search, styles.textTypo]}>search</Text>
      <Image
        style={styles.download171}
        contentFit="cover"
        source={require("../assets/download-17-11.png")}
      />
      <Text style={[styles.buffaloWings, styles.cartTypo]}>Buffalo wings</Text>
      <Text style={[styles.text, styles.textTypo]}>2</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={styles.minusSignIcon}
        contentFit="cover"
        source={require("../assets/minus-sign.png")}
      />
      <Pressable
        style={[styles.androidLarge3Inner, styles.androidLarge3InnerPosition]}
        onPress={() => navigation.navigate("AndroidLarge16")}
      />
      <Text style={[styles.checkout, styles.checkoutPosition]}>checkout</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.androidLarge3InnerPosition]}
        onPress={() => navigation.navigate("AndroidLarge17")}
      />
      <Text style={[styles.backToMenu, styles.checkoutPosition]}>
        back to menu
      </Text>
      <Text style={[styles.total, styles.textTypo1]}>
        <Text style={styles.total1}>Total</Text>
        <Text style={styles.textTypo}>:</Text>
      </Text>
      <Text style={[styles.r300, styles.textTypo1]}>R300</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cartTypo: {
    textAlign: "left",
    fontFamily: FontFamily.irishGroverRegular,
  },
  cartPosition: {
    top: 18,
    position: "absolute",
  },
  checkoutPosition: {
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  androidLarge3InnerPosition: {
    borderRadius: Border.br_xl,
    left: "50%",
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  download31: {
    top: 0,
    left: 3,
    borderRadius: 6,
    width: 357,
    position: "absolute",
    height: 800,
  },
  cart: {
    left: 9,
    width: 341,
    height: 46,
    color: Color.colorBlack,
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    top: 18,
    position: "absolute",
  },
  androidLarge3Child: {
    left: 300,
    width: 50,
    height: 51,
  },
  androidLarge3Item: {
    marginLeft: -165,
    top: 76,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhitesmoke,
    width: 310,
    height: 46,
  },
  search: {
    top: 83,
    left: 75,
    width: 115,
    height: 18,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  download171: {
    top: 168,
    left: 0,
    width: 155,
    height: 92,
    position: "absolute",
  },
  buffaloWings: {
    top: 341,
    left: 22,
    width: 278,
    height: 59,
    color: Color.colorBlack,
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    top: 203,
    left: 287,
    width: 81,
    height: 35,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  vectorIcon: {
    height: "4.5%",
    width: "6.67%",
    top: "24.25%",
    right: "3.06%",
    bottom: "71.25%",
    left: "90.28%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  minusSignIcon: {
    top: 194,
    left: 229,
    width: 46,
    height: 41,
    position: "absolute",
  },
  androidLarge3Inner: {
    marginLeft: -98,
    backgroundColor: Color.colorPurple,
    width: 197,
    height: 55,
    top: 641,
  },
  checkout: {
    marginLeft: -79,
    width: 158,
    height: 23,
    top: 641,
    textAlign: "left",
    fontFamily: FontFamily.irishGroverRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_17xl,
  },
  rectanglePressable: {
    marginLeft: -94,
    top: 715,
    backgroundColor: Color.colorRed,
    width: 188,
    height: 59,
  },
  backToMenu: {
    marginLeft: -74,
    top: 720,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.irishGroverRegular,
  },
  total1: {
    fontFamily: FontFamily.irishGroverRegular,
  },
  total: {
    top: 495,
    left: 20,
    width: 113,
    height: 43,
  },
  r300: {
    top: 498,
    left: 209,
    width: 101,
    height: 24,
    fontFamily: FontFamily.irishGroverRegular,
  },
  androidLarge3: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default AndroidLarge15;
