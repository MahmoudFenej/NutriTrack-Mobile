import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const MenuItem = ({ imageSource, title, calories, price }) => (
  <View style={styles.menuItem}>
    <Image source={imageSource} style={styles.menuItemImage} />
    <Text style={styles.menuItemTitle}>{title}</Text>
    <Text style={styles.menuItemCalories}>{calories} calories</Text>
    <Text style={styles.menuItemPrice}>${price}</Text>
  </View>
);

export const OrderScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Breakfast');

  const menuSections = {
    Breakfast: [
      { imageSource: require('./assets/20.jpeg'), title: 'Pancakes', calories: 350, price: 5 },
      { imageSource: require('./assets/2.jpeg'), title: 'Omelette', calories: 250, price: 4 },
      { imageSource: require('./assets/3.jpeg'), title: 'Avocado Toast', calories: 300, price: 6 },
      { imageSource: require('./assets/4.jpeg'), title: 'Smoothie Bowl', calories: 200, price: 5 },
      { imageSource: require('./assets/5.jpeg'), title: 'French Toast', calories: 400, price: 5 },
      { imageSource: require('./assets/6.jpeg'), title: 'Greek Yogurt', calories: 150, price: 3 },
    ],
    Lunch: [
      { imageSource: require('./assets/7.jpeg'), title: 'Grilled Chicken Salad', calories: 350, price: 7 },
      { imageSource: require('./assets/8.jpeg'),  title: 'Beef Burger', calories: 600, price: 8 },
      { imageSource: require ('./assets/9.jpeg'), title: 'Chicken Wrap', calories: 450, price: 7 },
      { imageSource: require ('./assets/10.jpeg'), title: 'Pasta Primavera', calories: 500, price: 8 },
      { imageSource: require ('./assets/11.jpeg'), title: 'Steak & Veggies', calories: 550, price: 9 },
      { imageSource: require ('./assets/14.jpeg'), title: 'Tuna Sandwich', calories: 350, price: 6 },
    ],
    Dinner: [
      { imageSource: require ('./assets/13.jpeg'), title: 'Grilled Salmon', calories: 400, price: 9 },
      { imageSource: require ('./assets/12.jpeg'), title: 'Chicken Alfredo', calories: 700, price: 10 },
      { imageSource: require ('./assets/15.jpeg'), title: 'Beef Stir Fry', calories: 550, price: 9 },
      { imageSource: require ('./assets/16.jpeg'), title: 'Vegetable Curry', calories: 400, price: 8 },
      { imageSource: require ('./assets/17.jpeg'), title: 'Grilled Shrimp', calories: 450, price: 10 },
      { imageSource: require ('./assets/18.jpeg'), title: 'Lentil Soup', calories: 300, price: 5 },
    ],
    Snacks: [
      { imageSource: require ('./assets/19.jpeg'), title: 'Granola Bar', calories: 150, price: 2 },
      { imageSource: require ('./assets/1.jpeg'), title: 'Fruit Salad', calories: 200, price: 3 },
      { imageSource: require ('./assets/21.jpeg'), title: 'Almonds', calories: 180, price: 4 },
      { imageSource: require ('./assets/22.jpeg'), title: 'Greek Yogurt', calories: 100, price: 3 },
      { imageSource: require ('./assets/23.jpeg'), title: 'Smoothie', calories: 250, price: 5 },
      { imageSource: require ('./assets/24.jpeg'), title: 'Peanut Butter Toast', calories: 300, price: 4 },
    ],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.tabContainer}>
        {Object.keys(menuSections).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.menuContainer}>
        {menuSections[selectedTab].map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#001F3F',
    padding: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#003366',
  },
  activeTab: {
    backgroundColor: '#007BFF',
  },
  tabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '47%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  menuItemImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover', // Ensure the image fits properly
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  menuItemCalories: {
    fontSize: 14,
    color: 'gray',
  },
  menuItemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});