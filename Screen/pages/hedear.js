import React,{useState} from 'react';
//import react in our code.
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from 'react-native';


export default function Hedear (){

return(

    <View style={styles.hedear}>
        <Text   style={styles.title}>Medeication History</Text>
    </View>
)

}


const styles = StyleSheet.create({

hedear :{
  height :80,
  paddingTop :38,
  //backgroundColor: '#2E8B57',
  alignItems:'center',
  fontSize:25
  
  
    },

 title:{
     fontSize:25,
     color:'#2E8B57',
 }
  })