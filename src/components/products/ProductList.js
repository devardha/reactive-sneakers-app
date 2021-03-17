import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './Card';

const ProductList = ({products, navigation}) => {
    return (
        <View style={styles.productList}>
            {products?.map((item, index) => (
                <Card
                    key={index}
                    image={item.image}
                    productName={item.productName}
                    productCategory={item.productCategory}
                    navigation={navigation}
                    price={item.price}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    productList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingTop: 32,
    },
});

export default ProductList;
