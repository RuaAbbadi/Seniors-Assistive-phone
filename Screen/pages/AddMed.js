import React,{useState} from 'react';
//import react in our code.
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  TextInput
} from 'react-native'

export default function AddMed ({submitHandler}){
    const[text,setText]=useState('');
    const  changeHandler =(val)=>{
        setText(val);


    }


    return (
     <View>
         <TextInput
         style={styles.new}
         placeholder='Add your Medication' 
         onChangeText ={changeHandler}

         
         />
         <Button
         title='Add your Medication'
         onPress={()=>submitHandler(text)}
         color='#2E8B57'
         
         />

     </View>



    )

}


const styles = StyleSheet.create({
  
    new :{
       marginBottom :10,
       paddingHorizontal :8,
       padding:6,
       borderBottomWidth:1,
       borderBottomColor :'#2E8B57',


  
  
    }
     
    })