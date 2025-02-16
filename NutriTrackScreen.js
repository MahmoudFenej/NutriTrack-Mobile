import { useRoute, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, 
  ScrollView, Button, Alert, ActivityIndicator 
} from "react-native";

export const NutriTrackScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { user } = route.params || {};

  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("weight loss");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!age || !weight || !height || !gender || !goal || !user?._id) {
      Alert.alert("Error", "Please fill in all the fields before proceeding.");
      return;
    }

    setLoading(true);
    const headers = { "content-type": "application/json" };

    try {
      const response = await fetch("https://nutri-25e3e0c915ae.herokuapp.com/generatePlan", {
        headers,
        method: "POST",
        body: JSON.stringify({
          age,
          gender,
          weight,
          height,
          goal,
          user_id: user?._id
        })
      });

      const responseData = await response.json();

      if (responseData) {
        navigation.navigate("HomeDrawer", { user: responseData });
      } else {
        Alert.alert("Error", responseData);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "An error occurred during generate plan.");
    } finally {
      setLoading(false);
    }
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
              <Text style={[styles.optionText, gender === item && styles.selectedOptionText]}>
                {item}
              </Text>
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
          {["loose weight", "gain weight", "build muscles"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.option, goal === item && styles.selectedOption]}
              onPress={() => setGoal(item)}
            >
              <Text style={[styles.optionText, goal === item && styles.selectedOptionText]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Submit Button with Loader */}
      {loading ? (
        <ActivityIndicator size="large" color="#FFFFFF" style={styles.loader} />
      ) : (
        <Button title="Submit" onPress={handleSubmit} disabled={loading} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#001F3F",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#001F3F",
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
  optionText: {
    color: "#001F3F", // Default text color
  },
  selectedOption: {
    backgroundColor: "#FFD700", // Highlight selected option
  },
  selectedOptionText: {
    fontWeight: "bold",
    color: "#001F3F", // Ensure text remains readable
  },
  loader: {
    marginTop: 20,
  },
});

export default NutriTrackScreen;
