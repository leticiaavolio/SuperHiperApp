import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Historia({navigation}) {


    return (
    <ScrollView>
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header/>
            <View style={styles.content}>
                <Text style={styles.title}>Bem-Vindo a página dos Grande Prêmios Formula 1!</Text>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}>Grande Prêmio do Brasil – Autódromo de Interlagos</Text>
                <Image source={require("../../assets/imgs/gpsp.jpg")} style={styles.img}/>
                <Text style={styles.para}>O Autódromo José Carlos Pace, popularmente conhecido como Interlagos, está localizado em São Paulo, Brasil. Inaugurado em 12 de maio de 1940, o circuito sediou sua primeira corrida de Fórmula 1 em 1973. Após algumas edições no Rio de Janeiro, o GP retornou definitivamente a Interlagos em 1990 e, desde 2021, é oficialmente chamado de Grande Prêmio de São Paulo.{"\n"}
                O maior vencedor em Interlagos é o alemão Michael Schumacher, com quatro vitórias (1994, 1995, 2000 e 2002). {"\n"}
                Curiosamente, o circuito foi projetado com inspiração em três pistas internacionais: Roosevelt Raceway (EUA), Montlhéry (França) e Brooklands (Inglaterra). Originalmente, fazia parte de um projeto para construir um resort de luxo entre as represas Guarapiranga e Billings. Além disso, a famosa curva "S do Senna" foi nomeada em homenagem ao tricampeão Ayrton Senna, que sugeriu alterações no traçado. </Text>
                </View>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}>Grande Prêmio de Mônaco – Circuito de Monte Carlo</Text>
                <Image source={require("../../assets/imgs/monaco.jpg")} style={styles.img}/>
                <Text style={styles.para}>O Circuito de Monte Carlo, localizado nas ruas de Monte Carlo, Mônaco, é um dos mais tradicionais e desafiadores do calendário da Fórmula 1. A primeira corrida ocorreu em 14 de abril de 1929, organizada por Antony Noghès. Desde então, tornou-se sinônimo de glamour e prestígio no automobilismo.{"\n"}
                O maior vencedor em Mônaco é o brasileiro Ayrton Senna, com seis vitórias (1987, 1989, 1990, 1991, 1992 e 1993), o que lhe rendeu o apelido de "Rei de Mônaco".{"\n"}
                O circuito é conhecido por suas ruas estreitas, curvas fechadas e mudanças de elevação, tornando as ultrapassagens extremamente difíceis. Uma curiosidade é que, com exceção do trecho da piscina, introduzido em 1973, o traçado de 3.337 metros permanece praticamente o mesmo desde sua inauguração. </Text>
                </View>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}>Grande Prêmio da Itália – Autódromo Nacional de Monza</Text>
                <Image source={require("../../assets/imgs/monza.jpg")} style={styles.img}/>
                <Text style={styles.para}>O Autódromo Nacional de Monza, localizado próximo à cidade de Monza, na Itália, é um dos circuitos mais antigos e rápidos da Fórmula 1. Inaugurado em 3 de setembro de 1922, sediou o Grande Prêmio da Itália quase anualmente desde então, com exceção de 1980.{"\n"}
                Os maiores vencedores em Monza são Michael Schumacher e Lewis Hamilton, cada um com cinco vitórias.{"\n"}
                Conhecido como o "Templo da Velocidade", Monza possui longas retas e poucas elevações, permitindo que os carros atinjam velocidades máximas superiores a 350 km/h. A curva Parabólica é uma das mais emblemáticas do circuito, exigindo habilidade e coragem dos pilotos. </Text>
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
        width:'80%'
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