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
                <Text style={styles.title}>Bem-Vindo a página das Regras da Formula 1!</Text>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}>Estrutura da Temporada e Corridas</Text>
                <Image source={require("../../assets/imgs/f11.jpg")} style={styles.img}/>
                <Text style={styles.para}>A Fórmula 1 é composta por uma série de corridas chamadas Grandes Prêmios (GPs), que acontecem em diferentes países ao longo do ano. Cada temporada tem cerca de 20 a 24 corridas, e os pilotos e equipes acumulam pontos conforme sua posição final em cada prova. O sistema atual de pontuação premia os 10 primeiros colocados (25 pontos para o 1º lugar, 18 para o 2º, e assim por diante até 1 ponto para o 10º). No final da temporada, os títulos de Campeão Mundial de Pilotos e Campeão de Construtores são concedidos ao piloto e à equipe com maior pontuação.</Text>
                </View>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}> Regras Técnicas e Carros</Text>
                <Image source={require("../../assets/imgs/f1234.jpg")} style={styles.img}/>
                <Text style={styles.para}>Os carros de Fórmula 1 são altamente regulados pela FIA. As equipes devem seguir regras rígidas de aerodinâmica, peso, potência do motor e segurança. Atualmente, os carros utilizam motores híbridos V6 turbo, que combinam potência com eficiência energética. A cada ano, as equipes desenvolvem melhorias dentro dos limites do regulamento técnico. Qualquer infração nas especificações pode resultar em punições, desclassificações ou perda de pontos.</Text>
                </View>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}>Classificação e Largada</Text>
                <Image source={require("../../assets/imgs/f123456.jpeg")} style={styles.img}/>
                <Text style={styles.para}>Antes de cada corrida, acontece a classificação (qualifying), que determina a ordem de largada. Ela é dividida em três fases (Q1, Q2 e Q3), onde os pilotos mais rápidos vão avançando. Quem fizer o tempo mais rápido larga na chamada pole position (primeira posição do grid). Em algumas etapas também ocorre a Sprint Race, uma corrida mais curta no sábado que vale pontos extras e define parte do grid de largada para o domingo.</Text>
                </View>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}>Regras de Corrida e Penalizações</Text>
                <Image source={require("../../assets/imgs/f1234567.jpeg")} style={styles.img}/>
                <Text style={styles.para}>Durante a corrida, os pilotos devem respeitar limites como velocidade no pit stop, bandeiras de sinalização e defesas de posição. As ultrapassagens devem ser feitas de forma limpa, sem tirar o outro piloto da pista. Infrações podem resultar em penalizações, como tempo extra, passagem pelos boxes (drive-through) ou até desclassificação. Em condições perigosas, a corrida pode ser neutralizada com o safety car ou interrompida com bandeira vermelha. Os pilotos também devem usar pneus de diferentes compostos e realizar pelo menos uma troca obrigatória durante a corrida (exceto em condições de chuva).</Text>
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