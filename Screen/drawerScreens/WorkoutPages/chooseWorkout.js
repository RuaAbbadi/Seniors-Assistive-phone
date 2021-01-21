import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const CircleButton = props => (
  <TouchableOpacity
    style={{
      margin: props.margin,
      height: props.size,
      width: props.size,
      backgroundColor: props.color,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: props.size * 5,
    }}
    onPress={props.onPress}>
    <Text style={{color: props.textColor, fontSize: props.fontSize}}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
const chooseWorkout = props => { 
  //const showMessage = () => Alert.alert('Button clicked !');

  return (
    <ScrollView>
    <View style={styles.container}>
      
    <View style={{flex:1,marginTop:20,marginBottom:20}}>
    <Text style={styles.text}>  
             You're only one workout away  </Text>

             <Text style={styles.text2}>from a good mood </Text>
            
             </View>
             

      <CircleButton
        text="Exercise 1"
        size={150}
        color="#2E8B57"
        textColor="white"
        fontSize={20}
        margin={10}
        onPress={() => props.navigation.navigate('Ex1')}
      />
      <CircleButton
        text="Exercise 2"
        size={150}
        color="#2f4f4f"
        textColor="white"
        margin={10}
        fontSize={20}
        onPress={() => props.navigation.navigate('Ex2')}
      />
      <CircleButton
      text="Exercise 3"
      size={150}
      color="#2E8B57"
      textColor="white"
      fontSize={20}
      margin={10}
      onPress={() => props.navigation.navigate('Ex3')}
      />
      <CircleButton
        text="Exercise 4"
        size={150}
        textColor="white"
        margin={10}
        fontSize={20}
        color="#2f4f4f"
        onPress={() => props.navigation.navigate('Ex4')}
      />
    </View>
    </ScrollView>
  );
};
export default chooseWorkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
   
    
  },
  text: {
    flex:1,
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft : 7,
    alignItems:'center',
  
  },
  text2: {
    flex:1,
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft : 7,
    alignItems:'center',
    marginLeft:70
  
  },
});