import 'react-native-gesture-handler';
import React from 'react';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Product from './src/screens/Product';
import Header from './src/components/Header';
import {StyleSheet} from 'react-native';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
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
          options={{
            headerTitle: props => <Header {...props} />,
            animationEnabled: false,
            headerLeft: null,
          }}
          name="Product"
          component={Product}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
  },
});

export default App;
