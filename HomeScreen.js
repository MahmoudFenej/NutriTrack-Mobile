import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const HomeScreen = ({ navigation }) => {

  const [data, setData] = useState();
  const [selectedDay, setSelectedDay] = useState(1);
  const [dayObject, setDayObject] = useState({});

  const headers = { "content-type": "application/json" };

  const fetchData = async () => {
    try {
      const response = await fetch("http://192.168.1.13:5000/plan", {
        headers,
        method: "GET", // No body needed for GET requests
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      const data = result?.plan?.length > 0 ? result?.plan[0] : [];
      const allDays = data?.Days;

      setData(data);
      setDayObject(allDays?.length > 0 ? allDays[selectedDay] : {});

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const allDays = data?.Days;
    const dayObject = allDays?.length > 0 ? allDays[selectedDay] : {};
    setDayObject(dayObject);
  }, [selectedDay, data]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>NutriTrack</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Text style={styles.iconText}>📅</Text> {/* Calendar Icon */}
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
            <Text key={index} style={styles.dateText} onPress={() => setSelectedDay(date)}>
              {date}
            </Text>
          ))}
        </View>
        <View style={styles.datesRow}>
          {[8, 9, 10, 11, 12, 13, 14].map((date, index) => (
            <Text key={index} style={styles.dateText} onPress={() => setSelectedDay(date)}>
              {date}
            </Text>
          ))}
        </View>
      </View>

      {/* Calorie Tracker */}
      <View style={styles.calorieTracker}>
        <View style={styles.calorieCircle}>
          <Text style={styles.calorieText}>Cal</Text>
          <Text style={styles.calorieCount}>{dayObject.total_calories}</Text>
        </View>
      </View>

      {/* Meal Sections */}
      <View style={styles.mealSections}>
        <View style={styles.column}>
          {(dayObject?.meals?.slice(0, 3) || []).map((e, index) => (
            <View key={index} style={styles.mealCard}>
              <TouchableOpacity onPress={() => navigation.navigate('Breakfast')}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardHeaderText}>{e.category}</Text>
                </View>
                <Text>{e.meal.map(e => e.details.name).join("\n")}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Second Column */}
        <View style={styles.column}>
          {(dayObject?.meals?.slice(-3) || []).map((e, index) => (
            <View key={index} style={styles.mealCard}>
              <TouchableOpacity onPress={() => navigation.navigate('Breakfast')}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardHeaderText}>{e.category}</Text>
                </View>
                <Text>{e.meal.map(e => e.details.name).join("\n")}</Text>
              </TouchableOpacity>
            </View>
          ))}
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
    width: 130,
    height: 130,
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
    paddingHorizontal: 10,
  },
  column: {
    flex: 1,
  },
  mealCard: {
    height: 90,
    backgroundColor: '#E8F0F2',
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 5,
  },
  cardHeader: {
    backgroundColor: '#002B5B',
    height: 25,
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