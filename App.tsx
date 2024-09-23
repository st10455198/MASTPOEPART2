const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge14 from "./screens/AndroidLarge14";
import AndroidLarge12 from "./screens/AndroidLarge12";
import AndroidLarge17 from "./screens/AndroidLarge17";
import AndroidLarge11 from "./screens/AndroidLarge11";
import AndroidLarge13 from "./screens/AndroidLarge13";
import AndroidLarge10 from "./screens/AndroidLarge10";
import AndroidLarge16 from "./screens/AndroidLarge16";
import AndroidLarge9 from "./screens/AndroidLarge9";
import AndroidLarge15 from "./screens/AndroidLarge15";
import Search1 from "./components/Search1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Italiana-Regular": require("./assets/fonts/Italiana-Regular.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "IrishGrover-Regular": require("./assets/fonts/IrishGrover-Regular.ttf"),
    "InriaSerif-Bold": require("./assets/fonts/InriaSerif-Bold.ttf"),
    "InknutAntiqua-ExtraBold": require("./assets/fonts/InknutAntiqua-ExtraBold.ttf"),
    "IstokWeb-Bold": require("./assets/fonts/IstokWeb-Bold.ttf"),
    "Inspiration-Regular": require("./assets/fonts/Inspiration-Regular.ttf"),
    "IngridDarling-Regular": require("./assets/fonts/IngridDarling-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AndroidLarge14"
              component={AndroidLarge14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge12"
              component={AndroidLarge12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge17"
              component={AndroidLarge17}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge11"
              component={AndroidLarge11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge13"
              component={AndroidLarge13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge10"
              component={AndroidLarge10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge16"
              component={AndroidLarge16}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge9"
              component={AndroidLarge9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge15"
              component={AndroidLarge15}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
