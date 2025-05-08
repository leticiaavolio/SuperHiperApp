import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Regras({navigation}) {


    return (
    <ScrollView>
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header/>
            <View style={styles.content}>
                <Text style={styles.title}>Bem-Vindo a página do Campeonato Atual da Formula 1!</Text>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}>Campeonato de Pilotos</Text>
                <Image source={require("../../assets/imgs/oscarpiastri.jpg")} style={styles.img}/>
                <Text style={styles.para}>1. Oscar Piastri (McLaren) – 131 pontos{'\n'}
                                        2. Lando Norris (McLaren) – 115 pontos{'\n'}
                                        3. Max Verstappen (Red Bull) – 99 pontos{'\n'}
                                        4. George Russell (Mercedes) – 93 pontos{'\n'}
                                        5. Charles Leclerc (Ferrari) – 53 pontos{'\n'}
                                        6. Andrea Kimi Antonelli (Mercedes) – 48 pontos{'\n'}
                                        7. Lewis Hamilton (Ferrari) – 41 pontos{'\n'}
                                        8. Alexander Albon (Williams) – 30 pontos{'\n'}
                                        9. Esteban Ocon (Haas) – 14 pontos{'\n'}
                                        10. Lance Stroll (Aston Martin) – 14 pontos</Text>
                </View>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}>Campeonato de Construtores</Text>
                <Image source={require("../../assets/imgs/mclaren.jpg")} style={styles.img}/>
                <Text style={styles.para}>1. McLaren – 246 pontos{'\n'}
                                        2. Mercedes – 141 pontos{'\n'}
                                        3. Red Bull – 105 pontos{'\n'}
                                        4. Ferrari – 94 pontos{'\n'}
                                        5. Williams – 37 pontos{'\n'}
                                        6. Haas – 20 pontos{'\n'}
                                        7. Aston Martin – 14 pontos{'\n'}
                                        8. Racing Bulls – 8 pontos{'\n'}
                                        9. Alpine – 7 pontos{'\n'}
                                        10. Kick Sauber – 6 pontos</Text>
                </View>
                <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.goBack()}>Voltar</Text></TouchableOpacity>
            </View>
            <Footer/>
        </View> 
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize:30,
        alignSelf:'center',
        marginTop:20,
        color:'#E00700',
        width:'80%',
    },
    titleP:{
        fontSize:30,
        alignSelf:'center',
        marginTop:20,
        color:'#E00700',
        width:'80%',
    },
    para:{
        fontSize:18,
        alignSelf:'center',
        marginTop:20,
        color:'#E00700',
        width:'80%'
    }
    ,
    container:{
        flex:2,
        backgroundColor:'#F2EEEB',
    },
    content:{
        flex:2,
    },
    contentContainer:{
        flex:2,
        justifyContent:'space-evenly',
    },
    img:{
        width:300,
        height:150,
        alignSelf:'center',
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
        margin:20,
      },
  });