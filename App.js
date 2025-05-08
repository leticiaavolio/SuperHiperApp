import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import HomePage from './pages/HomePage';
import About from './pages/about/about';
import Contructors from './pages/Constructors/constructors';
import GrandPrix from './pages/GrandPrix/grandPrix';

import History from './pages/about/history';
import Rules from './pages/about/rules';
import Championship from './pages/about/championship';

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomePage}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Constructors" component={Contructors}/>
        <Stack.Screen name="GrandPrix" component={GrandPrix}/>
        <Stack.Screen name="History" component={History}/>
        <Stack.Screen name="Rules" component={Rules}/>
        <Stack.Screen name="Championship" component={Championship}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
