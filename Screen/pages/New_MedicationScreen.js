import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity, Button,Image,TextInput,
  KeyboardAvoidingView,
  Keyboard,
  SafeAreaView,
  Alert,
  BackHandler, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { onChange } from 'react-native-reanimated';
 import Loader from '../Components/loader';
 import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import TimePicker from 'react-native-simple-time-picker';
import { xorBy } from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';
import My_Medication from './My_MedicationScreen';



 //import all the basic component we have used
 const New_MedicationScreen = props=> {  

  const [Mname, setMname] = useState('');//1
  const [numOfTablets, setnumOfTablets] = useState('');//2
  const [loading, setLoading] = useState(false);
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [selectedHours2, setSelectedHours2] = useState(0);
  const [selectedMinutes2, setSelectedMinutes2] = useState(0);
  const [selectedHours3, setSelectedHours3] = useState(0);
  const [selectedMinutes3, setSelectedMinutes3] = useState(0);
  const [selectedHours4, setSelectedHours4] = useState(0);
  const [selectedMinutes4, setSelectedMinutes4] = useState(0);
  
  const [image, setImage] = useState(null);



  const [ids, setIDs] = useState(0);

 
  
 

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    setImage(result.uri);
  }
};


const readuserid=async()=>{ await AsyncStorage.getItem('ids').then((value) => {
      setIDs(eval(value)); });} 

 
 

const Med=()=>{
  
 fetch('http://192.168.1.106/project/med.php',{
   method:'POST',
   header:{
       'Accept': 'application/json',
       'Content-type': 'application/json',
   },
   
   body: JSON.stringify({
      ids :ids,
     Mname: Mname ,
     numOfTablets: numOfTablets ,
     selectedHours: selectedHours ,
     selectedMinutes: selectedMinutes,
     selectedHours2: selectedHours2 ,
     selectedMinutes2: selectedMinutes2,
     selectedHours3: selectedHours3 ,
     selectedMinutes3: selectedMinutes3,
     selectedHours4: selectedHours4 ,
     selectedMinutes4: selectedMinutes4,
      
     image:image

     
    })
}) 
//responce
.then((response)=> response.json())
//alarm msg
.then((responseJason)=>{
  
   if(responseJason === 'fill all the information')alert(responseJason);
   else if(responseJason === 'Added successfuly'){
    alert(responseJason);
    props.navigation.navigate('My_Medication');
    
   
   }
/*
    AsyncStorage.getItem('name',JSON.stringify(responseJason.name));
    AsyncStorage.setItem('amount',JSON.stringify(responseJason.amount));
    AsyncStorage.setItem('min',JSON.stringify(responseJason.min));
    AsyncStorage.setItem('hr',JSON.stringify(responseJason.hr));
    AsyncStorage.setItem('image',JSON.stringify(responseJason.image));
    props.navigation.navigate('My_Medication');

  
  */

 }).catch((error)=>{
   console.error(error);
});
}


useEffect(()=> {readuserid()})
  
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
       <Loader loading={loading} />
       <ScrollView keyboardShouldPersistTaps="true" nestedScrollEnabled={true}>

         <View style={{ alignItems: 'center' }}>
           <Image
             source={require('./pills3.png')}
             style={{
               width: 60,
               height: 60,
               resizeMode: 'contain',
               marginTop: 10,
               marginRight: 10,
               marginLeft: 10,
             }}
           />
         </View>

        
        
        <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={Mname => setMname(Mname)}
              underlineColorAndroid="#FFFFFF"
              placeholder="Medication Name"
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
              onChangeText={numOfTablets => setnumOfTablets(numOfTablets)}
              underlineColorAndroid="#FFFFFF"
              placeholder="Required Amount"
              placeholderTextColor="#2E8B57"
              autoCapitalize="sentences"
              keyboardType="numeric"
              returnKeyType="next"
              //onSubmitEditing={() =>
              //  this._emailinput && this._emailinput.focus()
              //}
              blurOnSubmit={false}
            />
          </View>

          <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Pick a Time for your medication
        </Text>
        <Text style={{fontSize :17,flex:1,fontWeight:'100'}}>
          Selected Time: {selectedHours}:{selectedMinutes}
        </Text>
        <TimePicker
          selectedHours={selectedHours}
          //initial Hourse value
          selectedMinutes={selectedMinutes}
          //initial Minutes value
          onChange={(hours, minutes) => {
            setSelectedHours(hours);
            setSelectedMinutes(minutes);
          }}
        />
        <Text style={{fontSize :17,flex:1,fontWeight:'100'}}>
          Selected Time2: {selectedHours2}:{selectedMinutes2}
        </Text>
        <TimePicker
          selectedHours2={selectedHours2}
          //initial Hourse value
          selectedMinutes2={selectedMinutes2}
          //initial Minutes value
          onChange={(hours, minutes) => {
            setSelectedHours2(hours);
            setSelectedMinutes2(minutes);
          }}
        />
        <Text style={{fontSize :17,flex:1,fontWeight:'100'}}>
          Selected Time3: {selectedHours3}:{selectedMinutes3}
        </Text>
        <TimePicker
          selectedHours3={selectedHours3}
          //initial Hourse value
          selectedMinutes3={selectedMinutes3}
          //initial Minutes value
          onChange={(hours, minutes) => {
            setSelectedHours3(hours);
            setSelectedMinutes3(minutes);
          }}
        />
        <Text style={{fontSize :17,flex:1,fontWeight:'100'}}>
          Selected Time4: {selectedHours4}:{selectedMinutes4}
        </Text>
        <TimePicker
          selectedHours4={selectedHours4}
          //initial Hourse value
          selectedMinutes4={selectedMinutes4}
          //initial Minutes value
          onChange={(hours, minutes) => {
            setSelectedHours4(hours);
            setSelectedMinutes4(minutes);
          }}
        />
      </View>
      </SafeAreaView>


           <View style={{ height: 10 }} /> 
       

         <View style={styles.buttonStyle}>
         <TouchableOpacity
           
            activeOpacity={0.5}
            onPress={pickImage}>
            <Text style={styles.buttonTextStyle}>Pick an image </Text>
          </TouchableOpacity>
          </View>
          <View style={{alignItems:'center'}}>
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

          </View>



          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => Med()}>
            <Text style={styles.buttonTextStyle}>Add</Text>
          </TouchableOpacity>
        
        </ScrollView>
    </View>
  );
  }


 export default New_MedicationScreen;
 
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
    color: '#FFFFFF',
    borderColor: '#2E8B57',
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    paddingTop:10,
    marginBottom: 20,
    alignItems :'center'

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
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
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
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 5,
    fontSize: 16,
  },
 });