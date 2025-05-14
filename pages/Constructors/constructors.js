import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Construtores({navigation}) {


    return (
      <ScrollView>
      <View style={styles.container}>
              <StatusBar style="auto" />
              <Header/>
              <View style={styles.content}>
                  <Text style={styles.text}>Bem-Vindo a página das Equipes!</Text>
                  <View style={styles.buttonContainer}>
                      <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('Alpine')}>Alpine</Text></TouchableOpacity>
                      <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('AstonMartin')}>Aston Martin</Text></TouchableOpacity>
                      <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('Ferrari')}>Ferrari</Text></TouchableOpacity>
                      <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('Haas')}>Haas</Text></TouchableOpacity>
                      <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('Mclaren')}>Mclaren</Text></TouchableOpacity>
                      <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('Mercedes')}>Mercedes</Text></TouchableOpacity>
                      <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('RacingBulls')}>Racing Bulls</Text></TouchableOpacity>
                      <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('RedBull')}>Red Bull</Text></TouchableOpacity>
                      <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('Sauber')}>Sauber</Text></TouchableOpacity>
                      <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('Williams')}>Williams</Text></TouchableOpacity>

                      <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.goBack()}>Voltar</Text></TouchableOpacity>
                  </View>
              </View>
              <Footer/>
            </View>
      </ScrollView>
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
      buttonText:{
        color:'#F2EEEB',
        textAlign:'center',
        fontSize:30,
        backgroundColor:'#E00700',
        width:"80%",
        borderRadius:8,
        padding: 6,
        alignSelf:'center',
        marginBottom:20,
      },
  });