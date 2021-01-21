import React,{useState} from 'react';
//import react in our code.
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from 'react-native';

export default function TodoMed ({item,pressHandler}){

    return (
      <TouchableOpacity  onPress ={()=>pressHandler(item.key)}>  
    <Text style={styles.item}>{item.text}</Text>

      </TouchableOpacity>

    )



}



const styles = StyleSheet.create({
  
  item :{
      padding:16 ,
      margin :16 ,
      borderColor:'#2E8B57',
      borderWidth:1,
      borderStyle:'dashed',
      borderRadius:10


  }
   
  })
  