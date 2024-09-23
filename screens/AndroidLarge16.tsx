import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RectangleComponent from "../components/RectangleComponent";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const AndroidLarge16 = () => {
  return (
    <LinearGradient
      style={styles.androidLarge9}
      locations={[0, 1]}
      colors={["#b138af", "#dcc9c9"]}
    >
      <Image
        style={styles.download191}
        contentFit="cover"
        source={require("../assets/download-19-1.png")}
      />
      <Text style={[styles.thankYouFor, styles.menuListTypo]}>
        Thank you for Odering,your request will be Accepted shortly
      </Text>
      <RectangleComponent />
      <Text style={[styles.menuList, styles.menuListTypo]}>Menu List</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  menuListTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    left: "50%",
    position: "absolute",
  },
  download191: {
    top: 120,
    left: 40,
    width: 258,
    height: 195,
    position: "absolute",
  },
  thankYouFor: {
    marginLeft: -180,
    top: 414,
    fontSize: FontSize.size_21xl,
    color: Color.colorBlack,
    width: 360,
    height: 204,
  },
  menuList: {
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
  },
  androidLarge9: {
    flex: 1,
    width: "100%",
    height: 858,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default AndroidLarge16;
