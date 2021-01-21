
//Import React and Hook we needed
import React, { useState } from 'react';

//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Loader from './Components/loader';
import { RadioButton} from 'react-native-paper';

const RegisterScreen = props => {  
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userCode, setUserCode] = useState('');
  const [value, setValue] = useState('');
  const [userPassconfirm, setUserPassconfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  
  const userSignup=()=>{

    fetch('http://192.168.1.106/project/Signup.php',{
      method:'POST',
      header:{
          'Accept': 'application/json',
  'Content-type': 'application/json',
      },
      
      body: JSON.stringify({

        userName: userName,
        userEmail: userEmail,
        userPass: userPass,
        userCode: userCode,
        value: value,
        userPassconfirm: userPassconfirm,
        
       })
  }) 
  //responce
  .then((response)=> response.json())
  //alarm msg
  .then((responseJason)=>{
     
      if(responseJason ==='Please fill all the information to register')alert(responseJason);
       else if(responseJason ==='Email is not valid')alert(responseJason);
       else if(responseJason ==='Password is weak')alert(responseJason);
       else if(responseJason ==='Email Already Exist, Please Try Again')alert(responseJason);
       else if(responseJason ==="The two passwords don't match")alert(responseJason);
       else if(responseJason ==="User Registered Successfully") {
         alert(responseJason);
         props.navigation.navigate('LoginScreen');
    
      
       }

                
              
              

  }).catch((error)=>{
      console.error(error);
  });

}
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#2E8B57',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../Image/success.png')}
          style={{ height: 150, resizeMode: 'contain', alignSelf: 'center' }}
        />
        <Text style={styles.successTextStyle}>Registration Successful.</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Loader loading={loading} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../Image/logo2.png')}
            style={{
              width: 160,
              height: 160,
              resizeMode: 'contain',
              marginTop: 10,
              marginRight: 10,
              marginLeft: 10,
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserName => setUserName(UserName)}
              underlineColorAndroid="#FFFFFF"
              placeholder="Name"
              placeholderTextColor="#2E8B57"
              autoCapitalize="sentences"
              returnKeyType="next"
              //onSubmitEditing={() =>
              //  this._emailinput && this._emailinput.focus()
              //}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              underlineColorAndroid="#F6F6F7"
              placeholder="Email"
              placeholderTextColor="#2E8B57"
              keyboardType="email-address"
              //ref={ref => {
              //  this._emailinput = ref;
              //}}
              returnKeyType="next"
              onSubmitEditing={() => this._passinput && this._passinput.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserPass => setUserPass(UserPass)}
              underlineColorAndroid="#F6F6F7"
              placeholder="Password"
              placeholderTextColor="#2E8B57"
              
              //keyboardType="numeric"
              //ref={ref => {
              //  this._passinput = ref;
              //}}
              onSubmitEditing={() =>
                this._passconfirminput && this._passconfirminput.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={userPassconfirm => setUserPassconfirm(userPassconfirm)}
              underlineColorAndroid="#F6F6F7"
              placeholder="Confirm Password "
              placeholderTextColor="#2E8B57"
              //keyboardType="numeric"
              //ref={ref => {
              //  this._passconfirminput = ref;
              //}}
              onSubmitEditing={() =>
                this._codeinput && this._codeinput.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserCode => setUserCode(UserCode)}
              underlineColorAndroid="#FFFFFF"
              placeholder="Care Takers Code"
              placeholderTextColor="#2E8B57"
              autoCapitalize="sentences"
              //ref={ref => {
              //  this._codeinput = ref;
              //}}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
        <View style={{ flexDirection: 'row',paddingLeft: 40 }}  > 
        <Text>Register as:</Text>
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
            onPress={userSignup}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
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
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
