// OrderScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const MenuItem = ({ imageSource, title, calories, price }) => (
  <View style={styles.menuItem}>
    <Image source={{ uri: imageSource }} style={styles.menuItemImage} />
    <Text style={styles.menuItemTitle}>{title}</Text>
    <Text style={styles.menuItemCalories}>{calories} calories</Text>
    <Text style={styles.menuItemPrice}>${price}</Text>
  </View>
);

export const OrderScreen = () => {
  const menuItems = [
    {
      imageSource: 'https://postimg.cc/56x5L82K',  // رابط الصورة
      title: 'Grilled Chicken Salad',
      calories: 350,
      price: 7,
    },
    {
      imageSource: 'https://postimg.cc/0bcYfr6k',  // رابط الصورة
      title: 'Grilled Beef Sandwich',
      calories: 500,
      price: 8,
    },
    {
      imageSource: 'https://postimg.cc/wR963f2V',  // رابط الصورة
      title: 'Grilled Chicken Sandwich',
      calories: 400,
      price: 7,
    },
    {
      imageSource: 'https://postimg.cc/Rq1QWg4n',  // رابط الصورة
      title: 'Vegetable Soup',
      calories: 250,
      price: 3,
    },
    {
      imageSource: 'https://postimg.cc/Rq1QWg4n',  // رابط الصورة
      title: 'Lentil Soup',
      calories: 250,
      price: 3,
    },
    {
      imageSource: 'https://postimg.cc/8fwTvRnV',  // رابط الصورة
      title: 'Grilled Fish with Vegetables',
      calories: 400,
      price: 7,
    },
    {
      imageSource: 'https://postimg.cc/56x5L82K',  // رابط الصورة
      title: 'Avocado Tomato Sandwich',
      calories: 400,
      price: 5,
    },
    {
      imageSource: 'https://postimg.cc/wR963f2V',  // رابط الصورة
      title: 'Grilled Steak Sandwich',
      calories: 400,
      price: 7,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Order Your Food</Text>
      <Text style={styles.subHeader}>MENU</Text>
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            imageSource={item.imageSource}
            title={item.title}
            calories={item.calories}
            price={item.price}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0c2340',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 24,
    color: 'yellow',
    textAlign: 'center',
    marginBottom: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  menuItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 220,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#fff',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  menuItemImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  menuItemTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  menuItemCalories: {
    marginTop: 5,
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  menuItemPrice: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d9534f',
    textAlign: 'center',
  },
});