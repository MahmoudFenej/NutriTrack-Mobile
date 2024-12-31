import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Mock successful login
      if (email === 'test' && password === '1234') {
        navigation.navigate('HomeDrawer');
      } else {
        alert('Invalid credentials');
      }
    };
  
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
        <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
      </View>
    );
  }

  // Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});