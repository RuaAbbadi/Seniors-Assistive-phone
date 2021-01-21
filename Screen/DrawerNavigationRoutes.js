
//Import React
import React from 'react';
//Import Navigators
//import {
// createStackNavigator
//} from '@react-navigation/stack';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//Import External Screens

import SettingsScreen from './drawerScreens/SettingsScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import HomeIconsChoose from './drawerScreens/HomeIcons';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeIconsChoose,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
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
      title: 'Location',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#2E8B57',
      },
      headerTintColor: '#fff',
    }),
  },
 
});

const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    
    HomeIcons: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home ',
      },
    },
    SettingsScreen: {
      screen: SecondActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Setting Screen',
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
export default DrawerNavigatorRoutes;