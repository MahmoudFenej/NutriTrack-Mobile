import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

export function SignupScreen({ navigation }) {
  const [gender, setGender] = useState('male');
  const [goal, setGoal] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>NutriTrack</Text>
      </View>

      <TextInput style={styles.input} placeholder="User Name" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TextInput style={styles.input} placeholder="First Name" />
      <TextInput style={styles.input} placeholder="Last Name" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" />
      
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

      <TextInput style={styles.input} placeholder="Weight (kg)" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Height (cm)" keyboardType="numeric" />
      
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

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomeDrawer')} // التنقل إلى شاشة HomeDrawer
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});