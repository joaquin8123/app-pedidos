import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Shops from "../screens/Shops";
// import AddRestaurant from "../screens/Restaurants/AddRestaurant";
// import Restaurant from "../screens/Restaurants/Restaurant";
// import AddReviewRestaurant from "../screens/Restaurants/AddReviewRestaurant";

const Stack = createStackNavigator();

export default function ShopsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="shops"
        component={Shops}
        options={{ title: "Tiendas" }}
      />
    </Stack.Navigator>
  );
}
