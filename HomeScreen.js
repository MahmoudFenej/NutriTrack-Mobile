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
          <TouchableOpacity>
            <Text style={styles.iconText}>📅</Text> {/* Calendar Icon */}
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.iconText}>⚙️</Text> {/* Settings Icon */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Calendar */}
      <View style={styles.calendar}>
        {/* Days */}
        <View style={styles.daysRow}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <Text key={index} style={styles.dayText}>
              {day}
            </Text>
          ))}
        </View>
        {/* Dates */}
        <View style={styles.datesRow}>
          {[1, 2, 3, 4, 5, 6, 7].map((date, index) => (
            <Text key={index} style={styles.dateText}>
              {date}
            </Text>
          ))}
        </View>
        <View style={styles.datesRow}>
          {[8, 9, 10, 11, 12, 13, 14].map((date, index) => (
            <Text key={index} style={styles.dateText}>
              {date}
            </Text>
          ))}
        </View>
      </View>

      {/* Calorie Tracker */}
      <View style={styles.calorieTracker}>
        <View style={styles.calorieCircle}>
          <Text style={styles.calorieText}>Cal</Text>
          <Text style={styles.calorieCount}>0 / 1500</Text>
        </View>
      </View>

      {/* Meal Sections */}
      <View style={styles.mealSections}>
        {/* First Column */}
        <View style={styles.column}>
          <View style={styles.mealCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>Breakfast</Text>
            </View>
          </View>
          <View style={styles.mealCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>Lunch</Text>
            </View>
          </View>
          <View style={styles.mealCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>Before Workout</Text>
            </View>
          </View>
        </View>

        {/* Second Column */}
        <View style={styles.column}>
          <View style={styles.mealCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>Snack</Text>
            </View>
          </View>
          <View style={styles.mealCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>Dinner</Text>
            </View>
          </View>
          <View style={styles.mealCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>After Workout</Text>
            </View>
          </View>
        </View>
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
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#002B5B',
    backgroundColor: '#002B5B',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    color: 'white',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconText: {
    fontSize: 22,
    color: 'black',
    marginLeft: 10,
  },
  calendar: {
    backgroundColor: '#002B5B',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  dayText: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    flex: 1,
  },
  datesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  dateText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    flex: 1,
  },
  calorieTracker: {
    alignItems: 'center',
    marginBottom: 20,
  },
  calorieCircle: {
    width: 130, // تقليل الحجم
    height: 130, // تقليل الحجم
    borderRadius: 65,
    borderWidth: 4,
    borderColor: '#B0C4DE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calorieText: {
    fontSize: 16,
    color: '#B0C4DE',
  },
  calorieCount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#002B5B',
  },
  mealSections: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10, // إضافة مساحة بين الأعمدة
  },
  column: {
    flex: 1,
  },
  mealCard: {
    height: 90, // تصغير المربعات
    backgroundColor: '#E8F0F2',
    borderRadius: 10,
    marginBottom: 15, // فراغ أكبر بين المربعات
    marginHorizontal: 5, // فراغ أفقي صغير بين الأعمدة
  },
  cardHeader: {
    backgroundColor: '#002B5B',
    height: 25, // تصغير ارتفاع الهيدر
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardHeaderText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});