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

import Alpine from './pages/Constructors/alpine/alpine'
import AstonMArtin from './pages/Constructors/astonMartin/astonMartin'
import Ferrari from './pages/Constructors/ferrari/ferrari'
import Haas from './pages/Constructors/haas/haas'
import Mclaren from './pages/Constructors/mclaren/mclaren'
import Mercedes from './pages/Constructors/mercedes/mercedes'
import RacingBulls from './pages/Constructors/racingBulls/racingBulls'
import RedBull from './pages/Constructors/redBull/redBull'
import Sauber from './pages/Constructors/sauber/sauber'
import Williams from './pages/Constructors/williams/williams'
import OldConst from './pages/Constructors/OldConstructors/oldConstructors'

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
        <Stack.Screen name="Alpine" component={Alpine}/>
        <Stack.Screen name="AstonMartin" component={AstonMArtin}/>
        <Stack.Screen name="Ferrari" component={Ferrari}/>
        <Stack.Screen name="Haas" component={Haas}/>
        <Stack.Screen name="Mclaren" component={Mclaren}/>
        <Stack.Screen name="Mercedes" component={Mercedes}/>
        <Stack.Screen name="RacingBulls" component={RacingBulls}/>
        <Stack.Screen name="RedBull" component={RedBull}/>
        <Stack.Screen name="Sauber" component={Sauber}/>
        <Stack.Screen name="Williams" component={Williams}/>
        <Stack.Screen name="OldConstructors" component={OldConst}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
