import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MainBanner = () => {
    return (
        <View style={styles.mainBanner}>
            <Text>Test</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainBanner: {
        backgroundColor: '#000',
        height: 200,
    },
});

export default MainBanner;
