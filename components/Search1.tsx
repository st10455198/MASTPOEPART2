import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Search1 = () => {
  return (
    <View style={styles.search}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  search: {
    width: 47,
    height: 47,
    overflow: "hidden",
  },
});

export default Search1;
