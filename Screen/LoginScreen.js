
//Import React and Hook we needed
import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
//import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Loader from './Components/loader';
import { RadioButton} from 'react-native-paper';

const LoginScreen = props => { 

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userCode, setUserCode] = useState('');
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  

  const userLogin=()=>{
    
    fetch('http://192.168.1.106/project/Login.php',{
      method:'POST',
      header:{
          'Accept': 'application/json',
  'Content-type': 'application/json',
      },
      
      body: JSON.stringify({

        userEmail: userEmail,
        userPassword: userPassword,
        userCode: userCode,
        value:value,
        
       })
  }) 
  //responce
  .then((response)=> response.json())
  //alarm msg
  .then((responseJason)=>{
     
      if(responseJason === 'fill all information')alert(responseJason);
      else if(responseJason === 'Invalid Username or Password Please Try Again')alert(responseJason);
     
     /* else if(responseJason ==='Senior'){
        props.navigation.navigate('DrawerNavigationRoutes');
      }

      else if(responseJason === 'CareTaker'){
        props.navigation.navigate('DrawerNavigationRoutes2');
      }*/
      else{
        if(responseJason.registeras==='Senior'){
    AsyncStorage.setItem('ids',JSON.stringify(responseJason.id));
     props.navigation.navigate('DrawerNavigationRoutes');
        }
        else if(responseJason.registeras==='CareTaker'){
          AsyncStorage.setItem('idc',JSON.stringify(responseJason.id));
          props.navigation.navigate('DrawerNavigationRoutes2');
        }
      }
      
              

  }).catch((error)=>{
      console.error(error);
  });
  
}

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ marginTop: 70 }}>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../Image/logo2.png')}
                style={{
                  width: 160,
                  height: 160,
                  resizeMode: 'contain',
                  margin: 10,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                underlineColorAndroid="#FFFFFF"
                placeholder="Email" //dummy@abc.com
                placeholderTextColor="#2E8B57"
                autoCapitalize="none"
                keyboardType="email-address"
                //ref={ref => {
                //  this._emailinput = ref;
                //}}
                returnKeyType="next"
                onSubmitEditing={() =>
                  this._passwordinput && this._passwordinput.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                underlineColorAndroid="#FFFFFF"
                placeholder="Password" 
                placeholderTextColor="#2E8B57"
                keyboardType="default"
                //ref={ref => {
                //  this._passwordinput = ref;
                //}}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserCode => setUserCode(UserCode)}
                underlineColorAndroid="#FFFFFF"
                placeholder="Care Takers Code" 
                placeholderTextColor="#2E8B57"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
            <View style={{ flexDirection: 'row',paddingLeft: 40 }}  > 
        <Text>Login as:</Text>
          <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
           <View style={{ flexDirection: 'row' }}>
            
            <RadioButton value="Senior" />
            <Text>Senior</Text>
          </View>
          <View style={{ flexDirection: 'row' } }>
            
            <RadioButton value="CareTaker" />
            <Text>CareTaker</Text>
           </View>
          </RadioButton.Group>
        </View> 


            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={()=>userLogin()}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => props.navigation.navigate('RegisterScreen')}>
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#2E8B57',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#2E8B57',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: '#2E8B57', 
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#2E8B57',
  },
  registerTextStyle: {
    color: '#2E8B57',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});