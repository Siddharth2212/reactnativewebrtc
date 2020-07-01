import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import VideocallScreen from '../screens/VideocallScreen';
import {Icon} from "react-native-elements"

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <Tab.Navigator tabBarOptions={{
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'powderblue' },
      }}>
        <Tab.Screen name="Video Call" component={VideocallScreen} />
      </Tab.Navigator>
  );
}
