import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import ShoopingCartNavigation from './ShoopingCartNavigation';
import TabBar from '../TabBar';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
            <Tab.Screen
                name="Home"
                component={HomeNavigation}
                options={{
                    unmountOnBlur: true,
                }}
            />
            <Tab.Screen name="Cart" component={ShoopingCartNavigation} />
        </Tab.Navigator>
    );
}
