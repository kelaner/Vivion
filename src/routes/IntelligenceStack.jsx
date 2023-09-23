import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntelligenceScreen from "../screens/Intelligence";

const Stack = createNativeStackNavigator();

const IntelligenceStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Intelligence">
      <Stack.Screen
        name="Intelligence"
        component={IntelligenceScreen}
        options={{
          title: "",
          headerTitleAlign: "center",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default IntelligenceStack;
