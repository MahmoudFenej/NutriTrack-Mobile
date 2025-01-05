// ملف: NutriTrack_Mobile/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>NutriTrack</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.icon}>
            <Text>📅</Text> {/* Placeholder for Calendar Icon */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Text>⚙️</Text> {/* Placeholder for Settings Icon */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Calendar */}
      <View style={styles.calendar}>
        {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day, index) => (
          <Text key={index} style={styles.dayText}>
            {day}
          </Text>
        ))}
        <View style={styles.dateRow}>
          {[1, 2, 3, 4, 5, 6, 7].map((date, index) => (
            <Text key={index} style={styles.dateText}>
              {date}
            </Text>
          ))}
        </View>
        <View style={styles.dateRow}>
          {[8, 9, 10, 11, 12, 13, 14].map((date, index) => (
            <Text key={index} style={styles.dateText}>
              {date}
            </Text>
          ))}
        </View>
      </View>

      {/* Calorie Tracker */}
      <View style={styles.calorieTracker}>
        <Text style={styles.calorieText}>Cal</Text>
        <Text style={styles.calorieCount}>0 / 1500</Text>
      </View>

      {/* Meal Sections */}
      <View style={styles.mealSections}>
        {['Breakfast', 'Before exercise', 'Snack', 'Lunch', 'After exercise', 'Dinner'].map((meal, index) => (
          <View key={index} style={styles.mealCard}>
            <Text style={styles.mealText}>{meal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
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
    color: '#002B5B',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  calendar: {
    backgroundColor: '#002B5B',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  dayText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  dateText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  calorieTracker: {
    alignItems: 'center',
    marginBottom: 20,
  },
  calorieText: {
    fontSize: 20,
    color: '#B0C4DE',
  },
  calorieCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#002B5B',
  },
  mealSections: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  mealCard: {
    width: '30%',
    height: 100,
    backgroundColor: '#E8F0F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  mealText: {
    fontSize: 14,
    color: '#002B5B',
    textAlign: 'center',
  },
});
