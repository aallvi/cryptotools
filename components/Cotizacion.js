import React from 'react'
import {StyleSheet, Text,View, Image
  } from 'react-native';
  


export const Cotizacion = ({resultado,criptomoneda,info}) => {


   if(Object.keys(resultado).length ===0) return null

  const logo = resultado[0].IMAGEURL


  const url = `https://www.cryptocompare.com/${logo}`

   

    return (
      <>
        <Text style={styles.titulo}> Precio de {resultado[1]} </Text>
        <View style={styles.contenedorResultados}>
            <Text style={styles.texto}> Precio actual = <Text style={styles.span}>{resultado[0].PRICE}</Text>  </Text>
            <Text style={[styles.texto]}> Variacion en 24hrs = <Text style={styles.span}>{resultado[0].CHANGEPCTDAY}% </Text></Text>
            {/* <Text style={styles.textoless}> Precio mas alto en 24hrs = <Text style={styles.span}>{resultado[0].HIGH24HOUR}</Text> </Text> */}
            {/* <Text style={styles.textoless}> Precio mas bajo en 24hrs = <Text style={styles.span}>{resultado[0].LOW24HOUR}</Text> </Text> */}
            <View style={styles.contenedorImagen}>
              
            <Image style={styles.imagen} source={{ uri: url }} />
            </View>
        
        </View>

      </>
    )
}

const styles = StyleSheet.create({
  contenedorImagen:{
    alignItems:'center'

  },

  imagen : {
    marginTop:40,
    width:150,
    height: 150,

  },
   
   contenedorResultados:{
    
    padding:5,
    margin:'2.5%'

  },

  texto:{
    color:'black',
        marginTop:8,
        fontSize:18,
        textAlign:'center',
        marginBottom:10
  },
   titulo:{
    color:'black',
    fontFamily:'Lato-Black',
    fontSize:20,
    textAlign:'center',
    marginBottom: 10
 
 
   },

   textoless: {
    color:'black',
    // fontFamily:'Lato-Black',
    fontSize:16,
    textAlign:'center',
    marginBottom: 10

   },
   span : {
     fontWeight:'bold'
   }




})
