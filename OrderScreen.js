import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const MenuItem = ({ imageSource, title, calories, price }) => (
  <View style={styles.menuItem}>
    <Image source={{ uri: imageSource }} style={styles.menuItemImage} />
    <Text style={styles.menuItemTitle}>{title}</Text>
    <Text style={styles.menuItemCalories}>{calories} calories</Text>
    <Text style={styles.menuItemPrice}>${price}</Text>
  </View>
);

export const OrderScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Breakfast');

  const menuSections = {
    Breakfast: [
      { imageSource: 'https://your-image-url.com/breakfast1.jpg', title: 'Pancakes', calories: 350, price: 5 },
      { imageSource: 'https://your-image-url.com/breakfast2.jpg', title: 'Omelette', calories: 250, price: 4 },
      { imageSource: 'https://your-image-url.com/breakfast3.jpg', title: 'Avocado Toast', calories: 300, price: 6 },
      { imageSource: 'https://your-image-url.com/breakfast4.jpg', title: 'Smoothie Bowl', calories: 200, price: 5 },
      { imageSource: 'https://your-image-url.com/breakfast5.jpg', title: 'French Toast', calories: 400, price: 5 },
      { imageSource: 'https://your-image-url.com/breakfast6.jpg', title: 'Greek Yogurt', calories: 150, price: 3 },
    ],
    Lunch: [
      { imageSource: 'https://your-image-url.com/lunch1.jpg', title: 'Grilled Chicken Salad', calories: 350, price: 7 },
      { imageSource: 'https://your-image-url.com/lunch2.jpg', title: 'Beef Burger', calories: 600, price: 8 },
      { imageSource: 'https://your-image-url.com/lunch3.jpg', title: 'Chicken Wrap', calories: 450, price: 7 },
      { imageSource: 'https://your-image-url.com/lunch4.jpg', title: 'Pasta Primavera', calories: 500, price: 8 },
      { imageSource: 'https://your-image-url.com/lunch5.jpg', title: 'Steak & Veggies', calories: 550, price: 9 },
      { imageSource: 'https://your-image-url.com/lunch6.jpg', title: 'Tuna Sandwich', calories: 350, price: 6 },
    ],
    Dinner: [
      { imageSource: 'https://your-image-url.com/dinner1.jpg', title: 'Grilled Salmon', calories: 400, price: 9 },
      { imageSource: 'https://your-image-url.com/dinner2.jpg', title: 'Chicken Alfredo', calories: 700, price: 10 },
      { imageSource: 'https://your-image-url.com/dinner3.jpg', title: 'Beef Stir Fry', calories: 550, price: 9 },
      { imageSource: 'https://your-image-url.com/dinner4.jpg', title: 'Vegetable Curry', calories: 400, price: 8 },
      { imageSource: 'https://your-image-url.com/dinner5.jpg', title: 'Grilled Shrimp', calories: 450, price: 10 },
      { imageSource: 'https://your-image-url.com/dinner6.jpg', title: 'Lentil Soup', calories: 300, price: 5 },
    ],
    Snacks: [
      { imageSource: 'https://your-image-url.com/snack1.jpg', title: 'Granola Bar', calories: 150, price: 2 },
      { imageSource: 'https://your-image-url.com/snack2.jpg', title: 'Fruit Salad', calories: 200, price: 3 },
      { imageSource: 'https://your-image-url.com/snack3.jpg', title: 'Almonds', calories: 180, price: 4 },
      { imageSource: 'https://your-image-url.com/snack4.jpg', title: 'Greek Yogurt', calories: 100, price: 3 },
      { imageSource: 'https://your-image-url.com/snack5.jpg', title: 'Smoothie', calories: 250, price: 5 },
      { imageSource: 'https://your-image-url.com/snack6.jpg', title: 'Peanut Butter Toast', calories: 300, price: 4 },
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
  },
});