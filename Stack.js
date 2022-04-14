import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import DriversLicense from "./screens/DriversLicense";
import { FontAwesome } from "@expo/vector-icons";
import Home from "./screens/Home";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  const navigation = useNavigation();
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerStyle: {
          fontSize: 50,
        },
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "300",
          letterSpacing: 2,
        },
        headerBackVisible: false,
        headerBackTitleVisible: false,
        headerLeft: () => (
          <FontAwesome
            name="close"
            size={28}
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    >
      <NativeStack.Screen
        name="COMPLICORE"
        component={Home}
        options={{
          headerLeft: () => <FontAwesome name="bars" size={40} />,
        }}
      />
      <NativeStack.Screen
        name="DriversLicense"
        component={DriversLicense}
        options={{ title: "DRIVING LICENSE" }}
      />
    </NativeStack.Navigator>
  );
};
export default Stack;
