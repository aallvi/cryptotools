import React from 'react'
import {StyleSheet, Text,View, 
  } from 'react-native';
  


export const Cotizacion = ({resultado,criptomoneda,info}) => {


   if(Object.keys(resultado).length ===0) return null

   

   

    return (
      <>
      
        <View style={styles.resultado}>
        <Text style={styles.titulo}> Cotizacion de {resultado[1]} </Text>
            <Text style={styles.texto}> Precio actual = <Text style={styles.span}>{resultado[0].PRICE}</Text>  </Text>
            <Text style={styles.texto}> Cambio en 24hrs = <Text style={styles.span}>{resultado[0].CHANGEPCTDAY}% </Text></Text>
            <Text style={styles.textoless}> Precio mas alto en 24hrs = <Text style={styles.span}>{resultado[0].HIGH24HOUR}</Text> </Text>
            <Text style={styles.textoless}> Precio mas bajo en 24hrs = <Text style={styles.span}>{resultado[0].LOW24HOUR}</Text> </Text>
        </View>

      </>
    )
}

const styles = StyleSheet.create({
   resultado: {
 
     backgroundColor:'blueviolet',
     paddingTop:10,
     height:260
    
     


   },

   texto:{
    color:'white',
    
    fontSize:17,
    marginVertical: 8


   },
   titulo:{
    color:'white',
    fontFamily:'Lato-Black',
    fontSize:20,
    textAlign:'center',
    marginBottom: 10


   },

   textoless: {
    color:'white',
    fontSize:15,
    marginVertical: 8

   },

   span :{

    fontFamily:'Lato-Black',


   }





})
