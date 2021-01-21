
//Import React and Hooks we needed
import React, { useState, useEffect } from 'react';
//import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator, ImageBackground, StyleSheet, Text, View ,Button , Image } from "react-native";


const image = { uri: "https://www.sonashomehealth.com/wp-content/uploads/2018/05/Exercises-for-Seniors-with-Arthritis.jpg" };

const Workoutsplash = props => {

    let [animating, setAnimating] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setAnimating(false);
       
      props.navigation.navigate('chooseWorkout' )}, 2000);
    }, []);


    return (
        <View style={styles.container}>
        <ImageBackground source={require('./seniors-exercising.jpg')} style={styles.image}>
          
        </ImageBackground>
        </View>  
      );
    };


  {/* <View style={styles.container}>
    <ImageBackground source={require('../seniors-exercising.jpg')} style={styles.image}>
      <Text style={styles.text}>  
         You're only one workout away from a
         good mood </Text>
    </ImageBackground> */}

    
    {/* <Button onPress={() => navigation.navigate('Work')}
     title ='START'
   
   /> */}
   
   
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width:"100%",
    height:"100%"
    
  },
  

 
});

export default Workoutsplash;
