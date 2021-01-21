
import 'react-native-gesture-handler';
import React from 'react';
//Import Navigators from React Navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Import all the screens needed
import WorkoutSplash from './WorkoutPages/WorkoutSplash';
import chooseWorkout from './WorkoutPages/chooseWorkout';
import Ex1 from './WorkoutPages/Ex1';
import Ex2 from './WorkoutPages/Ex2';
import Ex3 from './WorkoutPages/Ex3';
import Ex4 from './WorkoutPages/Ex4';



 const choose = createStackNavigator({
//   //Stack Navigator for Login and Sign up Screen
   chooseWorkout: {
     screen: chooseWorkout, 
     navigationOptions: {
       headerShown: false,
     },
   },
   Ex1: {
     screen: Ex1,
     navigationOptions: {
       title: 'Ex1',
       headerStyle: {
         backgroundColor: '#2E8B57',
       },
       headerTintColor: '#fff',
     },
   },
   Ex2: {
    screen: Ex2,
    navigationOptions: {
      title: 'Ex2',
      headerStyle: {
        backgroundColor: '#2E8B57',
      },
      headerTintColor: '#fff',
    },
  },
  Ex3: {
    screen: Ex3,
    navigationOptions: {
      title: 'Ex3',
      headerStyle: {
        backgroundColor: '#2E8B57',
      },
      headerTintColor: '#fff',
    },
  },
  Ex4: {
    screen: Ex4,
    navigationOptions: {
      title: 'Ex4',
      headerStyle: {
        backgroundColor: '#2E8B57',
      },
      headerTintColor: '#fff',
    },
  },
 });

/* Switch Navigator for those screens which needs to be switched only once
  and we don't want to switch back once we switch from them to the next one */

  const WorkoutScreen = createSwitchNavigator({ 
  WorkoutSplash: {
    /* SplashScreen which will come once for 5 Seconds */
    screen: WorkoutSplash,
    navigationOptions: {
      /* Hiding header for Splash Screen */
      headerShown: false,
    },
  }, 
  choose: {
    /* Auth Navigator which includer Login Signup will come once */
    screen: choose,
  },
  
 
});
export default WorkoutScreen;


