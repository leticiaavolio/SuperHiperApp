import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <Footer/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    flex:2
  }
});
