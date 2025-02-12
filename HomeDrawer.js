import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './HomeScreen';
import { AboutScreen } from './AboutScreen';
import { OrderScreen } from './OrderScreen';
import { NutriTrackScreen } from './NutriTrackScreen';
import {LogoutScreen} from './LogoutScreen'; // Import the LogoutScreen

const Drawer = createDrawerNavigator();

export function HomeDrawer() {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About Us" component={AboutScreen} />
        <Drawer.Screen name="Menu" component={OrderScreen} />
        <Drawer.Screen name="Generate Plan" component={NutriTrackScreen} />
        <Drawer.Screen name="Logout" component={LogoutScreen} />
      </Drawer.Navigator>
    );
}
