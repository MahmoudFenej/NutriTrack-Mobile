import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// استيراد جميع الشاشات
import NutriTrackScreen from './NutriTrackScreen';
import HomeScreen from './HomeScreen';
import OrderScreen from './OrderScreen';
import AboutScreen from './AboutScreen';
import BreakfastScreen from './BreakfastScreen'; // ✅ إضافة شاشة الفطور

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="NutriTrack">
        <Drawer.Screen name="NutriTrack" component={NutriTrackScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Orders" component={OrderScreen} />
        <Drawer.Screen name="Breakfast" component={BreakfastScreen} />  {/* ✅ إضافة شاشة الفطور */}
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}