import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

export function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const headers = {"content-type": "application/json"};

async function handleLogin() {
  try {
    const response = await fetch("http://localhost:5000/login", {
      headers,
      method: "POST",
      body: JSON.stringify({ username: email, password }),
    });

    const responseData = await response.json();

    if (responseData.message === "login successfully") {
      navigation.navigate('HomeDrawer');
    } else {
      alert(responseData.message);
    }
  } catch (error) {
    console.error('Error logging in:', error);
    alert("An error occurred during login.");
  }
}


  return (
    <View style={styles.container}>
      {/* الشعار */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          {/* يمكن إضافة صورة داخل الدائرة */}
          <Image
            style={styles.logo}
            source={{ uri: 'https://your-logo-url.com/logo.png' }} // ضع رابط الصورة هنا
          />
        </View>
      </View>

      {/* الحقول النصية */}
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#ccc" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ccc" secureTextEntry={true} onChangeText={setPassword}/>

      {/* الأزرار */}
      <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin} >
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.signUpButton]} onPress={()=>{
        navigation.navigate("Signup")
      }}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
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