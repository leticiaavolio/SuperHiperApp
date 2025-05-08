import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Home({navigation}) {


    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header/>
        <View style={styles.content}>
            <Text style={styles.text}>Bem-Vindo ao App de Fórmula 1!</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('About')}>Sobre</Text></TouchableOpacity>
                <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('Constructors')}>Equipes</Text></TouchableOpacity>
                <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('GrandPrix')}>Grandes Prêmios</Text></TouchableOpacity>
            </View>
        </View>
        <Footer/>
      </View>
    );
}

const styles = StyleSheet.create({
        text:{
            fontSize:30,
            alignSelf:'center',
            marginTop:20,
            color:'#E00700',
            width:'80%',
        },
        container:{
            flex:2,
            backgroundColor:'#F2EEEB',
        },
        content:{
            flex:2,
        },
        buttonContainer:{
            flex:2,
            justifyContent:'space-evenly',
        },
          buttonText:{
            color:'#F2EEEB',
            textAlign:'center',
            fontSize:30,
            backgroundColor:'#E00700',
            width:"80%",
            borderRadius:8,
            padding: 6,
            alignSelf:'center',
          },
  });