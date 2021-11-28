import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,Image, TouchableWithoutFeedback, TouchableWithoutFeedbackComponent,Linking,ScrollView
  } from 'react-native';

export const About = () => {

    const url = `https://www.planetario.net/wp-content/uploads/2019/07/tierra.jpg`


    return (
        <>
        <View style={styles.contenedor} >
            

            <Text style={styles.label} >Informacion General</Text>
            <Text style={styles.texto} >Datos obtenidos de cryptocompare.com</Text>
            <Text style={styles.texto} >Formula de impermanent loss obtenida de Uniswap</Text>
            {/* <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/payungkead" title="Payungkead">Payungkead</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div> */}
            
            

            <Text style={{marginTop:50}} >Icono diseñado por <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://www.flaticon.es/autores/payungkead')}>
            Payungkead
            </Text> </Text>
            
            
            
           


        </View>
        <View style={styles.separator}>
            </View>
        <View style={styles.yo}>
            
       <Text style={styles.textos} >Hecha por Alvaro Leiva </Text>
       
       <Image style={styles.imagen} source={{ uri: 'https://res.cloudinary.com/asdsa/image/upload/v1638127043/chile_1_jwnayt.png' }} />
            
       
       </View>
       <Text style={styles.textos} >Economista y Programador</Text>

       <View style={{alignItems:'center'}} >

       <View style={styles.contacto}>
       
       <TouchableWithoutFeedback
       onPress={() => Linking.openURL('https://www.linkedin.com/in/alvaro-leiva-gil-aaa6ba201/')}
       
       >
       <Image style={styles.imagens} source={{ uri: 'https://res.cloudinary.com/asdsa/image/upload/v1638127130/linkedin_1_dtffen.png' }} />

       </TouchableWithoutFeedback>

       <TouchableWithoutFeedback
       onPress={() => Linking.openURL('https://t.me/aallvi')}
       
       >
       <Image style={styles.imagens} source={{ uri: 'https://res.cloudinary.com/asdsa/image/upload/v1638126941/telegram_kgb3fw.png' }} />

       </TouchableWithoutFeedback>


       </View>
       </View>
            
        </>
    )
}


const styles = StyleSheet.create({

    yo:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',

    },
    contacto:{
      justifyContent:'space-around',
      flexDirection:'row',
      marginBottom:20,
    //   backgroundColor:'green',
    //   marginHorizontal:140,
      width:90
      
    },

    imagen : {
        
        width:20,
        height: 20,
        marginTop:12
    
      },
    imagens : {
        
        width:25,
        height: 25,
        marginTop:12

        
    
      },

    contenedor:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'blue'

    },

    separator:{
        height:2,
        
        backgroundColor:'blue',
        // marginTop:100
        justifyContent:'center'

    },



    label: {
        fontFamily: 'Lato-Black',
        fontSize: 22,
        color:'black',
        textAlign:'center',
        marginBottom:10,
        
    },
    texto:{
        color:'black',
            marginTop:6,
            fontSize:18,
            marginTop:10,
           
            textAlign:'center'
      },
    textos:{
        color:'black',
            marginTop:6,
            fontSize:15,
            marginTop:10,
           
            textAlign:'center'
      }


});
