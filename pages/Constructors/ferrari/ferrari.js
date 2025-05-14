import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

export default function Ferrari({navigation}) {


    return (
    <ScrollView>
        <View style={styles.container}></View>
            <StatusBar style="auto" />
            <Header/>
            <View style={styles.content}>
                <Text style={styles.title}>Bem-Vindo a página da Ferrari!</Text>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}>Ferrari</Text>
                <Image source={require("../../../assets/imgs/ferrari.jpg")} style={styles.img}/>
                <Text style={styles.para}>Histórico: A Scuderia Ferrari é a equipe mais antiga e vitoriosa da F1, presente desde 1950. Apesar de um jejum de títulos, continua sendo uma força tradicional no grid.{'\n'}
                Pilotos 2025: Charles Leclerc (#16) e Lewis Hamilton (#44);{'\n'}
                Piloto reserva: Antonio Giovinazzi e Robert Shwartzman;{'\n'}
                Piloto mais vitorioso:  Michael Schumacher (72 vitórias pela equipe);{'\n'}
                Estatísticas: 16 títulos de Construtores, 15 títulos de Pilotos, 243 vitórias em GPs.{'\n'}</Text>
            </View>
            <View style={styles.buttonContainer}>
                    <Text style={styles.titleP}>Confira os Pilotos!</Text>
                    <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('LewisHam')}>Lewis Hamilton</Text></TouchableOpacity>
                    <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('CharlesLec')}>Charles Leclerc</Text></TouchableOpacity>
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