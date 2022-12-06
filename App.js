import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { Home, Resturant, OrderDelivery } from "./screens";
import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        
        <Stack.Screen name="Resturant" component={Resturant} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
