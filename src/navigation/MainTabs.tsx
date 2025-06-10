import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from "../app/Main/page";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Main" component={Main} />
    </Tab.Navigator>
  );
};

export default MainTabs;