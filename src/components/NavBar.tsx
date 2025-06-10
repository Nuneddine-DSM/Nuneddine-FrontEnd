import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Browser, Copy, User } from "../assets";
import Main from "../app/Main/page";
import Manage from "../app/Manage/page";
import Guide from "../app/Guide/page";
import MyPage from "../app/MyPage/page";
import { color } from "../styles"

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        tabBarActiveTintColor: `${color.pink300}`,
        tabBarInactiveTintColor: `${color.gray500}`,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 68,
          paddingTop: 6,
          paddingBottom: 6
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 600
        }
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
          tabBarLabel: '홈',

          tabBarIcon: ({ color }) => (
            <Home size={40} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Manage"
        component={Manage}
        options={{
          headerShown: false,
          tabBarLabel: '관리',

          tabBarIcon: ({ color }) => (
            <Browser size={40} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Guide"
        component={Guide}
        options={{
          headerShown: false,
          tabBarLabel: '가이드',

          tabBarIcon: ({ color }) => (
            <Copy size={40} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          headerShown: false,
          tabBarLabel: '마이',

          tabBarIcon: ({ color }) => (
            <User size={40} color={color} />
          ),
        }}
      />

    </Tab.Navigator >
  )
}

export default NavBar