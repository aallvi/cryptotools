
import React, { useEffect, useState } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,ActivityIndicator, TouchableWithoutFeedback,Keyboard
} from 'react-native';
import { CotizacionHisto } from './componentesHistoricos/CotizacionHisto';
import { FormularioHisto } from './componentesHistoricos/FormularioHisto';
// import { Cotizacion } from './components/Cotizacion';




export const Historicos = () => {
  

  const [moneda, setMoneda] = useState('')
  const [criptomoneda, setCriptoMoneda] = useState('')

  const [consultarAPI, guardarConsultarAPI] = useState(false)
  const [resultado, setResultado] = useState({})

  const [cargando, setCargando] = useState(false)

  const [info, setInfo] = useState([])

  useEffect(() => {

    const cotizarCripto = async () => {

      if(consultarAPI){
        // console.log('listo para cotizar')

       
        const response = await fetch(
          `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${criptomoneda}&tsym=${moneda}&limit=730&api_key=36681360f91a1caec50e5b51b172b77f3ff58a5b8dcf33660c59ec9ba00bd952`
        );
        const json = await response.json();
         
        setCargando(true)

        
        setTimeout(() => {

            setResultado([json.Data.Data,info]) 
       
        guardarConsultarAPI(false)

        setCargando(false)
          
            
        }, 10);
          
        // setResultado([json.DISPLAY[criptomoneda][moneda],info])
        
        
     
      }

    }
    cotizarCripto()
   
  }, [consultarAPI])

  const componente = cargando ? <ActivityIndicator size="large" color="blue" /> : <CotizacionHisto resultado={resultado} criptomoneda={criptomoneda} info={info} guardarConsultarAPI={guardarConsultarAPI} consultarAPI={consultarAPI} moneda={moneda} />
  
 const cerrar= () => {
  Keyboard.dismiss

 }
//  console.log('moneda',moneda)
//  console.log('criptomoneda',criptomoneda)

console.log('resupuesta',resultado)

  return (
    <>
    <TouchableWithoutFeedback onPress={() => cerrar() }>
    <ScrollView >
    {/* <Header/> */}



    <View style={styles.contenido}>
    <FormularioHisto moneda={moneda} setMoneda={setMoneda} criptomoneda={criptomoneda} setCriptoMoneda={setCriptoMoneda} guardarConsultarAPI={guardarConsultarAPI} setInfo={setInfo} />
    
    
    </View>
    <View style={styles.componente} >
      
      { resultado[0] === undefined ? <Text style={styles.error} > Error: Prueba con otra Moneda Nacional </Text> : componente }
      
    
    </View>
  
    
    </ScrollView>
    </TouchableWithoutFeedback>
    </>
   
  );
};

const styles = StyleSheet.create({

    imagen : {
      width:'100%',
      height: 150,
    },

    contenido: {
      marginHorizontal:'2.5%'
    },
    componente:{
      marginTop: 25,
      
    },

    error : {


      textAlign:'center',
       fontSize:19,
        color:'black',
        marginTop:100

    }

});

export default Historicos;
