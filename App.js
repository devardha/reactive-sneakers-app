import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/components/navigation/TabNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <TabNavigation />
            </NavigationContainer>
        </Provider>
    );
};

export default App;
