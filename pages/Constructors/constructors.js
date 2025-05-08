import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Home() {


    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header/>
        <Text>Página Constructors</Text>
        <Footer />
      </View>
    );
}

const styles = StyleSheet.create({

  });