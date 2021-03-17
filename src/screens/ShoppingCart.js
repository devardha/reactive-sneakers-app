import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const Product = () => {
    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <Text>Shopping Cart</Text>
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
    },
});

export default Product;
