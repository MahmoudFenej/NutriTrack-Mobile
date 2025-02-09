import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Button } from "react-native";

export const NutriTrackScreen = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("Female");
  const [goal, setGoal] = useState("weight loss");
  const [activityLevel, setActivityLevel] = useState("Moderate");
  const [hasAllergies, setHasAllergies] = useState(false);
  const [foodsToAvoid, setFoodsToAvoid] = useState("");

  const handleSubmit = () => {
    alert("Form Submitted!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>NutriTrack</Text>
      <Text style={styles.subtitle}>AI Generated Plan</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Gender</Text>
        <View style={styles.optionRow}>
          {["Male", "Female"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.option, gender === item && styles.selectedOption]}
              onPress={() => setGender(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Weight</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Height</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Goal</Text>
        <View style={styles.optionRow}>
          {["weight loss", "weight gain", "maintain weight"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.option, goal === item && styles.selectedOption]}
              onPress={() => setGoal(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Activity Level</Text>
        <View style={styles.optionRow}>
          {["Active", "Moderate", "Sedentary"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.option, activityLevel === item && styles.selectedOption]}
              onPress={() => setActivityLevel(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Do you have any food allergies?</Text>
        <View style={styles.optionRow}>
          {["yes", "no"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.option,
                (hasAllergies && item === "yes") || (!hasAllergies && item === "no")
                  ? styles.selectedOption
                  : null,
              ]}
              onPress={() => setHasAllergies(item === "yes")}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {hasAllergies && (
        <View style={styles.card}>
          <Text style={styles.label}>Specify which foods to avoid</Text>
          <TextInput
            style={styles.input}
            value={foodsToAvoid}
            onChangeText={setFoodsToAvoid}
          />
        </View>
      )}

      {/* Submit Button */}
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#001F3F", // خلفية اللون الأزرق الجديد
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "white", // تغيير اللون إلى الأبيض ليتناسب مع الخلفية الزرقاء
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#FFFFFF", // خلفية باللون الأبيض
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#001F3F", // اللون الأزرق الجديد
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  option: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  selectedOption: {
    backgroundColor: "#FFFFFF", // خلفية باللون الأبيض
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});