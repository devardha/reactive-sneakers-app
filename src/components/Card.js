import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Card = ({image, productName, productCategory, navigation, price}) => {
  const onPress = () => navigation.navigate('Product');

  return (
    <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={1}>
      <View>
        <View style={styles.cardThumbnail}>
          <Image
            style={styles.thumbnail}
            source={{
              uri: image,
            }}
          />
        </View>
        <Text style={styles.textTitle}>{productName}</Text>
        <Text style={styles.textSubtitle}>{productCategory}</Text>
        <Text style={styles.textPrice}>Rp {price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    height: 280,
    backgroundColor: '#fff',
    color: '#fff',
    borderRadius: 16,
    position: 'relative',
    marginBottom: 24,
  },
  cardThumbnail: {
    width: '100%',
    height: 180,
    backgroundColor: '#F5F5F5',
  },
  thumbnail: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
  textTitle: {
    marginTop: 8,
  },
  textSubtitle: {
    fontSize: 12,
    marginTop: 4,
    color: '#999',
  },
  textPrice: {
    marginTop: 8,
  },
});

export default Card;
