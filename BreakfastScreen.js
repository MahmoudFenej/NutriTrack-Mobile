import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export const BreakfastScreen = () => {
  const route = useRoute();
  const { meal = [], category = "Breakfast" } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>NutriTrack</Text>
      </View>
      <Text style={styles.title}>{category}</Text>

      {meal.length > 0 ? (
        meal.map((item, index) => (
          <View key={index} style={styles.mealCard}>
            <Text style={styles.mealTitle}>{item.details.name || "Meal Name"}</Text>
            <View style={styles.nutritionContainer}>
              <View style={styles.nutritionRow}>
                <Text style={styles.nutritionLabel}>Calories:</Text>
                <Text style={styles.nutritionValue}>{item.details.calories || "N/A"}</Text>
              </View>
              <View style={styles.nutritionRow}>
                <Text style={styles.nutritionLabel}>Carbs:</Text>
                <Text style={styles.nutritionValue}>{item.details.carbs || "N/A"} g</Text>
              </View>
              <View style={styles.nutritionRow}>
                <Text style={styles.nutritionLabel}>Fat:</Text>
                <Text style={styles.nutritionValue}>{item.details.fat || "N/A"} g</Text>
              </View>
              <View style={styles.nutritionRow}>
                <Text style={styles.nutritionLabel}>Protein:</Text>
                <Text style={styles.nutritionValue}>{item.details.protein || "N/A"} g</Text>
              </View>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.noMealText}>No meal data available</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f4f9ff",
    padding: 20,
  },
  header: {
    backgroundColor: "#0077b6",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0077b6",
    textAlign: "center",
    marginBottom: 15,
  },
  mealCard: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0077b6",
    marginBottom: 10,
  },
  nutritionContainer: {
    backgroundColor: "#eaf2f8",
    padding: 10,
    borderRadius: 8,
  },
  nutritionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  nutritionLabel: {
    fontWeight: "bold",
    color: "#555",
  },
  nutritionValue: {
    color: "#333",
  },
  noMealText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
  },
});

