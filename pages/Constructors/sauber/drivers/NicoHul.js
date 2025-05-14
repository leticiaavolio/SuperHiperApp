import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

export default function NicoHul({navigation}) {


    return (
    <ScrollView>
        <View style={styles.container}></View>
            <StatusBar style="auto" />
            <Header/>
            <View style={styles.content}>
                <Text style={styles.title}>Bem-Vindo a página do Piloto!</Text>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}>Nico Hulkenberg</Text>
                <Image source={require("../../../../assets/imgs/nico.webp")} style={styles.img}/>
                <Text style={styles.para}>Número: 27;{'\n'}
                Nacionalidade: Alemão;{'\n'}
                Idade: 37;{'\n'}
                Ano de Estreia: 2010;{'\n'}
                Equipe Atual: Sauber;{'\n'}
                Histórico de Equipes: Williams, Sauber, Force India, Renault, Haas;{'\n'}
                Nº de Vitórias: 0;{'\n'}
                Nº de Títulos: 0;{'\n'}
                Pontos: 6.{'\n'}</Text>
            </View>
            <View style={styles.buttonContainer}>
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