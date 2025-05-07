import { Text, View, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>🏁Formula 1🏁</Text>
    </View>
);
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        flex:0.2,
        backgroundColor:'#E00700',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:22,
      },
    headerText:{
        color:'#fff',
        fontSize:30,
      },
})