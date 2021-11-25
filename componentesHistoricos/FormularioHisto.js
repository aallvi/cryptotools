
import React, { useEffect, useState } from 'react';
import { ScrollView,StyleSheet,Text,View,TouchableHighlight, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';



export const FormularioHisto = ({moneda,setMoneda,criptomoneda,setCriptoMoneda,guardarConsultarAPI,setInfo}) => {

   
    const [criptodata, setCriptoData] = useState([])

    useEffect(() => {

        const constularAPI = async() => {
        
            try {
                const response = await fetch(
                  'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD'
                );
                const json = await response.json();
             
                return setCriptoData(json.Data)
                
              } catch (error) {
                console.error(error);
              }

        }

        constularAPI()
        
    }, [])
  

    const obtenerMoneda = (moneda) => {
        setMoneda(moneda)

    }
    const obtenerCriptoMoneda = (criptomoneda) => {
        setCriptoMoneda(criptomoneda)
        
    }

  
    const cotizarPrecio = () => {
        

        if(moneda === '' || criptomoneda === '' ) {
            Alert.alert(
                'Error',
                'Ambos campos son obligatorios',
                [
                    {text: 'OK'}
                ]
                
                )
                return;
          }

          // se pasa la validacion

          if(criptomoneda !== '' ){
            const arr = criptodata.find(criptodata => criptodata.CoinInfo.Name === criptomoneda)
        
            
            setInfo(arr.CoinInfo.FullName)
            
         }

          guardarConsultarAPI(true)

          console.log('cotizando')
    }




  

    return (
        <View>

            <Text style={styles.label}> Moneda Nacional</Text>
            <Picker   
            selectedValue={moneda}
            onValueChange={moneda => obtenerMoneda(moneda)}
            
            >
                <Picker.Item label="Seleccione" value="" />
                <Picker.Item label="Dolar" value="USD" />
                <Picker.Item label="Peso Chileno" value="CLP" />
                <Picker.Item label="Peso Mexicano" value="MXN" />
                {/* <Picker.Item label="Peso Colombiano" value="COL" /> */}
                <Picker.Item label="Peso Argentino" value="ARS" />
                <Picker.Item label="Euro" value="EUR" />
                <Picker.Item label="Libra" value="GBP" />
            </Picker>

            <Text style={styles.label}> Criptomoneda </Text>

            <Picker   
            selectedValue={criptomoneda}
            onValueChange={criptomoned => obtenerCriptoMoneda(criptomoned)}
            
            >
                <Picker.Item label="Seleccione" value="" />
                {criptodata.map(cripto => (
                    <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} />

                ) )}
            </Picker>

            <TouchableHighlight
            style={styles.btnCotizar}
            onPress= { () => cotizarPrecio() }
            >
                <Text style={styles.textoCotizar}
                
                >Cotizar</Text>
            </TouchableHighlight>

            
        </View>
    )
}

const styles = StyleSheet.create({

    label: {
        fontFamily: 'Lato-Black',
        fontSize: 22,
        marginVertical: 20,
        color:'black'
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
    }


});