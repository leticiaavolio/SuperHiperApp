import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

export default function RedBull({navigation}) {


    return (
    <ScrollView>
        <View style={styles.container}></View>
            <StatusBar style="auto" />
            <Header/>
            <View style={styles.content}>
                <Text style={styles.title}>Bem-Vindo a página da Red Bull!</Text>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}>Red Bull Racing</Text>
                <Image source={require("../../../assets/imgs/redbull.jpg")} style={styles.img}/>
                <Text style={styles.para}>Histórico:  Desde 2005, a Red Bull se estabeleceu como uma potência, conquistando múltiplos títulos com Sebastian Vettel e Max Verstappen.{'\n'}
                Pilotos 2025:  Max Verstappen (#01) e Yuki Tsunoda (#22);{'\n'}
                Piloto reserva: [Não confirmado];{'\n'}
                Piloto mais vitorioso:  Max Verstappen (54 vitórias pela equipe);{'\n'}
                Estatísticas: 6 títulos de Construtores, 7 títulos de Pilotos, 113 vitórias em GPs.{'\n'}</Text>
            </View>
            <View style={styles.buttonContainer}>
                    <Text style={styles.titleP}>Confira os Pilotos!</Text>
                    <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('MaxVer')}>Max Verstappen</Text></TouchableOpacity>
                    <TouchableOpacity styles={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('YukiTsu')}>Yuki Tsunoda</Text></TouchableOpacity>
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