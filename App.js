import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './LoginScreen';
import { SignUpScreen } from './SignUpScreen';
import { HomeDrawer } from './HomeDrawer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}