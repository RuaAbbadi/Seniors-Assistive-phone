//This is an example code for Bottom Navigation//
import React,{useState} from 'react';
//import react in our code.
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from 'react-native';
import { Divider } from 'react-native-elements';
import TodoMed from './TodoMed';
import AddMed from './AddMed';
import Header from './hedear';

//import all the basic component we have used



const HistoryScreen =()=>{
  const [med,setMed] = useState([
    { text :' ATAMOL',key :'1' },
    { text :' BRUFEN',key :'2' }
  ]);


  const pressHandler =(key)=>{
    setMed((Prev)=>{
     return Prev.filter(med=>med.key!=key);
    })

  }

  const submitHandler=(text)=>{
    setMed((Prev)=>{
     return [
       {text :text,key:Math.random().toString()},
      ...Prev
     ];

     
    })
  }
  
    return (
    

    <View style={styles.container}> 
      <Header/>
     
      <View style={styles.content} > 
      <AddMed submitHandler ={submitHandler}/>
        <View style={styles.list }>
          <FlatList
          data={med}
          renderItem={({item})=>(
            <TodoMed item={item} pressHandler={pressHandler}/>

          )
             }

         

          />

        </View>


      </View>
     
    </View>
    );
  }

  export default HistoryScreen;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor :'#fff' ,
  

  },

  content :{
    padding:40
  },

  list :{
    marginTop:20
  },
  hedear :{
height :80,
paddingTop :38,
fontSize :25 ,
alignItems :'center',
color: '#2E8B57',


  },
})


