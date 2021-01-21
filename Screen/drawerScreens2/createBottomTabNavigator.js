
//Import React
import React from 'react';

//Import all required component
import { View, Text } from 'react-native';

const createBottomTab = () => {
  global.currentScreenIndex = 'createBottomTabNavigator';
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 23, marginTop: 10 }}>Senior Medication history</Text>
      
    </View>
  ); 
};
export default createBottomTab; 





