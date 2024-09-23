import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AndroidLarge14 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.androidLarge4}
      locations={[0, 1]}
      colors={["#b138af", "#dcc9c9"]}
    >
      <Image
        style={styles.download21}
        contentFit="cover"
        source={require("../assets/download-2-1.png")}
      />
      <Text
        style={[styles.buffaloWingsR150, styles.buffaloFlexBox]}
      >{`Buffalo wings
[R150]`}</Text>
      <Pressable
        style={styles.androidLarge4Child}
        onPress={() => navigation.navigate("AndroidLarge17")}
      />
      <Text style={[styles.backToMenu, styles.textTypo]}>Back to menu</Text>
      <Image
        style={styles.download171}
        contentFit="cover"
        source={require("../assets/download-17-1.png")}
      />
      <Text style={[styles.startersMenu, styles.buffaloFlexBox]}>
        starters menu
      </Text>
      <Image
        style={[styles.starIcon, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/star.png")}
      />
      <Text style={[styles.text, styles.textPosition]}>4.8</Text>
      <Text style={[styles.buffaloWingsDeepFriedUnbr, styles.buffaloFlexBox]}>
        Buffalo wings, deep-fried unbreaded Buffalo wings or drumsticks coated
        with a vinegar-and-cayenne-pepper hot sauce mixed with butter. 
      </Text>
      <Pressable
        style={styles.androidLarge4Item}
        onPress={() => navigation.navigate("AndroidLarge15")}
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
  buffaloFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
  },
  textPosition: {
    top: 240,
    position: "absolute",
  },
  cartPosition: {
    top: 560,
    position: "absolute",
  },
  download21: {
    top: 0,
    left: -98,
    width: 458,
    position: "absolute",
    height: 800,
  },
  buffaloWingsR150: {
    marginLeft: -172,
    top: 246,
    width: 253,
    height: 70,
    fontFamily: FontFamily.italianaRegular,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    left: "50%",
  },
  androidLarge4Child: {
    top: 618,
    left: 95,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke,
    width: 148,
    height: 67,
    position: "absolute",
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
    left: "50%",
    position: "absolute",
  },
  download171: {
    top: 56,
    left: 37,
    width: 240,
    height: 180,
    position: "absolute",
  },
  startersMenu: {
    top: 2,
    left: 42,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.irishGroverRegular,
  },
  starIcon: {
    left: 243,
    width: 50,
    height: 33,
  },
  text: {
    left: 300,
    color: Color.colorWhite,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    fontSize: FontSize.size_5xl,
  },
  buffaloWingsDeepFriedUnbr: {
    top: 331,
    left: 8,
    fontSize: 25,
    width: 352,
    height: 201,
    fontFamily: FontFamily.italianaRegular,
    textAlign: "left",
  },
  androidLarge4Item: {
    top: 557,
    left: -11,
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
    left: 220,
    width: 96,
    height: 96,
    overflow: "hidden",
  },
  androidLarge4: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    overflow: "hidden",
    height: 800,
  },
});

export default AndroidLarge14;
