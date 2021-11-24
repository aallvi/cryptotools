import React from 'react'

import {StyleSheet, Text,View, Platform} from 'react-native';
  
  



export const Header = () => {



    return (
        <Text style={styles.encabezado} > Criptomonedas</Text>
    )
}

const styles = StyleSheet.create({

    encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'Lato-Black',
    fontSize:24,
    backgroundColor: '#5E49E2',
    textAlign:'center',
    paddingBottom: 10,
    color: 'white',
    marginBottom: 30,
    

    }




})
