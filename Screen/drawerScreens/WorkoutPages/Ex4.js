import React , {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert,ScrollView  ,Image, Button} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function Ex4(props) {
  return (
    <ScrollView >
    <View style={styles.container}>

      <View  style={styles.view3}  > 
      <Text  style={styles.text3} >Hamstring stretch</Text>
      </View>
     

       
      <View style={styles.row}>
      <Image source={require('./Hamstring.gif')}
      style={{ width: 400, height: 350 }}
      />
      </View>



      <View style={styles.row1}>
      <Text  style={styles.text1} > Do it 10 times </Text>
      </View>

       {/* <TouchableOpacity >
      <View style={styles.row1}>
      <Text  style={styles.text4}  > Watch video  <FontAwesome5 name="youtube" size={24} color="red" /> </Text>
     
      </View>
      </TouchableOpacity> */}
      
      
      <View style={styles.view4}>
       <Text  style={styles.text}>
          Sit securely on the front of your chair and 
        stretch your right leg out with your heel 
        on the floor. 
        
        
        </Text>
        <Text style={styles.text} >
            Place your hands behind your knees and 
            inhale.
            
           </Text>
            
            <Text style={styles.text}>
            Exhale as you slowly bend forward from 
            your hips and try to reach your ankle,
            keep your back and neck straight.
            
            </Text>


          <Text style={styles.text}> 
          Take a few deep breathes at the bottom 
          position. Hold for 10 seconds. Come 
          back up and do the same for the left leg.

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