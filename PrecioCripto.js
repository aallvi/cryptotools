
import React, { useEffect, useState } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,ActivityIndicator, TouchableWithoutFeedback,Keyboard
} from 'react-native';
import { Cotizacion } from './components/Cotizacion';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';



export const PrecioCripto = () => {
  

  const [moneda, setMoneda] = useState('')
  const [criptomoneda, setCriptoMoneda] = useState('')

  const [consultarAPI, guardarConsultarAPI] = useState(false)
  const [resultado, setResultado] = useState({})

  const [cargando, setCargando] = useState(false)

  const [info, setInfo] = useState([])

  useEffect(() => {

    const cotizarCripto = async () => {

      if(consultarAPI){
        console.log('listo para cotizar')
  
        const response = await fetch(
          `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        );
        const json = await response.json();

        setCargando(true)

        setTimeout(() => {

          
        setResultado([json.DISPLAY[criptomoneda][moneda],info])
        
        guardarConsultarAPI(false)

        setCargando(false)
          
        }, 1);
     
      }

    }
    cotizarCripto()
   
  }, [consultarAPI])

  const componente = cargando ? <ActivityIndicator size="large" color="blueviolet" /> : <Cotizacion resultado={resultado} criptomoneda={criptomoneda} info={info} guardarConsultarAPI={guardarConsultarAPI} consultarAPI={consultarAPI} />
  
 const cerrar= () => {
  Keyboard.dismiss

 }
 
  return (
    <>
    <TouchableWithoutFeedback onPress={() => cerrar() }>
    <ScrollView >
    {/* <Header/> */}


    {/* <Image style={styles.imagen} source={ require('./assets/img/cryptomonedas.png') } /> */}

    <View style={styles.contenido}>
    <Formulario moneda={moneda} setMoneda={setMoneda} criptomoneda={criptomoneda} setCriptoMoneda={setCriptoMoneda} guardarConsultarAPI={guardarConsultarAPI} setInfo={setInfo} />
    
    
    </View>
    <View style={styles.componente} >
    {componente}
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

      marginTop: 40,
     
      
    }

});

export default PrecioCripto;
