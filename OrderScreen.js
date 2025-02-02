// order-screen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const OrderScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>NutriTrack</Text>
      <Text style={styles.title}>Breakfast</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Oatmeal with Fruits and Nuts</Text>
        <Text style={styles.sectionContent}>Ingredients:</Text>
        <Text style={styles.sectionContent}>- ½ cup of oats</Text>
        <Text style={styles.sectionContent}>- 1 cup of water or plant-based milk</Text>
        <Text style={styles.sectionContent}>- 1 teaspoon of honey (optional)</Text>
        <Text style={styles.sectionContent}>- ½ banana or apple, chopped</Text>
        <Text style={styles.sectionContent}>- A handful of nuts (such as almonds or walnuts)</Text>
        <Text style={styles.sectionContent}>- A pinch of cinnamon (optional)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Preparation:</Text>
        <Text style={styles.sectionContent}>1. Boil the water or milk in a pot.</Text>
        <Text style={styles.sectionContent}>2. Add the oats and cook over medium heat for 5-7 minutes until soft.</Text>
        <Text style={styles.sectionContent}>3. Add honey and cinnamon (if using) and stir well.</Text>
        <Text style={styles.sectionContent}>4. Serve the oatmeal in a bowl and top with fruits and nuts.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Benefits:</Text>
        <Text style={styles.sectionContent}>- Oats are high in fiber, helping to promote a feeling of fullness.</Text>
        <Text style={styles.sectionContent}>- Fruits add vitamins and minerals.</Text>
        <Text style={styles.sectionContent}>- Nuts provide healthy fats.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e9f5ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  header: {
    backgroundColor: '#0077b6',
    color: 'white',
    padding: 10,
    borderRadius: 8,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  title: {
    marginVertical: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0077b6',
  },
  section: {
    alignItems: 'flex-start',
    marginVertical: 10,
    width: '100%',
  },
  sectionHeader: {
    color: '#0077b6',
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionContent: {
    marginBottom: 5,
    fontSize: 14,
  },
});

export default OrderScreen;