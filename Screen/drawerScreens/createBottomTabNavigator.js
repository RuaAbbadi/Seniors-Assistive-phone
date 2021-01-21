//This is an example code for Bottom Navigation//
import React from 'react';

import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native' ;
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import My_MedicationScreen from '../pages/My_MedicationScreen';
import New_MedicationScreen from '../pages/New_MedicationScreen';
//import AlertScreen from "../pages/AlertScreen";
import HistoryScreen from '../pages/HistoryScreen';
import ProfileScreen from '../pages/ProfileScreen';
//import ReminderList from "../componentsm/ReminderList";
const My_MedicationStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    My_Medication: { screen: My_MedicationScreen },
    //Alert: { screen : AlertScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'My_Medication',
      //Header title
    },
  }
);
const New_MedicationStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    New_Medication: { screen: New_MedicationScreen },
    My_Medication: { screen: My_MedicationScreen },
    Profile: { screen: ProfileScreen, navigationOptions: { headerShown: false } },
  },
  {
    // defaultNavigationOptions: {
    //   //Header customization of the perticular Screen
    //   headerStyle: {
    //     backgroundColor: '#42f44b',
    //   },
    //   headerTintColor: '#FFFFFF',
    //   title: 'New_Medication',
    //   //Header title
    // },
    navigationOptions: {  
      //title: 'New_Medication',
      headerShown: false,
    },
  }
);
/*
New_MedicationStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
*/
const HistoryStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    History: { screen: HistoryScreen },
    //My_Medication: { screen: My_MedicationScreen },
    
  },
  
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'History',
      //Header title
    },
  }
);

const createBottomTab = createBottomTabNavigator(
  {
    My_Medication: { screen: My_MedicationStack },
    New_Medication: { screen: New_MedicationStack, navigationOptions: { headerShown: false } },
    History: { screen: HistoryStack },
    //Profile:{screen:ProfileScreenStack},
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'My_Medication') {
          iconName = `ios-information-circle${focused ?
            '' : '-outline'
          }`;
        } else if (routeName === 'New_Medication') {
          iconName = `ios-add-circle${focused ?
            '' : '-outline'
          }`;
        }
        else if (routeName === 'History') {
          iconName = `ios-checkmark-circle${focused ?
            '' : '-outline'
          }`;
        }
        return <IconComponent
                 name={iconName}
                 size={25}
                 color={tintColor}
               />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  }
);
//export default createAppContainer(createBottomTab);
export default createBottomTab; 

