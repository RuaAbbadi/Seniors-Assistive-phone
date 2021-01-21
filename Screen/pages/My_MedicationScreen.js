

 //This is an example code for Bottom Navigation//
 import React, {useState, useEffect} from 'react';
 //import react in our code.
 import {
   Text,
   View,
   TouchableOpacity,
   StyleSheet,
   Image 

 } from 'react-native';
 import AsyncStorage from '@react-native-community/async-storage';
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 import { Divider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


 

 //import all the basic component we have used

 const My_MedicationScreen = () => {
   //Home Screen to show in Home Option
  
   const [ids, setIDs] = useState(0);

   const [name, setName] = useState();
   const [amount, setAmount] = useState();
   const [min, setMin] = useState();
   const [hr, setHr] = useState();
   const [image, setImage] = useState();

   const readuserid=async()=>{
    await AsyncStorage.getItem('ids').then((value) => {setIDs(eval(value)); 
     
    });
   }


     return (
       
       <View style={styles.container}>
         <Text
           style={{
             marginTop: 50,
             fontSize: 25
           }}>My_Medication </Text>
           
           
           <Icon
         name='pill'
         size={40}
         color="#2E8B57"
         
         />
          
            
       
         <View style={styles.view2} >
         
        <Text  style={{
             fontSize: 20,
             marginTop:40,
           marginRight:240,
            color:'black'
           }}> Name    |  Atamol </Text>

           <Text  style={{
             fontSize: 20,
             marginTop:10,
           marginRight:280,
            
           }}> Amount  |  3 </Text>

          <Text  style={{
             fontSize: 20,
             marginTop:10,
           marginRight:270,
            
           }}> Time    |  7:30 </Text>
           

          

         </View> 
         
        <View style={{marginLeft:150,marginBottom:300,marginTop:40}}> 
          <Image source={require('../../Image/Atamol.jpg')}
            style={{ width: 170, height: 170 }}
              />    
         </View> 
         

        
           

      
       </View>
       
      
     );
   }
 export default My_MedicationScreen  ;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    
  },

   button: {
     alignItems: 'center',
     backgroundColor: '#DDDDDD',
     padding: 10,
     width: 300,
     marginTop: 16,
   },
   view:{
     flex:1,
     marginTop:10,
     alignItems:'center'
    // flexDirection :'row',
     
    
     /*

  
   alignItems:'center',
   padding:20,
   borderWidth: 1,
   borderRadius: 2,
   borderColor: '#ddd',
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 1 },
   shadowOpacity: 0.18,
   shadowRadius: 1.00,
   elevation: 1,
   marginLeft: 30,
   marginRight: 30,
   marginTop: 50,
   marginBottom :20
   */
   
   
  
  
  
  },
  icons : {
    marginTop: 30,
    padding: 5,
    marginRight:100
   
    
  },
  view2:{
    flex:1,
    marginTop:40,
    alignItems:'center',
  },

  
 });


