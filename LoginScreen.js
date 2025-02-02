import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native';

export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const headers = { "Content-Type": "application/json" };

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both username and password.");
      return;
    }

    try {
      // الاتصال بالسيرفر
      const response = await fetch("http://192.168.1.35:5000/login", {
        headers,
        method: "POST",
        body: JSON.stringify({ username: "mahmoud", password: "mahmoud" }), // تعديل هنا
      });

      if (!response.ok) {
        const errorData = await response.json();
        Alert.alert("Error", errorData.message || "Something went wrong.");
        return;
      }

      const responseData = await response.json();

      if (responseData.message === "login successfully") {
        navigation.navigate('HomeDrawer'); // الانتقال إلى الشاشة الرئيسية
      } else {
        Alert.alert("Error", responseData.message || "Login failed.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      Alert.alert("Error", "An error occurred during login. Please try again.");
    }
  }

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          {/* Logo */}
          <Image
            style={styles.logo}
            source={{ uri: 'https://your-logo-url.com/logo.png' }} // استبدل بالرابط الخاص بشعارك
          />
        </View>
      </View>

      {/* إدخال اسم المستخدم وكلمة المرور */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#ccc"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      {/* زر تسجيل الدخول */}
      <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>

      {/* زر الانتقال إلى شاشة التسجيل */}
      <TouchableOpacity
        style={[styles.button, styles.signUpButton]}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f3f', // خلفية زرقاء داكنة
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
    width: '100%',
    height: 50,
    backgroundColor: '#003366', // لون خلفية المدخل
    borderRadius: 10,
    paddingHorizontal: 15,
    color: 'white',
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#28a745', // زر تسجيل الدخول باللون الأخضر
  },
  signUpButton: {
    backgroundColor: '#ff851b', // زر التسجيل باللون البرتقالي
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});