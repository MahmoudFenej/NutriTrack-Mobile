import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

export function LogoutScreen({ navigation }) {
  useEffect(() => {
    navigation.navigate('Login');
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
