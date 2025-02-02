
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export const BreakfastScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>NutriTrack</Text>
      </View>
      <Text style={styles.title}>Breakfast</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Oatmeal with Fruits and Nuts</Text>
        <Text style={styles.sectionSubtitle}>Ingredients:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• ½ cup of oats</Text>
          <Text style={styles.listItem}>• 1 cup of water or plant-based milk</Text>
          <Text style={styles.listItem}>• 1 teaspoon of honey (optional)</Text>
          <Text style={styles.listItem}>• ½ banana or apple, chopped</Text>
          <Text style={styles.listItem}>• A handful of nuts (such as almonds or walnuts)</Text>
          <Text style={styles.listItem}>• A pinch of cinnamon (optional)</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preparation:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>1. Boil the water or milk in a pot.</Text>
          <Text style={styles.listItem}>2. Add the oats and cook over medium heat for 5-7 minutes until soft.</Text>
          <Text style={styles.listItem}>3. Add honey and cinnamon (if using) and stir well.</Text>
          <Text style={styles.listItem}>4. Serve the oatmeal in a bowl and top with fruits and nuts.</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Benefits:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Oats are high in fiber, helping to promote a feeling of fullness.</Text>
          <Text style={styles.listItem}>• Fruits add vitamins and minerals.</Text>
          <Text style={styles.listItem}>• Nuts provide healthy fats.</Text>
        </View>
      </View>
      <View style={styles.nav}>
        <Text style={styles.navLink}>Home</Text>
        <Text style={styles.navLink}>Login</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e9f5ff',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    backgroundColor: '#0077b6',
    width: '100%',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    marginVertical: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0077b6',
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#0077b6',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  list: {
    paddingLeft: 10,
  },
  listItem: {
    marginBottom: 5,
  },
  nav: {
    flexDirection: 'row',
    marginTop: 15,
  },
  navLink: {
    textDecorationLine: 'underline',
    color: '#0077b6',
    padding: 10,
    fontSize: 14,
    marginHorizontal: 5,
  },
});
