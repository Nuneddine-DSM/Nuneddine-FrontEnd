import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Optician, Manage, Guide, User } from "../assets";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator
      initialRouteName=""
      screenOptions={{
        tabBarActiveTintColor: `black`,
        tabBarInactiveTintColor: `gray`,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 64
        }
      }}
    >
      <Tab.Screen
        name="Optician"
        component={() => null}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Optician size={40} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={() => null}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Home size={40} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Manage"
        component={() => null}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Manage size={40} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Guide"
        component={() => null}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Guide size={40} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={() => null}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <User size={40} color={color} />
          ),
        }}
      />

    </Tab.Navigator >
  )
}

export default NavBar