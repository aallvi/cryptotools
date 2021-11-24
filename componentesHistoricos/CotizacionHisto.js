import React from 'react'
import {StyleSheet, Text,View, 
  } from 'react-native';
  


export const CotizacionHisto = ({resultado,criptomoneda,info,moneda}) => {


   if(Object.keys(resultado).length ===0) return null

   
    console.log('resultado',resultado)
   

    return (
      <>
        <View style={styles.resultado}>
        <Text style={styles.titulo}> Precios en el tiempo de {resultado[1]} </Text>

        {/* <Text style={styles.titulo}> Precio Hoy ${resultado[0][730].open}  </Text>
        <Text style={styles.titulo}> Precio hace 6 Meses ${resultado[0][547].open}  </Text>
        <Text style={styles.titulo}> Precio hace 1 Año ${resultado[0][365].open} </Text>
        <Text style={styles.titulo}> Precio hace 2 Años ${resultado[0][0].open} </Text>
        */}
       <View style={styles.contenedorResultados}>
            <Text style={styles.texto}> Precio Apertura hoy = <Text style={styles.span}>${resultado[0][730].open}</Text>  </Text>
            <Text style={styles.textoup}> Precio hace 6 Meses = <Text style={styles.span}>${resultado[0][547].open} </Text></Text>
            <Text style={styles.textoup1}> Precio hace 1 Año = <Text style={styles.span}>${resultado[0][365].open}</Text> </Text>
            <Text style={styles.textoup2}> Precio hace 2 Años = <Text style={styles.span}>${resultado[0][0].open}</Text> </Text>
        </View>
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

  contenedorResultados:{
    alignItems:'center',
    borderWidth:1,
    padding:5,
    borderColor:'blue',
    margin:'2.5%'

  },

  texto:{
   color:'white',
   fontSize:17,
   marginVertical: 8
  },
  textoup:{
   color:'white',
   fontSize:18,
   marginVertical: 8
  },
  textoup1:{
   color:'white',
   fontSize:19,
   marginVertical: 8
  },
  textoup2:{
   color:'white',
   fontSize:20,
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
