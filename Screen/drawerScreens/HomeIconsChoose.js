import React, { Component } from 'react'
import { View, Image,Text ,StyleSheet,TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
import {  FontAwesome, Octicons , MaterialIcons, Ionicons, FontAwesome5,SimpleLineIcons} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';
//import Map from './Map';
import { color } from 'react-native-reanimated';
//import AboutCeliac from './AboutCeliac';
import HomeScreen from './HomeScreen';
import createBottomTab from './createBottomTabNavigator';
import WorkoutScreen from './WorkoutScreen';


export default  class HomeIcons extends Component{ 

  
    render(){
      return (
       <ScrollView>
  
         
        <View style= {styles.container}>
  
  
        <View style={styles.viewStyle}>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('createBottomTab')}> 
             
           <Icon style={styles.icons}
             size={50}
             name='access-time'
             color='white'
              />
             <Text style={styles.txt}>Medication Reminder</Text>
           </TouchableOpacity>
          </View>
  
  
          <View style={styles.viewStyle}> 
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('WorkoutScreen')}>
           <Icon style={styles.icons}
             size={50}
             name='directions-bike'
             color='white'
              />
   
             <Text style={styles.txt}>Workouts</Text>
           </TouchableOpacity>
          </View>
   
   
          <View style={styles.viewStyle}>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen')}> 
           <FontAwesome5 style={styles.icons}
             size={50}
             name='walking'
             color='white'
              />
            
             <Text style={styles.txt}>Walking</Text>
           </TouchableOpacity>
          </View>
   
        </View>
   
        </ScrollView>
   
   
   
      );}}
   
      const styles = StyleSheet.create({
        container: {
          flexDirection:'row',
          flexWrap:'wrap',
          margin:5,
          padding:10,
          marginTop:50,
          alignItems:'center',
          marginLeft:40,
          marginRight:50,

        },
      
        
        txt:{
          marginBottom:5,
          marginTop:3,
          justifyContent:'center',
          fontSize:20,
          alignSelf:'center',
          color:'white',
          fontWeight:'bold',
          fontFamily: 'serif'
          
        },
   
        icons : {
          marginTop: 10,
          padding: 5,
          alignSelf: 'center',
         
          
        },
   
        viewStyle : {
          backgroundColor: '#2E8B57',
          height: 100,
          width: 270,
          borderRadius: 15,
          marginTop: 20,
          marginBottom:8,
          marginLeft:20,
          marginRight:20,
          flexDirection:'column',
         
        }
   
   
      });
  
  