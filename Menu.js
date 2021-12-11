import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,Image,ScrollView, TouchableOpacity,TouchableWithoutFeedback
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrecioCripto } from './PrecioCripto';
import { useNavigation } from '@react-navigation/core';

export const Menu = () => {

  const navigation = useNavigation()
    
  

    return (
        <ScrollView>
        <View style={{alignItems:'center'}}>
            <Text style={styles.label}> Cripto Tools</Text>

            
        </View>

        <View style={{alignItems:'center'}}>

        
        <TouchableOpacity onPress={() => navigation.navigate('PrecioCripto') } style={styles.btnCotizar}>
        <Text style={styles.textoCotizar}> Precios Criptomonedas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Historicos') } style={styles.btnCotizar}>
        <Text style={styles.textoCotizar}> Precios Historicos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Calculadora') } style={styles.btnCotizar}>
        <Text style={styles.textoCotizar}> Calculadora de Ganancias </Text>
        </TouchableOpacity>

        <TouchableHighlight onPress={() => navigation.navigate('Impermanent') } style={styles.btnCotizar}>
        <Text style={styles.textoCotizar}> Impermanent Loss </Text>
        </TouchableHighlight>


        <Image style={styles.imagen} source={ require('./assets/img/criptomundo.png') } />
        
        <TouchableWithoutFeedback onPress={() => navigation.navigate('About') } >
          <Text style={{color:'blue', fontSize:18,marginTop:10, fontWeight:'bold'}} >About</Text>
        </TouchableWithoutFeedback>

        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({

    imagen : {
        marginTop:26,
        width:'100%',
        height: 350,
  
      },

    label: {
        fontFamily: 'Lato-Black',
        fontSize: 22,
        marginVertical: 20,
        color:'black',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:30,
        marginTop:50
    },

    btnCotizar :{
     backgroundColor:'blue',
     padding: 10,
     width:330,
     marginBottom:20,
     borderRadius:40,
    //  borderWidth:0.01,
     

    },

    textoCotizar :{
        textAlign:'center',
        fontSize:17,
        color: 'white',
        fontFamily:'Lato-Black'
    }


});
