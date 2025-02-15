import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './HomeScreen';
import { AboutScreen } from './AboutScreen';
import { OrderScreen } from './OrderScreen';
import { NutriTrackScreen } from './NutriTrackScreen';
import { LogoutScreen } from './LogoutScreen'; // Import the LogoutScreen
import { useRoute } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export function HomeDrawer() {
  const route = useRoute();
  const { user } = route.params || {};

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        initialParams={{ user }} 
      />
      <Drawer.Screen name="About Us" component={AboutScreen} />
      <Drawer.Screen name="Menu" component={OrderScreen} />
      <Drawer.Screen name="Generate Plan" component={NutriTrackScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}
