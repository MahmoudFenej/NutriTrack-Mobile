import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './HomeScreen';
import { AboutUsScreen } from './AboutScreen';


const Drawer = createDrawerNavigator();

export function HomeDrawer({ navigation }) {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About Us" component={AboutUsScreen} />
        <Drawer.Screen
          name="Logout"
          component={() => {
            navigation.navigate('Login');
            return null;
          }}
        />
      </Drawer.Navigator>
    );
  }