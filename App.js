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

import FrancoCol from './pages/Constructors/alpine/drivers/francoCol';
import PierreGas from './pages/Constructors/alpine/drivers/pierreGas';
import FernandoAlo from './pages/Constructors/astonMartin/drivers/fernandoAlo';
import LanceStr from './pages/Constructors/astonMartin/drivers/lanceStr';
import CharlesLec from './pages/Constructors/ferrari/drivers/charlesLec';
import LewisHam from './pages/Constructors/ferrari/drivers/lewisHam';
import EstebanOco from './pages/Constructors/haas/drivers/estebanOco';
import OliverBea from './pages/Constructors/haas/drivers/oliverBea';
import OscarPia from './pages/Constructors/mclaren/drivers/oscarPia';
import LandoNor from './pages/Constructors/mclaren/drivers/landoNor';
import GeorgeRus from './pages/Constructors/mercedes/drivers/georgeRus';
import KimiAnt from './pages/Constructors/mercedes/drivers/kimiAnt';
import IsackHad from './pages/Constructors/racingBulls/drivers/isaacHad';
import LiamLaw from './pages/Constructors/racingBulls/drivers/liamLaw';
import MaxVer from './pages/Constructors/redBull/drivers/maxVer';
import YukiTsu from './pages/Constructors/redBull/drivers/yukiTsu';
import NicoHul from './pages/Constructors/sauber/drivers/NicoHul';
import GabrielBor from './pages/Constructors/sauber/drivers/grabrielBor';
import AlexAlb from './pages/Constructors/williams/drivers/alexAlb';
import CarlosSai from './pages/Constructors/williams/drivers/carlosSai';

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
        <Stack.Screen name="FrancoCol" component={FrancoCol}/>
        <Stack.Screen name="PierreGas" component={PierreGas}/>
        <Stack.Screen name="FernandoAlo" component={FernandoAlo}/>
        <Stack.Screen name="LanceStr" component={LanceStr}/>
        <Stack.Screen name="CharlesLec" component={CharlesLec}/>
        <Stack.Screen name="LewisHam" component={LewisHam}/>
        <Stack.Screen name="EstebanOco" component={EstebanOco}/>
        <Stack.Screen name="OliverBea" component={OliverBea}/>
        <Stack.Screen name="LandoNor" component={LandoNor}/>
        <Stack.Screen name="OscarPia" component={OscarPia}/>
        <Stack.Screen name="KimiAnt" component={KimiAnt}/>
        <Stack.Screen name="GeorgeRus" component={GeorgeRus}/>
        <Stack.Screen name="IsackHad" component={IsackHad}/>
        <Stack.Screen name="LiamLaw" component={LiamLaw}/>
        <Stack.Screen name="MaxVer" component={MaxVer}/>
        <Stack.Screen name="YukiTsu" component={YukiTsu}/>
        <Stack.Screen name="NicoHul" component={NicoHul}/>
        <Stack.Screen name="GabrielBor" component={GabrielBor}/>
        <Stack.Screen name="CarlosSai" component={CarlosSai}/>
        <Stack.Screen name="AlexAlb" component={AlexAlb}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
