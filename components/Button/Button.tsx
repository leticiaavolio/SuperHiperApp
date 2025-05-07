import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import React,{useState} from "react";

type Prop ={
  texto:string,
  alerta:string,
  corFundo:string,
}

export default function Button(prop:Prop) {

    const [button, setLido] = useState(prop.texto)
   function SaibaMais(){
     alert("Você clicou no post "+ prop.alerta+".")
     if(prop.texto=="Saiba Mais"){
       setLido("Lido")
     }
 
   } 
   return (
     <TouchableOpacity style={[styles.button, {backgroundColor: prop.corFundo}]}  onPress={SaibaMais} >
         <Text style={styles.buttonText}>{button}</Text>
     </TouchableOpacity>
 );
 }

 const styles = StyleSheet.create({
    button:{
        width:160,
        borderRadius:8,
        padding: 6,
        // backgroundColor:'#023859',
        alignSelf:'flex-end',
        marginHorizontal:12,
      },
      buttonText:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
      },
})