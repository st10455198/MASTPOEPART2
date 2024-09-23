import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AndroidLarge11 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.androidLarge6}>
      <Image
        style={styles.download37}
        contentFit="cover"
        source={require("../assets/download-3-7.png")}
      />
      <Text style={[styles.mainDishCart, styles.mainDishCartLayout]}>
        {" "}
        Main dish Cart
      </Text>
      <Image
        style={styles.androidLarge6Child}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.androidLarge6Item, styles.mainDishCartLayout]} />
      <Text style={[styles.search, styles.textTypo]}>search</Text>
      <Image
        style={[styles.androidLarge6Inner, styles.rectangleLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Image
        style={styles.download152}
        contentFit="cover"
        source={require("../assets/download-15-2.png")}
      />
      <Text
        style={[styles.chickenTikkaMasala, styles.total1Typo]}
      >{`Chicken tikka masala
[R320]`}</Text>
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
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Pressable
        style={styles.checkout}
        onPress={() => navigation.navigate("AndroidLarge16")}
      >
        <Text style={[styles.checkout1, styles.checkout1Clr]}>checkout</Text>
      </Pressable>
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleLayout]}
        onPress={() => navigation.navigate("AndroidLarge17")}
      />
      <Text style={[styles.backToMenu, styles.text1Typo]}>back to menu</Text>
      <Text style={[styles.total, styles.totalPosition]}>
        <Text style={styles.total1Typo}>Total</Text>
        <Text style={styles.text1Typo}>:</Text>
      </Text>
      <Text style={[styles.r64000, styles.totalPosition]}>R640.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainDishCartLayout: {
    height: 46,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  rectangleLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  total1Typo: {
    fontFamily: FontFamily.istokWebBold,
    fontWeight: "700",
  },
  checkout1Clr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  text1Typo: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  totalPosition: {
    height: 39,
    top: 513,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  download37: {
    top: 0,
    left: 0,
    width: 368,
    position: "absolute",
    height: 800,
  },
  mainDishCart: {
    width: 341,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_17xl,
    left: 9,
    top: 18,
  },
  androidLarge6Child: {
    left: 300,
    width: 50,
    height: 51,
    top: 18,
    position: "absolute",
  },
  androidLarge6Item: {
    marginLeft: -165,
    top: 76,
    left: "50%",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhitesmoke,
    width: 310,
  },
  search: {
    top: 83,
    width: 115,
    height: 18,
    left: 75,
  },
  androidLarge6Inner: {
    top: 131,
    left: 10,
    width: 80,
    height: 80,
  },
  download152: {
    top: 130,
    left: -22,
    width: 131,
    height: 100,
    position: "absolute",
  },
  chickenTikkaMasala: {
    top: 310,
    fontSize: FontSize.size_13xl,
    width: 374,
    height: 90,
    textAlign: "left",
    color: Color.colorBlack,
    left: 9,
    position: "absolute",
  },
  text: {
    top: 203,
    left: 287,
    width: 81,
    height: 35,
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
  rectangleView: {
    top: 611,
    backgroundColor: Color.colorPurple,
    width: 197,
    height: 59,
    left: 75,
  },
  checkout1: {
    width: 170,
    height: 33,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_17xl,
    color: Color.colorBlack,
  },
  checkout: {
    left: 89,
    top: 608,
    position: "absolute",
  },
  rectanglePressable: {
    top: 699,
    left: 84,
    backgroundColor: Color.colorRed,
    width: 188,
    height: 55,
  },
  backToMenu: {
    top: 720,
    left: 100,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  total: {
    left: 24,
    width: 85,
  },
  r64000: {
    left: 208,
    width: 120,
    fontFamily: FontFamily.istokWebBold,
    fontWeight: "700",
  },
  androidLarge6: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default AndroidLarge11;
