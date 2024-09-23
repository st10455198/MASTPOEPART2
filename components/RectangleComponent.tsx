import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const RectangleComponent = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.androidLarge9Child}
      onPress={() => navigation.navigate("AndroidLarge17")}
    />
  );
};

const styles = StyleSheet.create({
  androidLarge9Child: {
    position: "absolute",
    top: 618,
    left: 95,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke,
    width: 148,
    height: 46,
  },
});

export default RectangleComponent;
