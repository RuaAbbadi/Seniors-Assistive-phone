
//Import React
import React from 'react';
//Import Navigators
//import {
// createStackNavigator
//} from '@react-navigation/stack';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//Import External Screens
import HomeScreen from './drawerScreens2/HomeScreen';
import createBottomTab from './drawerScreens2/createBottomTabNavigator';
import SettingsScreen from './drawerScreens2/SettingsScreen';
import CustomSidebarMenu from './Components2/CustomSidebarMenu';
import NavigationDrawerHeader from './Components2/NavigationDrawerHeader';

const FirstActivity_StackNavigator = createStackNavigator({
  First: { 
    //screen: HomeScreen,
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#2E8B57',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Senior Location',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#2E8B57',
      },
      headerTintColor: '#fff',
    }),
  },
});

const ThirdActivity_StackNavigator = createStackNavigator({
  First: {
    screen: createBottomTab,
    navigationOptions: ({ navigation }) => ({
      title: 'Medication Reminder',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
               backgroundColor: '#2E8B57',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorRoutes2 = createDrawerNavigator(
  {
    HomeScreen: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home Screen',
      },
    },
    
    SettingsScreen: {
      screen: SecondActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Setting Screen',
      },
    },
    
    createBottomTab: {
      screen: ThirdActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'createBottomTab',
      },
    },
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);
export default DrawerNavigatorRoutes2;