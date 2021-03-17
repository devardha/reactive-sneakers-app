import React from 'react';
import {ScrollView, StyleSheet, View, Image} from 'react-native';

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
});

export default Product;
