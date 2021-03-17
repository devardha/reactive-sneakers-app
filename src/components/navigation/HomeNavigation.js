import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import Header from '../Header';
import Product from '../../screens/Product';
import Home from '../../screens/Home';
import ProductHeader from '../ProductHeader';

export default function HomeNavigation() {
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
                {props => <Home {...props} />}
            </Stack.Screen>
            <Stack.Screen
                options={({navigation}) => ({
                    animationEnabled: false,
                    headerLeft: null,
                    headerTitle: props => (
                        <ProductHeader {...props} navigation={navigation} />
                    ),
                })}
                name="Product">
                {props => <Product {...props} />}
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
