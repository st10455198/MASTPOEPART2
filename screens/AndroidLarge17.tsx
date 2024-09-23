import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AndroidLarge17 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.androidLarge2}>
      <Image
        style={[styles.download11, styles.downloadPosition]}
        contentFit="cover"
        source={require("../assets/download-1-1.png")}
      />
      <Text style={[styles.menuList, styles.menuListLayout]}>{`Menu List
`}</Text>
      <Image
        style={styles.androidLarge2Child}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.androidLarge2Item, styles.menuListLayout]} />
      <Text style={styles.search}>search</Text>
      <Image
        style={styles.download161}
        contentFit="cover"
        source={require("../assets/download-16-1.png")}
      />
      <Image
        style={[styles.download172, styles.downloadPosition]}
        contentFit="cover"
        source={require("../assets/download-17-2.png")}
      />
      <Pressable
        style={[styles.androidLarge2Inner, styles.androidPosition]}
        onPress={() => navigation.navigate("AndroidLarge14")}
      />
      <Text style={[styles.startersMenu, styles.menuTypo]}>Starters menu</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.androidPosition]}
        onPress={() => navigation.navigate("AndroidLarge12")}
      />
      <Pressable
        style={[styles.mainDishMenuContainer, styles.menuPosition]}
        onPress={() => navigation.navigate("AndroidLarge12")}
      >
        <Text style={[styles.mainDishMenu, styles.menuTypo]}>
          Main dish menu
        </Text>
      </Pressable>
      <Pressable
        style={[styles.androidLarge2Child1, styles.androidPosition]}
        onPress={() => navigation.navigate("AndroidLarge9")}
      />
      <Text style={[styles.dessertMenu, styles.menuPosition]}>
        Dessert menu
      </Text>
      <Image
        style={styles.download151}
        contentFit="cover"
        source={require("../assets/download-15-2.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  downloadPosition: {
    left: 2,
    position: "absolute",
  },
  menuListLayout: {
    height: 46,
    position: "absolute",
  },
  androidPosition: {
    backgroundColor: Color.colorGainsboro,
    right: 0,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  menuTypo: {
    fontFamily: FontFamily.irishGroverRegular,
    color: Color.colorBlack,
    textAlign: "left",
  },
  menuPosition: {
    right: 12,
    position: "absolute",
  },
  download11: {
    top: 0,
    width: 358,
    height: 800,
  },
  menuList: {
    left: 9,
    fontSize: FontSize.size_17xl,
    color: "#fffcfc",
    width: 341,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    height: 46,
    top: 18,
  },
  androidLarge2Child: {
    left: 300,
    width: 50,
    height: 51,
    top: 18,
    position: "absolute",
  },
  androidLarge2Item: {
    marginLeft: -165,
    top: 69,
    left: "50%",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhitesmoke,
    width: 310,
  },
  search: {
    top: 83,
    left: 75,
    width: 115,
    height: 18,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  download161: {
    top: 502,
    width: 105,
    height: 86,
    borderRadius: Border.br_xl,
    left: 2,
    position: "absolute",
  },
  download172: {
    top: 243,
    width: 107,
    height: 80,
  },
  androidLarge2Inner: {
    top: 258,
    width: 179,
    height: 65,
  },
  startersMenu: {
    top: 264,
    right: 22,
    width: 134,
    height: 17,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  rectanglePressable: {
    top: 395,
    width: 173,
    height: 55,
  },
  mainDishMenu: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.irishGroverRegular,
  },
  mainDishMenuContainer: {
    top: 398,
  },
  androidLarge2Child1: {
    top: 521,
    width: 174,
    height: 67,
  },
  dessertMenu: {
    top: 525,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.irishGroverRegular,
    color: Color.colorBlack,
    textAlign: "left",
  },
  download151: {
    top: 350,
    left: -11,
    width: 131,
    height: 100,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.5%",
    width: "7.78%",
    top: "10.38%",
    right: "82.5%",
    bottom: "86.13%",
    left: "9.72%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge2: {
    backgroundColor: "#ad5fbd",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default AndroidLarge17;
