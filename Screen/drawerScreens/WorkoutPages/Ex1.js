import React , {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert,ScrollView  ,Image, Button} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function Ex1 (props) {
  return (
    <ScrollView >
    <View style={styles.container}>

      <View  style={styles.view3}  > 
      <Text  style={styles.text3} > Deep breathing</Text>
      </View>
     

       
      <View style={styles.row}>
      <Image source={require('./Deep.gif')}
      style={{ width: 350, height: 200 }}
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
       <Text  style={styles.text}> Sit on a chair, keep your head up, 
          shoulders relaxed and down, back 
          straight and feet planted shoulder-width 
          apart.
        
        </Text>
        <Text style={styles.text} > Place your hands on stomach and slowly take a deep breath in 
           through your nose and enter your stomach. Feel your hands
            move out as your breathe.  </Text>


            <Text style={styles.text} > Slowly exhale through your mouth and 
            feel your hands return to their original 
            position.

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
 marginRight: 30,
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