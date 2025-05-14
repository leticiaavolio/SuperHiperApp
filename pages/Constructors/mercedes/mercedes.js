import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

export default function Mercedes({navigation}) {


    return (
    <ScrollView>
        <View style={styles.container}></View>
            <StatusBar style="auto" />
            <Header/>
            <View style={styles.content}>
                <Text style={styles.title}>Bem-Vindo a página da Mercedes!</Text>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}>Mercedes</Text>
                <Image source={require("../../../assets/imgs/mercedes.jpg")} style={styles.img}/>
                <Text style={styles.para}>Histórico: Dominante na era híbrida (2014–2020), a Mercedes conquistou 8 títulos consecutivos de Construtores. Atualmente, busca retornar ao topo após desafios recentes.{'\n'}
                Pilotos 2025: George Russell (#63) e Andrea Kimi Antonelli (#12);{'\n'}
                Piloto reserva: Mick Schumacher e Valteri Bottas;{'\n'}
                Piloto mais vitorioso: Lewis Hamilton (82 vitórias pela equipe);{'\n'}
                Estatísticas: 8 títulos de Construtores, 9 títulos de Pilotos, 125 vitórias em GPs.{'\n'}</Text>
            </View>
            <View style={styles.buttonContainer}>
                    <Text style={styles.titleP}>Confira os Pilotos!</Text>
                    <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('GeorgeRus')}>George Russell</Text></TouchableOpacity>
                    <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('KimiAnt')}>Kimi Antonelli</Text></TouchableOpacity>
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