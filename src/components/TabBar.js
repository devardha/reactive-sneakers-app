import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default function TabBar({navigation}) {
    const onPress = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
        });
    };

    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
                <Icon name="home" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.iconContainer}>
                <Icon name="book-open" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.iconContainer}>
                <Icon name="bag" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.iconContainer}>
                <Icon name="login" size={20} color="#000" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#fff',
        paddingVertical: 16,
        borderTopColor: '#eee',
        borderTopWidth: 1,
    },
    iconContainer: {
        width: 30,
    },
});
