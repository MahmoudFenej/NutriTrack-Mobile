import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen';
import { AboutScreen } from './AboutScreen';
import { OrderScreen } from './OrderScreen';
import { BreakfastScreen } from './BreakfastScreen';

const Drawer = createDrawerNavigator();
const OrderStack = createStackNavigator();
const BreakfastStack = createStackNavigator();

function OrderStackScreen() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Order" component={OrderScreen} />
    </OrderStack.Navigator>
  );
}

function BreakfastStackScreen() {
  return (
    <BreakfastStack.Navigator>
      <BreakfastStack.Screen name="Breakfast" component={BreakfastScreen} />
    </BreakfastStack.Navigator>
  );
}

export function HomeDrawer({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About Us" component={AboutScreen} />
      <Drawer.Screen name="Order Food" component={OrderStackScreen} />
      <Drawer.Screen name="Breakfast" component={BreakfastStackScreen} />
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