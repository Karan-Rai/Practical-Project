import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import ButtonScreen from '../screens/ButtonScreen';
import ThankyouScreen from '../screens/ThankyouScreen';
const Stack = createStackNavigator();
interface Routesprops {}
export const Routes: React.FC<Routesprops> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
        <Stack.Screen name="ThankyouScreen" component={ThankyouScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
