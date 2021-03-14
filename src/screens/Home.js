import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

const Home = ({navigation}) => {
  const image =
    'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/88d2422d-152d-43a3-97ce-bc88aad8830c/kyrie-7-ep-play-future-basketball-shoe-FFZfk3.jpg';
  const productName = "Kyrie 7 EP 'Play for the Future'";
  const productCategory = "Men's Shoe";

  return (
    <View>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <Card
          image={image}
          productName={productName}
          productCategory={productCategory}
          navigation={navigation}
        />
        <Card
          image={image}
          productName={productName}
          productCategory={productCategory}
          navigation={navigation}
        />
        <Card
          image={image}
          productName={productName}
          productCategory={productCategory}
          navigation={navigation}
        />
        <Card
          image={image}
          productName={productName}
          productCategory={productCategory}
          navigation={navigation}
        />
        <Card
          image={image}
          productName={productName}
          productCategory={productCategory}
          navigation={navigation}
        />
        <Card
          image={image}
          productName={productName}
          productCategory={productCategory}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 12,
    paddingTop: 32,
  },
});

export default Home;
