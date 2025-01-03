import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>NutriTrack</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.icon}>
            <Text>📅</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Text>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Calendar */}
      <View style={styles.calendar}>
        {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day, index) => (
          <View key={index} style={styles.day}>
            <Text style={styles.dayText}>{day}</Text>
            <Text style={styles.dateText}>{index + 1}</Text>
          </View>
        ))}
      </View>

      {/* Calories Circle */}
      <View style={styles.calorieContainer}>
        <Text style={styles.calorieText}>Cal</Text>
        <Text style={styles.calorieNumber}>0 / 1500</Text>
      </View>

      {/* Sections */}
      <View style={styles.sections}>
        {["Breakfast", "Before Workout", "Snack", "Lunch", "After Workout", "Dinner"].map((label, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionLabel}>{label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2A2A2A',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  calendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#4A6274',
    padding: 10,
    borderRadius: 8,
  },
  day: {
    alignItems: 'center',
  },
  dayText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  dateText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  calorieContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  calorieText: {
    fontSize: 18,
    color: '#2A2A2A',
  },
  calorieNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2A2A2A',
  },
  sections: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  section: {
    width: '30%',
    height: 100,
    backgroundColor: '#E1F0FA',
    borderRadius: 8,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2A2A2A',
  },
});