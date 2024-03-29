import React, { useEffect, useState } from 'react'
import {StyleSheet, Text,View, 
  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
  


export const CotizacionHisto = ({resultado,criptomoneda,info,moneda}) => {
   
 
   if(Object.keys(resultado).length ===0) return null
  

   const [calculo, setcalculo] = useState(0)
  
  const [miles, setmiles] = useState(0)

   const [coin, setcoin] = useState(moneda)

    useEffect(() => {

      

      const calcular = () => {
      
        const anos2 = resultado[0][0].open
        const anos1 = resultado[0][365].open
        const meses6 = resultado[0][547].open
  
        if(anos2 > 0) {
          setcalculo(parseFloat(anos2) )
          return
        }
        else if (anos1 > 0) {
          setcalculo(parseFloat(anos1))
          return
        }else setcalculo(parseFloat(meses6))
  
      }
      calcular()
      // setchange(!change)
      setcoin(moneda)
    }, [resultado[0][730]])


    useEffect(() => {
      setmiles(parseFloat(((resultado[0][730].open/calculo)*1000).toFixed(1)))
      
    }, [calculo])
   
    

    const [preciostodos, setpreciostodos] = useState([])



    useEffect(() => {
    let arry = [];
    for (let i = 0; i < 731; i++) {
       arry[i] = resultado[0][i].high;
    }

    setpreciostodos(arry)
              
    }, [])
    

    

    let ATH = Math.max(...preciostodos)
    

    const ATHFORMAT = new Intl.NumberFormat('de-DE').format(ATH)

 

    // PRECIOS MOSTRAR 
    const preciohoy = new Intl.NumberFormat('de-DE').format(resultado[0][730].open)
    const precio6meses = new Intl.NumberFormat('de-DE').format(resultado[0][547].open)
    const precio1ano = new Intl.NumberFormat('de-DE').format(resultado[0][365].open)
    const precio2ano = new Intl.NumberFormat('de-DE').format(resultado[0][0].open)

    

    return (
      <ScrollView>
        <View style={styles.resultado}>
        <Text style={styles.titulo}> Precios en el tiempo de {resultado[1]} </Text>

      
       <View style={styles.contenedorResultados}>

            <Text style={{...styles.texto, color:'green', fontWeight:'bold'}}> Maximo Historico = { ATHFORMAT === -Infinity ? <Text style={styles.click}>Ver</Text> : <Text style={styles.span}>${ATHFORMAT}</Text> }</Text>
            {/* <Text style={styles.texto}> Porcentaje de Caida desde ATH = <Text style={styles.span}>{100-distanciaATH}%</Text></Text> */}
            <Text style={styles.texto}> Precio Apertura Hoy = <Text style={styles.span}>${preciohoy}</Text></Text>
            <Text style={styles.texto}> Precio hace 6 Meses = <Text style={styles.span}>{precio6meses== 0 ? 'No info' :` $${precio6meses}` } </Text></Text>
            <Text style={styles.texto}> Precio hace 1 Año = <Text style={styles.span}>{precio1ano == 0 ? 'No info' :  ` $${precio1ano}`  }</Text> </Text>
            <Text style={styles.texto}> Precio hace 2 Años = <Text style={styles.span}>{precio2ano == 0? 'No info' :  ` $${precio2ano}`  }</Text> </Text>
            
    
        </View>

        { coin === 'USD' && resultado[0][547].open != 0 ? 
        <>

        <View style={styles.separator}>
        </View>
        <Text style={styles.usd}> Inversion de 1000 USD hace {resultado[0][0].open > 0 ? '2 años' : resultado[0][365].open > 0 ? '1 año' : resultado[0][547].open >0 ? '6 meses' : null}  </Text>
        
        
        
        {calculo === 0 ? <Text style={styles.click}>Ver</Text> :<Text style={styles.usd}> Hoy <Text style={styles.span}>$ {miles}   </Text> </Text> }
         
        

        </>  : null
      
    
      
         }

         

        


        </View>

      </ScrollView>
    )
}

const styles = StyleSheet.create({
  resultado: {

    
    // paddingTop:5,
    
  },

  contenedorResultados:{
    
    padding:5,
    margin:'2.5%'

  },

  click: {
    color:'green',
    fontWeight:'bold',
    marginTop:8,
    fontSize:20,
    textAlign:'center',
    marginBottom:5

  },
  usd : {
    color:'black',
    marginTop:8,
    fontSize:18,
    textAlign:'center',
    marginBottom:5

  },

  texto:{
    color:'black',
        marginTop:8,
        fontSize:18,
        marginLeft:35,
        marginBottom:10
  },
  texto1:{
    color:'black',
        marginTop:8,
        fontSize:18,
        // marginLeft:35,
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
   color:'white',
   fontSize:15,
   marginVertical: 8

  },

  span :{

   fontFamily:'Lato-Black',


  },
  separator:{
    marginTop: 10,
    height:2,
    backgroundColor:'blue'

}

})
