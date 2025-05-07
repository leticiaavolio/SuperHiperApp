import { Text, View, StyleSheet} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
        <Text style={styles.footerText}>© Desenvolvido por Leticia Avolio</Text>
    </View>
);
}

const styles = StyleSheet.create({
    footer:{
        width: '100%',
        flex:0.2,
        backgroundColor:'#E00700',
        justifyContent:'center',
        alignItems:'center',
      },
    footerText:{
        color:'#fff',
        fontSize:18,
      },
})