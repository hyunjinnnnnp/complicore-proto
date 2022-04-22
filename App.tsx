import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import * as Font from "expo-font";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import Stack from "./navigations/Stack";

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    await Font.loadAsync(FontAwesome.font);
    await Font.loadAsync(Feather.font);
    await Asset.loadAsync(require("./license.png"));
  };
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
        // should be modified
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
