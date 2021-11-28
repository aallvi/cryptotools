import React, { useEffect, useState } from 'react';
import { ScrollView,StyleSheet,Text,View,TouchableHighlight, Alert,TextInput} from 'react-native';


export const Impermanent = () => {

    


    const [inversion, setInversion] = useState(0)
    
    const [precioActivoA, setPrecioActivoA] = useState(0)
    const [precioActivoAFuturo, setPrecioActivoAFuturo] = useState(0)

    const [precioActivoB, setPrecioActivoB] = useState(0)
    const [precioActivoBFuturo, setPrecioActivoBFuturo] = useState(0)
    
    // aporte a la pool
    const cuantotengoA = (inversion/2)/precioActivoA
    const cuantotengoB = (inversion/2)/precioActivoB


    //liquidez activo a en monto
    const liqA = 1
    //liquidez activo b en monto
    const liqB = precioActivoA/precioActivoB
    //liquidez total en dolares
    const liqTotal = precioActivoA*liqA + precioActivoB*liqB

    // producto constante
    const productCTE = liqA * liqB

    // console.log(productCTE)

    // r2 
    const r2 = precioActivoAFuturo/precioActivoBFuturo
    // console.log('r2',r2)

    //porcentaje part

    const porcentajePart = inversion/liqTotal
   


    // LIQ FUTURA
    // const liqAFuturo = (productCTE/r2)^(1/2)
    const liqAFuturo = Math.sqrt(productCTE/r2)

    const liqBFuturo = (Math.sqrt(productCTE*r2))* precioActivoBFuturo

    const liqTotalFuturo = liqBFuturo*2

    // VALOR FINAL LIQUIDES DESPUES DE VARIACIONES DE PRECIO

    const finalValueLiq = liqTotalFuturo*porcentajePart

    // console.log(finalValueLiq)

    // VALOR SI UBIERAS HOLDEADO

    const valorHold = (cuantotengoA * precioActivoAFuturo) + (cuantotengoB * precioActivoBFuturo)
    // console.log(valorHold)

    // IMPERMANENT LOSS 

     const impermanent = (((valorHold -finalValueLiq)/valorHold)*100).toFixed(2)




    return (
        <ScrollView>
        <Text style={styles.label} > Liquidity Provider </Text>
        <Text style={styles.uso} > Administra tus inversiones en Liquidity pools y Farms </Text>
        <Text style={styles.puntos} > *Para escribir decimales utilice puntos* </Text>
        
        <View style={styles.inputcontainer}>
        <View style={{justifyContent:'center'}} >
        <Text style={{color:'black'}}> Inversion Total </Text>
        </View>
        <TextInput
        style={styles.input}
        onChangeText={(text) => setInversion(parseInt(text)) }
        value={inversion}
        placeholder='USD'
        keyboardType='number-pad'
        />

       </View>

        <View style={styles.inputcontainer}>
        <View style={{justifyContent:'center'}} >
        <Text style={{color:'black'}}> Precio Token A </Text>
        </View>
        <TextInput
        style={styles.input}
        onChangeText={(text) => setPrecioActivoA(parseFloat(text)) }
        value={precioActivoA}
        placeholder='Precio Inicial'
        keyboardType='number-pad'
        />

       </View>

        <View style={styles.inputcontainer}>
        <View style={{justifyContent:'center'}} >
        <Text style={{color:'black'}}> Precio Token B </Text>
        </View>
        <TextInput
        style={styles.input}
        onChangeText={(text) => setPrecioActivoB(parseFloat(text)) }
        value={precioActivoB}
        placeholder='Precio Inicial'
        keyboardType='number-pad'
        />

       </View>

      

       <View style={styles.separator}>
       </View>

       <View style={{ width:130, marginTop:1, borderBottomWidth:1, borderBottomColor:'blue'}}>
       <Text style={{color:'black', marginLeft:5,marginTop:8}} > Precios Futuros </Text>
       </View>

        <View style={[styles.inputcontainer, {marginTop:10}]}>
        <View style={{justifyContent:'center'}} >
        <Text style={{color:'black'}}> Precio Token a </Text>
        </View>
        <TextInput
        style={styles.input}
        onChangeText={(text) => setPrecioActivoAFuturo(parseFloat(text)) }
        value={precioActivoAFuturo}
        placeholder='Precio Futuro'
        keyboardType='number-pad'
        />

       </View>
        <View style={styles.inputcontainer}>
        <View style={{justifyContent:'center'}} >
        <Text style={{color:'black'}}> Precio Token B </Text>
        </View>
        <TextInput
        style={styles.input}
        onChangeText={(text) => setPrecioActivoBFuturo(parseFloat(text)) }
        value={precioActivoBFuturo}
        placeholder='Precio Futuro'
        keyboardType='number-pad'
        />

       </View>

       <View style={styles.separator}>
       </View>

       { precioActivoB > 0 && precioActivoA > 0 && precioActivoAFuturo >0 && precioActivoBFuturo >0 ?

        <>

        <Text style={{color:'black', textAlign:'center',marginTop:8, fontSize:19}} > Resultados </Text>
        {/* </View> */}

        <View >
        <Text style={{color:'black', textAlign:'center',marginTop:8,fontSize:15}} > Inversion Token A: {inversion/2}$ - Inversion Token B: {inversion/2}$  </Text>
        
        <View style={styles.resultado}>
        <Text style={styles.textoresult} > Valor si haces Hold <Text style={styles.span} >${valorHold.toFixed(0)}   </Text>  </Text>
        <Text style={styles.textoresult}  > Valor si provees liquidez <Text style={styles.span}> ${finalValueLiq.toFixed(0)} </Text>  </Text>
        
        <Text style={styles.textoresult}  > Impermanent Loss <Text style={styles.span}> {impermanent}% </Text>  </Text>
        </View>
        </View>

       </>
    
       :
       <Text style={{color:'black', textAlign:'center',marginTop:8, fontSize:15}} > Ingresa precios validos para ver el resultado </Text>

    
    
       }

       {/* <View style={{ width:130, marginTop:1, borderBottomWidth:1, borderBottomColor:'blue'}}> */}
       

            
        </ScrollView>
    )
}


const styles = StyleSheet.create({

    span :{

        fontFamily:'Lato-Black',
     
     
       },

    textoresult: {

        color:'black',
        marginTop:8,
        fontSize:17,
        marginLeft:70
        // marginHorizontal:60
        
        // textAlign:'center'

    },

    resultado: {
        // backgroundColor:'green',
        // alignItems:'center',
        marginTop:10


    },

    separator:{
        marginTop: 10,
        height:2,
        backgroundColor:'blue'

    },

    inputcontainer: {
        flexDirection:'row',
        marginLeft:5


    },

    label: {
        fontFamily: 'Lato-Black',
        fontSize: 22,
        marginVertical: 20,
        color:'black',
        textAlign:'center'
    },

    uso:{
        // marginLeft: 27,
         marginBottom:10, 
         fontSize:15,
          color:'black',
          textAlign:'center'
    },
    puntos:{
        // marginLeft: 27,
         marginBottom:20, 
         fontSize:12,
          color:'black',
          textAlign:'center'
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
        width:150
      },

    btnCotizar :{
     margintop:20,
     backgroundColor:'blue',
     padding: 10,
     

    },
   
      texto:{
       color:'white',
       textAlign:'center',
       fontSize:17,
       marginVertical: 8
   
   
      },
      span :{
   
       fontFamily:'Lato-Black',
   
   
      }


});
