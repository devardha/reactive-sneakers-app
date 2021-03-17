import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const MainBanner = () => {
    return (
        <View style={styles.mainBanner}>
            <Image
                source={{
                    height: '100%',
                    width: '100%',
                    uri:
                        'https://static.nike.com/a/images/f_auto/dpr_2.0/w_728,c_limit/56ba0dec-2b95-4c8c-9f93-f34ac1f121c4/womens-shoes-clothing-accessories.jpg',
                }}
                style={styles.image}
            />
            <TouchableOpacity style={styles.button} activeOpacity={1}>
                <Text style={styles.buttonText}>SHOP</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainBanner: {
        backgroundColor: '#000',
        height: 200,
        borderRadius: 16,
        position: 'relative',
    },
    image: {
        resizeMode: 'cover',
        borderRadius: 16,
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 12,
        paddingHorizontal: 22,
        position: 'absolute',
        left: 16,
        bottom: 16,
        borderRadius: 28,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default MainBanner;
