import React , {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert,ScrollView  ,Image, Button} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function Ex2(props) {
  return (
    <ScrollView >
    <View style={styles.container}>

      <View  style={styles.view3}  > 
      <Text  style={styles.text3} > Neck stretch </Text>
      </View>
     

       
      <View style={styles.row}>
      <Image source={require('./Neck.gif')}
      style={{ width: 350, height: 350 }}
      />
      </View>



      <View style={styles.row1}>
      <Text  style={styles.text1} > Do it 5 times  </Text>
      </View>

       {/* <TouchableOpacity >
      <View style={styles.row1}>
      <Text  style={styles.text4}  > Watch video  <FontAwesome5 name="youtube" size={24} color="red" /> </Text>
     
      </View>
      </TouchableOpacity> */}
      
      
      <View style={styles.view4}>
       <Text  style={styles.text}> Stand with your feet flat on the floor,
         shoulder-width apart. 
         Keep your hands relaxed at your sides.
        
        </Text>
        <Text style={styles.text} > Turn your head slowly to the right . Don't 
        tip your head forward or backward. Stop when you feel a slight stretch . Hold for 
        10 to 30 seconds . 
        
         </Text>


            <Text style={styles.text} > Now turn to the left. Hold for 20 seconds. 

          </Text>


          <Text  style={styles.text}> 
          Take a deep breath in and exhale as you slowly turn your head to the 
          right as far as comefortable. Hold for 10 seconds.
          Inhale and turn back to the center and exhale as you turn your head to the left.
          
           
         </Text>
        </View> 
        

         

         
        <TouchableOpacity>
        <View style={styles.yes}>
          <Button 
          title ="✔"
          onPress={() => props.navigation.navigate('chooseWorkout')}

          />
        </View>

        </TouchableOpacity>
       
        
    </View >
    </ScrollView>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  row :{
   
    paddingTop :40,
    justifyContent:'center',
    flexDirection :'row',
    alignItems:'center'
  },

text :{
  fontSize :17,
  paddingTop :10,

 
  
},
text1 :{
  fontSize :18
},

row1 :{
  justifyContent :'center',
  alignItems:'center',
   paddingTop :20,
  
},


view3:{
   justifyContent :'center',
  alignItems:'center',
  paddingTop :80,
  
},

view4:{
  
justifyContent :'center',
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
 marginRight: 20,
 marginTop: 50,
 marginBottom :20
 
 



},
text3:{
  fontSize :25 ,
  

},

text4:{
 fontSize :20 ,
 fontWeight :'bold',
 color: '#F44336'
 
} ,

yes :{
 flex :1 ,
paddingRight :300,
borderRadius: 1,
 //borderColor: '#ddd',
 //shadowColor: '#000',
 //shadowOffset: { width: 0, height: 1 },
 //shadowOpacity: 0.18,
 //shadowRadius: 1.00,
 //elevation: 1,
 marginLeft: 30,
 marginRight: 30,
 marginTop: 50,
 marginBottom :20
 

}


  
});