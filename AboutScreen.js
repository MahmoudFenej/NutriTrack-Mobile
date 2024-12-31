import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function AboutUsScreen() {
    return (
      <View style={styles.container}>
        <Text>About Us</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
    },
  });