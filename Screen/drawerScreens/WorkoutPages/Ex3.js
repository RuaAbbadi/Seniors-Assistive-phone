import React , {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert,ScrollView  ,Image, Button} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function Ex3(props) {
  return (
    <ScrollView >
    <View style={styles.container}>

      <View  style={styles.view3}  > 
      <Text  style={styles.text3} >Chest stretch </Text>
      </View>
     

       
      <View style={styles.row}>
      <Image source={require('./chest.gif')}
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
       <Text  style={styles.text}> Hold your arms straight out in front of 
        you with your palms together. 
        
        </Text>
        <Text style={styles.text} >
        Inhale as you slowly move your arms 
        back while squeezing your shoulder 
        blades together, keep your hands right 
        below your shoulder.
          
           </Text>
            
            <Text style={styles.text}>
            Exhale as you bring your arms together. 
            Move your arms back again, this time 
            raising your hand a little bit higher.

            </Text>


          <Text style={styles.text}> 
          Make sure to squeeze your shoulder 
          blades back and keep your back straight, 
          continue with this movement with your 
          hands a bit higher each time with the last 
          one having your hands as high as you can.

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