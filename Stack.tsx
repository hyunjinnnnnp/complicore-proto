import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import DriversLicense from "./screens/DriversLicense";
import { FontAwesome, Feather } from "@expo/vector-icons";
import Home from "./screens/Home";
import TakePhoto from "./screens/TakePhoto";
import { RootStackParamList } from "./types";

const NativeStack = createNativeStackNavigator<RootStackParamList>();

const Stack = () => {
  const navigation = useNavigation();
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: "center", //for android
        headerTitleStyle: {
          fontSize: Platform.OS === "ios" ? 24 : 22,
          fontFamily:
            Platform.OS === "ios" ? "Apple SD Gothic Neo" : "sans-serif",
        },
        headerBackVisible: false,
        headerBackTitleVisible: false,
        headerLeft: () => (
          <Feather name="x" size={28} onPress={() => navigation.goBack()} />
        ),
      }}
    >
      <NativeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => <FontAwesome name="bars" size={30} />,
          title: "COMPLICORE",
        }}
      />
      <NativeStack.Screen
        name="DriversLicense"
        component={DriversLicense}
        options={{ title: "DRIVING LICENSE" }}
      />
      <NativeStack.Screen
        name="TakePhoto"
        component={TakePhoto}
        options={{ headerShown: false }}
      />
    </NativeStack.Navigator>
  );
};
export default Stack;
