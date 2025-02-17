import { useRoute, useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
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
  const [waiting, setWaiting] = useState(false);
  const [remainingTime, setRemainingTime] = useState(120); // 2 minutes = 120 seconds

  // Handle the countdown logic
  useEffect(() => {
    let timer;
    if (waiting && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000); // Update every second
    } else if (remainingTime === 0) {
      setWaiting(false);
    }

    return () => clearInterval(timer); // Clean up on unmount
  }, [waiting, remainingTime]);

  const handleSubmit = async () => {
    if (!age || !weight || !height || !gender || !goal || !user?._id) {
      Alert.alert("Error", "Please fill in all the fields before proceeding.");
      return;
    }
  
    setWaiting(true);
    setRemainingTime(120); 
  
    setTimeout(() => {
      setWaiting(false);
    }, 120000);
  
    setLoading(true);
  
    const headers = { "content-type": "application/json" };
  
    try {
      const response = await fetch("http://192.168.1.4:5000/generatePlan", {
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

      {/* Waiting message with countdown */}
      {waiting && (
        <Text style={styles.waitMessage}>
          ⏳ Please wait {remainingTime} seconds for the plan to generate...
        </Text>
      )}

      {/* Loading indicator */}
      {loading ? (
        <ActivityIndicator size="large" color="#FFFFFF" style={styles.loader} />
      ) : (
        <Button title="Submit" onPress={handleSubmit} disabled={loading || waiting} />
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
    color: "#001F3F",
  },
  selectedOption: {
    backgroundColor: "#FFD700",
  },
  selectedOptionText: {
    fontWeight: "bold",
    color: "#001F3F",
  },
  waitMessage: {
    textAlign: "center",
    color: "yellow",
    fontSize: 16,
    marginVertical: 10,
    fontWeight: "bold",
  },
  loader: {
    marginTop: 20,
  },
});

export default NutriTrackScreen;