

//Import React
import React from 'react';

//Import all required component
import { View, Text } from 'react-native';

const SettingsScreen = () => {
  global.currentScreenIndex = 'SettingsScreen';
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 23, marginTop: 10 }}></Text>
      
    </View>
  ); 
};
export default SettingsScreen;







// //Import React
// import React, { useState } from 'react';

// //Import all required component

// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   KeyboardAvoidingView,
// } from 'react-native';
// import { RadioButton} from 'react-native-paper';

// const SettingsScreen = props => {
//     let [tracking, settracking] = useState('no');
//     let [falling, setfalling] = useState('no');

//   return (
//     <View style={styles.mainBody}>
//       <ScrollView keyboardShouldPersistTaps="handled">
//         <View style={{ marginTop: 20 }}>
//           <KeyboardAvoidingView enabled>
           
//             <View style={{ paddingLeft: 40 }}  > 
//         <Text>Do you want to enable location tracking by your caretaker:</Text>
//           <RadioButton.Group  onValueChange={value => settracking(value)} value={tracking}>
            
//           <View style={{ flexDirection: 'row' }}>
            
//             <RadioButton value="no" />
//             <Text>No</Text>
//           </View>
//           <View style={{ flexDirection: 'row' } }>
            
//             <RadioButton value="yes" />
//             <Text>Yes</Text>
//            </View>
             
//           </RadioButton.Group>
//             <TouchableOpacity
//               style={styles.buttonStyle}
//               activeOpacity={0.5}
//               onPress={ () => props.navigation.navigate('SettingsScreen') }>
//               <Text style={styles.buttonTextStyle}>save</Text>
//             </TouchableOpacity>
//             </View> 

//             <View style={{ paddingLeft: 40 }}  > 
//         <Text>Do you want to enable falling detecter </Text>
//           <RadioButton.Group onValueChange={value => setfalling(value)} value={falling}>
//            <View style={{ flexDirection: 'row' }}>
            
//             <RadioButton value="no" />
//             <Text>No</Text>
//           </View>
//           <View style={{ flexDirection: 'row' } }>
            
//             <RadioButton value="yes" />
//             <Text>Yes</Text>
//            </View>
//           </RadioButton.Group>
//             <TouchableOpacity
//               style={styles.buttonStyle}
//               activeOpacity={0.5}
//               onPress={ () => props.navigation.navigate('SettingsScreen') }>
//               <Text style={styles.buttonTextStyle}>save</Text>
//             </TouchableOpacity>
//             </View> 

//           </KeyboardAvoidingView>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }; 
// export default SettingsScreen;

// const styles = StyleSheet.create({
//   mainBody: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   SectionStyle: {
//     flexDirection: 'row',
//     height: 40,
//     marginTop: 20,
//     marginLeft: 35,
//     marginRight: 35,
//     margin: 10,
//   },
//   buttonStyle: {
//     backgroundColor: '#2E8B57',
//     borderWidth: 0,
//     color: '#FFFFFF',
//     borderColor: '#2E8B57',
//     height: 40,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   buttonTextStyle: {
//     color: '#FFFFFF',
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   inputStyle: {
//     flex: 1,
//     color: '#2E8B57', 
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderWidth: 1,
//     borderRadius: 30,
//     borderColor: '#2E8B57',
//   },
//   registerTextStyle: {
//     color: '#2E8B57',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   errorTextStyle: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 14,
//   },
// });