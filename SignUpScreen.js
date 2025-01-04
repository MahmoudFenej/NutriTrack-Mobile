import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export function SignupScreen({ navigation }) {
  const [gender, setGender] = useState('male');
  const [goal, setGoal] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleSignUp = () => {
    // تحقق من أن جميع الحقول تم ملؤها
    if (!username || !password || !firstName || !lastName || !email || !age || !weight || !height || !goal) {
      Alert.alert('Error', 'Please fill in all the fields before proceeding.');
      return; // إذا كانت الحقول فارغة، لا يتم التنقل إلى LoginScreen
    }

    // إذا كانت جميع الحقول مملوءة، الانتقال إلى شاشة Login
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>NutriTrack</Text>
      </View>

      <TextInput style={styles.input} placeholder="User Name" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
      <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" value={age} onChangeText={setAge} />
      <TextInput style={styles.input} placeholder="Weight (kg)" keyboardType="numeric" value={weight} onChangeText={setWeight} />
      <TextInput style={styles.input} placeholder="Height (cm)" keyboardType="numeric" value={height} onChangeText={setHeight} />

      <View style={styles.genderContainer}>
        <Text style={styles.label}>Gender:</Text>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'male' && styles.selectedGender]}
          onPress={() => setGender('male')}
        >
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'female' && styles.selectedGender]}
          onPress={() => setGender('female')}
        >
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>

      <Picker
        selectedValue={goal}
        style={styles.picker}
        onValueChange={(itemValue) => setGoal(itemValue)}
      >
        <Picker.Item label="Select Goal" value="" />
        <Picker.Item label="Lose Weight" value="lose" />
        <Picker.Item label="Maintain Weight" value="maintain" />
        <Picker.Item label="Gain Muscle" value="gain" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    backgroundColor: '#001f3f',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  genderButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
  },
  selectedGender: {
    backgroundColor: '#0074D9',
    borderColor: '#0074D9',
  },
  genderText: {
    color: '#000',
  },
  picker: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#001f3f',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});