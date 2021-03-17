import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import Header from '../Header';
import ShoppingCart from '../../screens/ShoppingCart';

export default function ShoppingCartNavigation() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: styles.header,
            }}
            headerMode="screen">
            <Stack.Screen
                options={{
                    headerTitle: props => <Header {...props} />,
                    animationEnabled: false,
                    headerLeft: null,
                }}
                name="Home">
                {props => <ShoppingCart {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        height: 80,
    },
});
