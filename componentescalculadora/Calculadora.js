import React, { useEffect, useState } from 'react'
import {StyleSheet, Text,View,TextInput,TouchableHighlight,Alert,ScrollView } from 'react-native';

export const Calculadora = () => {

    
    // input precio actual de la cripto 
    const [precioCompra, setPrecioCompra] = useState(0)
    // input cantidad invertida
    const [cantidadInvertida, setcantidadInvertida] = useState(0)
    // input precio de moneda al momento de venta
    const [precioVenta, setPrecioVenta] = useState(0)

    const [ganancia, setGanancia] = useState(0)
    const [final, setFinal] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)

    const [cotizar, setcotizar] = useState(false)

    const gananciaFinal= () =>{

      if(precioCompra === 0 || cantidadInvertida === 0 || precioVenta === 0){

        Alert.alert(
            "Debes rellenar todos los campos",
            "Ingresa montos validos",
            [
              { text: "OK" }
            ]
          );

          return
      }

       const montoFinal = ((precioVenta/precioCompra) * cantidadInvertida)
       setFinal(montoFinal.toFixed(2))
       const utilidad = montoFinal-cantidadInvertida
       setGanancia(utilidad.toFixed(2))
       const variacion = ((precioVenta/precioCompra) - 1)*100
       setPorcentaje(variacion.toFixed(2))

       setcotizar(true)
    }
        
    
    return (
        <ScrollView>

            <Text style={styles.label} > ¿Ganamos o Perdimos? </Text>
            <Text style={styles.uso} > Herramienta para proyectar compras, calcular ganancias,perdidas, etc </Text>
            <Text style={{textAlign:'center', marginBottom:20, fontSize:15}} > Puedes ingresar los valores en Moneda Fiat preferida </Text>

        <Text style={styles.TextInput}>Precio Compra Cripto</Text>
        <TextInput
        style={styles.input}
        onChangeText={ (text) => setPrecioCompra(text) }
        value={precioCompra}
        placeholder='Precio Criptomoneda al momento de compra'
        />

        <Text style={styles.TextInput}>Cantidad Invertida</Text>
        <TextInput
        style={styles.input}
        onChangeText={ (text) => setcantidadInvertida(text) }
        value={cantidadInvertida}
        placeholder='Cantidad invertida'
        />

        <Text style={styles.TextInput}>Precio Venta Cripto</Text>
        <TextInput
        style={styles.input}
        onChangeText={ (text) => setPrecioVenta(text) }
        value={precioVenta}
        placeholder='Precio Criptomoneda al momendo de venta'
        />

       <TouchableHighlight
            style={[styles.btnCotizar, {marginTop:30}]}
            onPress= {  gananciaFinal }
            >
                <Text style={styles.textoCotizar}
                
                >Calcular</Text>
            </TouchableHighlight>

            {cotizar && <>
                <Text style={[styles.titulo, {marginTop:15}]}> Resultado Operacion </Text>

                <View style={styles.contenedorResultados}>
                    
                    <Text style={styles.texto}> Monto Final = <Text style={styles.span}>{final}$</Text>  </Text>
                    <Text style={styles.texto}> Ganancias en $ = <Text style={styles.span}>{ganancia}$ </Text>  </Text>
                    <Text style={styles.texto}> Variacion en % = <Text style={styles.span}> {porcentaje}% </Text></Text>
                    
                </View>
            </>
            }

            

            
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    label: {
        fontFamily: 'Lato-Black',
        fontSize: 22,
        marginVertical: 20,
        color:'black',
        textAlign:'center'
    },

    uso:{
        marginLeft: 27,
         marginBottom:20, 
         fontSize:15,
          color:'black'
    },

    TextInput:{
        fontWeight:'bold',
        color:'black',
        marginLeft:13

    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor:'blue',
        padding: 10,
      },

    btnCotizar :{
     margintop:20,
     backgroundColor:'blue',
     padding: 10,
     

    },

    textoCotizar :{
        textAlign:'center',
        fontSize:17,
        color: 'white',
        fontFamily:'Lato-Black'
    },

    resultado: {
 
        backgroundColor:'blueviolet',
        paddingTop:10,
        height:190,
        marginTop:20
       
    
   
      },
      contenedorResultados:{
    
        padding:5,
        margin:'2.5%'
    
      },
   
      texto:{
        color:'black',
            marginTop:8,
            fontSize:18,
            marginLeft:60,
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
   
   
      }


});