import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>NutriTrack</Text>
      <View style={styles.section}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Welcome to NutriTrack!</Text>{"\n"}
          We are a passionate team of four nutrition and health students
          dedicated to helping you achieve your ideal weight in a healthy and
          effective way.
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Our Vision:</Text>{"\n"}
          At NutriTrack, we envision a world where everyone has access to the
          resources and support needed to lead a healthy lifestyle.
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Our Mission:</Text>{"\n"}
          Our mission is to empower individuals to meet their health goals
          through personalized meal plans and ongoing support.
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Our Values:</Text>{"\n"}
          We believe in transparency, commitment, and community support.
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>What Sets Us Apart:</Text>{"\n"}
          NutriTrack offers a unique smart notification system, ensuring you
          stay on track with inspiring reminders and motivation.
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Join Us:</Text>{"\n"}
          Become a part of the NutriTrack community and start your journey to
          better health today.
        </Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: "https://via.placeholder.com/600x300",
        }}
      />
      <View style={styles.imageText}>
        <Text style={styles.text}>
          Welcome to NutriTrack, your trusted companion on the journey to
          achieving your health and wellness goals. We are a passionate team
          dedicated to empowering individuals to make positive lifestyle
          changes.
        </Text>
        <Text style={styles.text}>
          At NutriTrack, we believe that everyone deserves to feel their best.
          Our approach combines cutting-edge technology with a supportive
          community, ensuring you have the tools and encouragement you need
          every step of the way.
        </Text>
        <Text style={styles.text}>
          Join us at NutriTrack, where we are committed to supporting you in
          your pursuit of a healthier, happier life. Together, we can transform
          your journey into a fulfilling and enjoyable experience.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f8fa",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007acc",
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007acc",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    lineHeight: 24,
  },
  bold: {
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  imageText: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
});
