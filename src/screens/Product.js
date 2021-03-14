import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import Header from '../components/Header';

const Product = () => {
  return (
    <View>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Product Screen</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 12,
    paddingTop: 32,
  },
});

export default Product;
