import { useFocusEffect, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const HomeScreen = ({ navigation }) => {

  const route = useRoute();
  const { user } = route.params || {};

  const [data, setData] = useState();
  const [selectedDay, setSelectedDay] = useState(0);
  const [dayObject, setDayObject] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch("https://nutri-25e3e0c915ae.herokuapp.com/plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user?._id,
          goal: user?.goal,
        }),
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

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

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
            <Text style={styles.iconText}>📅</Text> 
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
            <TouchableOpacity key={index} onPress={() => setSelectedDay(date-1)} style={[styles.dateBox, selectedDay === date-1 && styles.selectedDate]}>
              <Text style={styles.dateText}>{date}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.datesRow}>
          {[8, 9, 10, 11, 12, 13, 14].map((date, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedDay(date-1)} style={[styles.dateBox, selectedDay === date-1 && styles.selectedDate]}>
              <Text style={styles.dateText}>{date}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Calorie Tracker */}
      <View style={styles.calorieTracker}>
        <View style={styles.calorieCircle}>
          <Text style={styles.calorieText}>Cal</Text>
          <Text style={styles.calorieCount}>{dayObject?.total_calories}</Text>
        </View>
      </View>

      {/* Meal Sections */}
      <View style={styles.mealSections}>
        <View style={styles.column}>
          {/* عرض الوجبات مع التمييز بالنص فقط */}
          {(dayObject?.meals?.slice(0, 3) || []).map((e, index) => (
            <View key={index} style={styles.mealCard}>
              <TouchableOpacity onPress={() => navigation.navigate('Breakfast', { meal: e.meal, category: e.category })}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardHeaderText}>{e.category}</Text>
                </View>
                <Text>{String(e.meal.map(e => e.details?.name).join("\n"))}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Second Column */}
        <View style={styles.column}>
          {/* عرض الوجبات مع التمييز بالنص فقط */}
          {(dayObject?.meals?.slice(-3) || []).map((e, index) => (
            <View key={index} style={styles.mealCard}>
              <TouchableOpacity onPress={() => navigation.navigate('Breakfast', { meal: e.meal, category: e.category })}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardHeaderText}>{e.category}</Text>
                </View>
                <Text>{String(e.meal.map(e => e.details?.name).join("\n"))}</Text>
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
    justifyContent: 'center',
    marginTop: 5,
  },
  dateBox: {
    backgroundColor: '#004080',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    marginHorizontal: 5,
  },
  selectedDate: {
    backgroundColor: '#FFA500',
  },
  dateText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
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
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'flex-start', // Ensures proper alignment
  },
  column: {
    width: '48%', 
    marginBottom: 10,
    flexDirection: 'column', // Ensures proper stacking
  },
  mealCard: {
    backgroundColor: '#E8F0F2',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10, // Adds spacing between cards
    minHeight: 80, // Prevents overlapping if content is dynamic
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
    fontSize: 14,
    fontWeight: 'bold',
  },
});