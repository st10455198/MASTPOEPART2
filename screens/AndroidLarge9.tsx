import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AndroidLarge9 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={[styles.androidLarge7, styles.iconLayout]}
      locations={[0, 1]}
      colors={["#b138af", "#dcc9c9"]}
    >
      <Image
        style={[styles.download23, styles.downloadPosition]}
        contentFit="cover"
        source={require("../assets/download-2-3.png")}
      />
      <Text style={[styles.redVelvetR110, styles.redTypo]}>{`Red velvet
[R110]`}</Text>
      <Pressable
        style={styles.androidLarge7Child}
        onPress={() => navigation.navigate("AndroidLarge17")}
      />
      <Text style={[styles.backToMenu, styles.redTypo]}>Back to menu</Text>
      <Image
        style={[styles.starIcon, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/star1.png")}
      />
      <Text style={[styles.text, styles.textPosition]}>4.9</Text>
      <Text style={[styles.redVelvetCake, styles.redTypo]}>
        Red velvet cake is traditionally a red, crimson, or scarlet-colored
        layer cake, layered with ermine icing.
      </Text>
      <Pressable
        style={[styles.androidLarge7Item, styles.shoppingCartPosition]}
        onPress={() => navigation.navigate("AndroidLarge13")}
      />
      <Text style={[styles.addCart, styles.redTypo]}>Add cart</Text>
      <Pressable
        style={[styles.shoppingCart, styles.shoppingCartPosition]}
        onPress={() => navigation.navigate("AndroidLarge13")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/shopping-cart.png")}
        />
      </Pressable>
      <Image
        style={[styles.download181, styles.downloadPosition]}
        contentFit="cover"
        source={require("../assets/download-18-1.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  downloadPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  redTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  textPosition: {
    top: 240,
    position: "absolute",
  },
  shoppingCartPosition: {
    top: 557,
    position: "absolute",
  },
  download23: {
    width: 395,
    height: 800,
  },
  redVelvetR110: {
    marginLeft: -171.5,
    top: 246,
    width: 253,
    height: 70,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
    fontSize: FontSize.size_5xl,
    left: "50%",
  },
  androidLarge7Child: {
    top: 618,
    left: 95,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke,
    width: 148,
    height: 68,
    position: "absolute",
  },
  backToMenu: {
    marginLeft: -53.5,
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
    fontWeight: "800",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  starIcon: {
    width: 50,
    height: 33,
    left: 236,
  },
  text: {
    left: 300,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
  },
  redVelvetCake: {
    top: 331,
    left: 8,
    width: 352,
    height: 201,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
    fontSize: FontSize.size_5xl,
  },
  androidLarge7Item: {
    left: -11,
    backgroundColor: Color.colorGainsboro,
    width: 473,
    height: 48,
  },
  addCart: {
    top: 560,
    left: 112,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  shoppingCart: {
    width: 96,
    height: 96,
    left: 236,
  },
  download181: {
    width: 355,
    height: 223,
  },
  androidLarge7: {
    flex: 1,
    backgroundColor: "transparent",
    height: 800,
  },
});

export default AndroidLarge9;
