import React from 'react';
import {ScrollView, StyleSheet, View, Image, Text} from 'react-native';

const Product = () => {
    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.cardThumbnail}>
                    <Image
                        style={styles.thumbnail}
                        source={{
                            uri:
                                'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d2aa6c50-74c7-4c07-a398-850e5d684600/jordan-air-max-200-xx-shoe-v2glvX.jpg',
                        }}
                    />
                </View>
                <View style={styles.productContainer}>
                    <Text style={styles.productTitle}>
                        Jordan Air Max 200 XX
                    </Text>
                    <View style={styles.productDetails}>
                        <Text style={styles.productPrice}>1,799,000</Text>
                    </View>
                </View>
                <View style={styles.productContainer}>
                    <Text style={styles.productDesc}>
                        Shatter the sneaker status quo in the Jordan MA2. Made
                        from a mix of suede, full-grain leather and a variety of
                        textiles, it features unconventional labels, technical
                        micro-graphics and raw foam edges for a balance of new
                        and classic. Easy to get on and off and effortlessly
                        comfortable, the shoe is a stylish symbol of Jordan
                        attitude and innovation.
                    </Text>
                </View>
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
    cardThumbnail: {
        width: '100%',
        height: 280,
        backgroundColor: '#F5F5F5',
    },
    thumbnail: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'contain',
    },
    productTitle: {
        fontSize: 26,
    },
    productPrice: {
        fontSize: 16,
        marginTop: 8,
        color: 'black',
    },
    productDesc: {
        fontSize: 16,
        lineHeight: 28,
        marginTop: 4,
    },
    productContainer: {
        padding: 12,
    },
    productDetails: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default Product;
