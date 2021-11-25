// import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrecioCripto } from './PrecioCripto';
import { Menu } from './Menu';
import { Historicos } from './Historicos';
import { Calculadora } from './componentescalculadora/Calculadora';
import { Impermanent } from './componentesImpermanent/Impermanent';


const App = () => {
  
 
 const Stack = createNativeStackNavigator()

  return (
    <>
 
    <NavigationContainer>

      <Stack.Navigator
      initialRouteName="Inicio"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#5E49E2'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'white',
            fontSize:20
          },
          title: 'Inicio',
          headerStyle: {
            backgroundColor: '#5E49E2',
          },
          
        }}
        
      >


      {/* <Stack.Screen
        name="Inicsio"
        component={Inicio}
      

        /> */}

        <Stack.Screen
        name="PrecioCripto"
        component={PrecioCripto}
        options={{
          title: 'Precio Criptomonedas',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20
          },
        }}
        
        />

        <Stack.Screen
        name="Historicos"
        component={Historicos}
        options={{
          title: 'Precios Historicos',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20
          },
        }}
        
        />
        <Stack.Screen
        name="Calculadora"
        component={Calculadora}
        options={{
          title: 'Calculadora de Ganancias',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20
          },
        }}
        
        />
        <Stack.Screen
        name="Impermanent"
        component={Impermanent}
        options={{
          title: 'Impermanent Loss',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20
          },
        }}
        
        />


        <Stack.Screen
        name="Inicio"
        options={{headerShown: false}}
        component={Menu}
        
        />

     

      </Stack.Navigator>

    </NavigationContainer>
   
    </>
    
  );
};

const styles = StyleSheet.create({
 
});

export default App;



//  <Stack.Navigator
//  initialRouteName="Inicio"
//  screenOptions={{
//    headerStyle :{
//      backgroundColor: theme.colors.primary
//    },
//    headerTintColor: theme.colors.surface,
//    headerTitleStyle: {
//      fontWeight: 'bold'
//    },
//    headerTitleAlign: 'center'
//  }}
//  >

//   <Stack.Screen
//   name="Inicio"
//   component={Inicio}
 

//   />

//   <Stack.Screen
//   name="NuevoCliente"
//   component={NuevoCliente}
//   options={{
//     title:"Nuevo Cliente"
//   }}
//   />

//   <Stack.Screen
//   name="DetallesCliente"
//   component={DetallesCliente}
//   options={{
//    title:"Detalles Cliente"
//   }}
//   />
 



// //  </Stack.Navigator>

// </NavigationContainer>































// import React, { useEffect, useState } from 'react';

// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   Image,ActivityIndicator, TouchableWithoutFeedback,Keyboard
// } from 'react-native';
// import { Cotizacion } from './components/Cotizacion';
// import { Formulario } from './components/Formulario';
// import { Header } from './components/Header';



// const App = () => {
  

//   const [moneda, setMoneda] = useState('')
//   const [criptomoneda, setCriptoMoneda] = useState('')

//   const [consultarAPI, guardarConsultarAPI] = useState(false)
//   const [resultado, setResultado] = useState({})

//   const [cargando, setCargando] = useState(false)

//   const [info, setInfo] = useState([])

//   useEffect(() => {

//     const cotizarCripto = async () => {

//       if(consultarAPI){
//         console.log('listo para cotizar')
  
//         const response = await fetch(
//           `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
//         );
//         const json = await response.json();

//         setCargando(true)

//         setTimeout(() => {

          
//         setResultado([json.DISPLAY[criptomoneda][moneda],info])
        
//         guardarConsultarAPI(false)

//         setCargando(false)
          
//         }, 1);
     
//       }

//     }
//     cotizarCripto()
   
//   }, [consultarAPI])

//   const componente = cargando ? <ActivityIndicator size="large" color="blueviolet" /> : <Cotizacion resultado={resultado} criptomoneda={criptomoneda} info={info} guardarConsultarAPI={guardarConsultarAPI} consultarAPI={consultarAPI} />
  
//  const cerrar= () => {
//   Keyboard.dismiss

//  }
 
//   return (
//     <>
//     <TouchableWithoutFeedback onPress={() => cerrar() }>
//     <ScrollView >
//     <Header/>

//     <Image style={styles.imagen} source={ require('./assets/img/cryptomonedas.png') } />

//     <View style={styles.contenido}>
//     <Formulario moneda={moneda} setMoneda={setMoneda} criptomoneda={criptomoneda} setCriptoMoneda={setCriptoMoneda} guardarConsultarAPI={guardarConsultarAPI} setInfo={setInfo} />
    
    
//     </View>
//     <View style={styles.componente} >
//     {componente}
//     </View>
  
    
//     </ScrollView>
//     </TouchableWithoutFeedback>
//     </>
   
//   );
// };

// const styles = StyleSheet.create({

//     imagen : {
//       width:'100%',
//       height: 150,

//     },

//     contenido: {
//       marginHorizontal:'2.5%'
//     },
//     componente:{

//       marginTop: 40,
     
      
//     }

// });

// export default App;
