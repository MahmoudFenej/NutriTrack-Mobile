import React from 'react';
import { StyleSheet, View } from 'react-native';

export function AboutUsScreen() {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f3f', // خلفية زرقاء غامقة
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 50,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#003366', // لون خلفية الدائرة
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80, // حجم الشعار
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#003366', // لون الحقول
    borderRadius: 10,
    paddingHorizontal: 15,
    color: 'white',
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#28a745', // لون أخضر
  },
  signUpButton: {
    backgroundColor: '#ff851b', // لون برتقالي
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});