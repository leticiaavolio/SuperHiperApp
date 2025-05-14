import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

export default function Mclaren({navigation}) {


    return (
    <ScrollView>
        <View style={styles.container}></View>
            <StatusBar style="auto" />
            <Header/>
            <View style={styles.content}>
                <Text style={styles.title}>Bem-Vindo a página da Mclaren!</Text>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}>Mclaren Mercedes</Text>
                <Image source={require("../../../assets/imgs/mclaren2.jpg")} style={styles.img}/>
                <Text style={styles.para}>Histórico: Fundada em 1963 por Bruce McLaren, a McLaren é uma das equipes mais tradicionais da F1. Após um período de reconstrução, conquistou o Campeonato de Construtores em 2024, seu primeiro desde 1998.{'\n'}
                Pilotos 2025: Oscar Piastri (#81) e Lando Norris (#4);{'\n'}
                Piloto reserva: Ryo Hirakawa e Pato O’Ward;{'\n'}
                Piloto mais vitorioso:  Ayrton Senna (35 vitórias pela equipe);{'\n'}
                Estatísticas: 9 títulos de Construtores, 8 títulos de Pilotos, 183 vitórias em GPs.{'\n'}</Text>
            </View>
            <View style={styles.buttonContainer}>
                    <Text style={styles.titleP}>Confira os Pilotos!</Text>
                    <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('OscarPia')}>Oscar Piastri</Text></TouchableOpacity>
                    <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('LandoNor')}>Lando Norris</Text></TouchableOpacity>
                    <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.goBack()}>Voltar</Text></TouchableOpacity>
                    <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.replace('Home')}>Voltar ao Início</Text></TouchableOpacity>
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