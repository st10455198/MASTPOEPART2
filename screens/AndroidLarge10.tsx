import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const AndroidLarge10 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.androidLarge1}
      locations={[0, 1]}
      colors={["#b138af", "#dcc9c9"]}
    >
      <Image
        style={styles.download38}
        contentFit="cover"
        source={require("../assets/download-3-8.png")}
      />
      <Image
        style={[styles.download13Icon, styles.getStartedPosition]}
        contentFit="cover"
        source={require("../assets/download-13.png")}
      />
      <Text style={[styles.enjoyYourFood, styles.getStartedPosition]}>
        Enjoy Your Food
      </Text>
      <Pressable
        style={styles.androidLarge1Child}
        onPress={() => navigation.navigate("AndroidLarge17")}
      />
      <Pressable
        style={[styles.getStarted, styles.getStartedPosition]}
        onPress={() => navigation.navigate("AndroidLarge17")}
      >
        <Text style={styles.getStarted1}>Get Started</Text>
      </Pressable>
      <Text style={styles.welcomeToChristoffels}>
        Welcome To Christoffel’s restaurant
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  getStartedPosition: {
    left: "50%",
    position: "absolute",
  },
  download38: {
    top: 0,
    left: 0,
    width: 360,
    position: "absolute",
    height: 800,
  },
  download13Icon: {
    marginLeft: -124,
    top: 171,
    width: 248,
    height: 229,
  },
  enjoyYourFood: {
    marginLeft: -105,
    top: 442,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.inspirationRegular,
    color: "#060505",
    width: 235,
    height: 81,
    textAlign: "left",
  },
  androidLarge1Child: {
    top: 618,
    left: 95,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke,
    width: 148,
    height: 68,
    position: "absolute",
  },
  getStarted1: {
    marginLeft: -54,
    fontSize: FontSize.size_mini,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorMediumorchid,
    width: 86,
    height: 18,
    transform: [
      {
        rotate: "-0.1deg",
      },
    ],
    textAlign: "left",
  },
  getStarted: {
    top: 633,
  },
  welcomeToChristoffels: {
    top: 68,
    left: 103,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.ingridDarlingRegular,
    color: "#0a0909",
    width: 201,
    height: 41,
    textAlign: "left",
    position: "absolute",
  },
  androidLarge1: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "transparent",
    height: 800,
  },
});

export default AndroidLarge10;
