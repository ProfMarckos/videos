import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import YoutubeScreen from './YoutubeScreen';
import VimeoScreen from './VimeoScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <Tab.Screen
        name="YouTube"
        component={YoutubeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Ionicons name="logo-youtube" size={28} color="#FF0000" />
            ) : (
              <Ionicons name="logo-youtube" size={22} color="#888" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Vimeo"
        component={VimeoScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Ionicons name="logo-vimeo" size={28} color="#1ab7ea" />
            ) : (
              <Ionicons name="logo-vimeo" size={22} color="#888" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
