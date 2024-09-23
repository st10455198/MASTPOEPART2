import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AndroidLarge12 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.androidLarge5}
      locations={[0, 1]}
      colors={["#b138af", "#dcc9c9"]}
    >
      <Image
        style={styles.download22}
        contentFit="cover"
        source={require("../assets/download-2-2.png")}
      />
      <Text
        style={[styles.chickenTikkaMasala, styles.chickenTypo]}
      >{`Chicken tikka masala
[R320]`}</Text>
      <Pressable
        style={[styles.androidLarge5Child, styles.download152Position]}
        onPress={() => navigation.navigate("AndroidLarge17")}
      />
      <Text style={[styles.backToMenu, styles.addCartTypo]}>Back to menu</Text>
      <Image
        style={styles.starIcon}
        contentFit="cover"
        source={require("../assets/star1.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>5</Text>
      <Text style={[styles.chickenTikkaMasala1, styles.chickenTypo]}>
        Chicken tikka masala is a dish consisting of roasted marinated chicken
        chunks (chicken tikka) in a spiced sauce. The sauce is usually creamy
        and orange-coloured.
      </Text>
      <Image
        style={[styles.download152, styles.download152Position]}
        contentFit="cover"
        source={require("../assets/download-15-2.png")}
      />
      <Text style={[styles.mainDishMenu, styles.textTypo]}>Main Dish Menu</Text>
      <Pressable
        style={styles.androidLarge5Item}
        onPress={() => navigation.navigate("AndroidLarge11")}
      />
      <Text style={[styles.addCart, styles.cartPosition]}>Add cart</Text>
      <Image
        style={[styles.shoppingCartIcon, styles.cartPosition]}
        contentFit="cover"
        source={require("../assets/shopping-cart.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  chickenTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inriaSerifBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  download152Position: {
    left: 95,
    position: "absolute",
  },
  addCartTypo: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    textAlign: "left",
  },
  textTypo: {
    color: Color.colorWhite,
    fontWeight: "800",
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  cartPosition: {
    top: 560,
    position: "absolute",
  },
  download22: {
    top: 0,
    left: 0,
    width: 360,
    position: "absolute",
    height: 800,
  },
  chickenTikkaMasala: {
    marginLeft: -172,
    top: 221,
    width: 278,
    height: 95,
    left: "50%",
  },
  androidLarge5Child: {
    top: 618,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke,
    width: 148,
    height: 68,
  },
  backToMenu: {
    marginLeft: -54,
    top: 633,
    fontSize: FontSize.size_mini,
    color: Color.colorMediumorchid,
    width: 107,
    height: 19,
    transform: [
      {
        rotate: "-0.1deg",
      },
    ],
    fontFamily: FontFamily.interExtraBold,
    left: "50%",
    position: "absolute",
  },
  starIcon: {
    top: 247,
    left: 243,
    width: 50,
    height: 33,
    position: "absolute",
  },
  text: {
    top: 251,
    left: 293,
    fontFamily: FontFamily.interExtraBold,
  },
  chickenTikkaMasala1: {
    top: 331,
    left: 8,
    width: 352,
    height: 201,
  },
  download152: {
    top: 72,
    width: 131,
    height: 100,
  },
  mainDishMenu: {
    top: 9,
    left: 84,
    fontFamily: FontFamily.inknutAntiquaExtraBold,
  },
  androidLarge5Item: {
    top: 558,
    left: -68,
    backgroundColor: Color.colorGainsboro,
    width: 473,
    height: 48,
    position: "absolute",
  },
  addCart: {
    left: 112,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    color: Color.colorBlack,
    top: 560,
  },
  shoppingCartIcon: {
    left: 226,
    width: 96,
    height: 96,
    overflow: "hidden",
  },
  androidLarge5: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    overflow: "hidden",
    height: 800,
  },
});

export default AndroidLarge12;
