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
import HomeIconsChoose from './HomeIconsChoose';
import { createStackNavigator } from 'react-navigation-stack';

 


const HomeIcons= createStackNavigator({
   
    HomeIconsChoose: {
        screen: HomeIconsChoose, 
        navigationOptions: {
          headerShown: false,
        },
      },
    createBottomTab: {
         screen: createBottomTab,
         navigationOptions: {
           title: 'Medication',
           headerStyle: {
             backgroundColor: '#2E8B57',
           },
           headerTintColor: '#fff',
           
         },
       },
       WorkoutScreen: {
        screen: WorkoutScreen,
        navigationOptions: {
          title: 'Workout',
          
          headerStyle: {
            backgroundColor: '#2E8B57',
          },
          headerTintColor: '#fff',
        },
      },
      HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
          title: 'Walking',
          headerStyle: {
            backgroundColor: '#2E8B57',
            
          },
          headerTintColor: '#fff',
        },
      },
     
     });
   
    export default HomeIcons;

    
