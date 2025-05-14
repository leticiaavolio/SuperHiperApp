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
                <Text style={styles.title}>Bem-Vindo a página da História da Formula 1!</Text>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}>História</Text>
                <Image source={require("../../assets/imgs/f1History.jpg")} style={styles.img}/>
                <Text style={styles.para}>A Fórmula 1 (F1) é a principal categoria do automobilismo mundial. Ela surgiu oficialmente em 1950, com a realização do Campeonato Mundial de Pilotos, organizado pela Federação Internacional de Automobilismo (FIA). A primeira corrida da história foi o Grande Prêmio da Inglaterra, no circuito de Silverstone, vencida pelo italiano Giuseppe Farina, que também foi o primeiro campeão da F1.</Text>
                </View>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}>Brasil na Formula 1</Text>
                <Image source={require("../../assets/imgs/senna.jpeg")} style={styles.img}/>
                <Text style={styles.para}>O Brasil tem uma história rica e vitoriosa na Fórmula 1, sendo um dos países que mais contribuíram para a popularidade do esporte. Ao todo, o país conquistou oito títulos mundiais, com três grandes nomes: Emerson Fittipaldi, o primeiro brasileiro campeão, em 1972 e 1974; Nelson Piquet, tricampeão nas décadas de 1980; e o lendário Ayrton Senna, que venceu três títulos (1988, 1990 e 1991) e é considerado um dos maiores pilotos da história. O Brasil também teve circuitos marcantes, como o Autódromo de Interlagos, em São Paulo, palco de GPs históricos. Atualmente, o país deposita esperanças em jovens talentos como Felipe Drugovich, campeão da Fórmula 2 em 2022 e piloto de testes da Aston Martin, além de outros nomes em categorias de base, como Gabriel Bortoleto, campeão da Fórmula 3 em 2023, que vêm sendo vistos como possíveis futuros representantes do Brasil na elite do automobilismo mundial.</Text>
                </View>
                <View style={styles.contentContainer}>
                <Text style={styles.titleP}>Pilotos Lendários</Text>
                <Image source={require("../../assets/imgs/schumacher.jpeg")} style={styles.img}/>
                <Text style={styles.para}>Ao longo de mais de 70 anos de história, a Fórmula 1 teve pilotos que marcaram época com seu talento, carisma e conquistas. Entre os mais vitoriosos está Michael Schumacher, heptacampeão mundial (1994, 1995, 2000–2004), que dominou a categoria com a Ferrari nos anos 2000. Outro nome histórico é Juan Manuel Fangio, que venceu 5 campeonatos na década de 1950, um recorde que durou quase 50 anos. O brasileiro Ayrton Senna também é lembrado como um dos maiores de todos os tempos, não apenas por seus 3 títulos, mas por sua habilidade em pistas molhadas e sua paixão pela velocidade. Mais recentemente, Lewis Hamilton igualou Schumacher com 7 títulos e se tornou o maior vencedor em número de corridas, com mais de 100 vitórias. Outros nomes marcantes incluem Alain Prost, Niki Lauda, Jackie Stewart e Nelson Piquet, todos multicampeões e referências em suas gerações.</Text>
                </View>
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