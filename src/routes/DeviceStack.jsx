import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeviceScreen from "../screens/Device";

const Stack = createNativeStackNavigator();

const DeviceStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Device">
      <Stack.Screen
        name="Device"
        component={DeviceScreen}
        options={{
          title: "",
          headerTitleAlign: "center",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default DeviceStack;
