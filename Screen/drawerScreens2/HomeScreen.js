import React, {Component} from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage
  } from 'react-native';
  
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, {PROVIDER_GOOGLE}  from 'react-native-maps'


export default class HomeScreen extends React.Component {

  static navigationOptions = {

    title: 'Select a location',
    headerStyle: {
    backgroundColor: '#85C1E9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold',
    },
  } //end navigationOptions


    constructor(props) {
        super(props)
      
        this.state = {
          currentLatitudeDelta: 0.1, //hadol 3shan awwal mrra awal ma tft7 screen el map
          currentLongitudeDelta: 0.1,


          region: {
            latitude: 0,  // default for Nablus: latitude: 32.2211 and longitude: 35.2544
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0
          },
          customMarker: {
              customCoords: { latitude: 0, longitude: 0} //a36eto default el coords la Nablus, mmken yn36a el default tb3 mwqe3 el user
          },
          markers: []
        }
      }

     async findCurrentUserLocation(){
    
         await navigator.geolocation.getCurrentPosition(
          position => {

            var currentLatitude = parseFloat(position.coords.latitude)
            var currentLongitude = parseFloat(position.coords.longitude)

            var currentRegion = {
              latitude: currentLatitude,
              longitude: currentLongitude,
              latitudeDelta: this.state.currentLatitudeDelta,
              longitudeDelta: this.state.currentLongitudeDelta,
            }

            var currentMarker = {
              customCoords:{ latitude: currentLatitude, longitude: currentLongitude}
            }
      
            this.setState({region: currentRegion})
            this.setState({customMarker: currentMarker})
          },
          error => alert(error.message),
          { enableHighAccuracy: false, timeout: 20000 }
        );
    };

    async componentWillMount() {
        await this.findCurrentUserLocation();
    }

    componentWillUnmount(){
      AsyncStorage.multiSet([
        
        ["latitudeFromMap", this.state.customMarker.customCoords.latitude.toString()],
        ["longitudeFromMap", this.state.customMarker.customCoords.longitude.toString()]
        // ["latitudeFromMap", this.state.region.latitude.toString()],
        // ["longitudeFromMap", this.state.region.longitude.toString()]
      ])
    }

    addMarker(coordinates) {
        this.setState({
            customMarker:{ customCoords: coordinates }
          })
    }

    render(){
        return(
            
            <View style={{flex:1}} >
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={{flex:1}} 
                region={this.state.region}
                onPress={(e) => this.addMarker(e.nativeEvent.coordinate)}
                onRegionChangeComplete ={ (region) => {
                  this.setState({region})
                  this.state.currentLatitudeDelta = region.latitudeDelta
                  this.state.currentLongitudeDelta = region.longitudeDelta
                }}
                >
                
                <MapView.Marker 
                    coordinate={this.state.customMarker.customCoords} 
                    title="My Marker"
                    description={this.state.customMarker.customCoords.latitude+', '+this.state.customMarker.customCoords.longitude}   
                />                    
                
            </MapView>   
            
                <TouchableOpacity style={styles.circleStyle} onPress={() => this.findCurrentUserLocation()} >
                    <Icon name="my-location" color="black" size={25} />
                </TouchableOpacity>
            </View>

        );
    }

}

const styles = StyleSheet.create({

    circleStyle: {
      flex: 1,
      borderColor:'gray',
      borderWidth:1,
      borderRadius:25,
      backgroundColor:'white',
      height:50,
      width:50,
      position: 'absolute',//use absolute position to show button on top of the map
      bottom:'1%',
      right:'1%',
      justifyContent: 'center',
      alignItems: 'center',
    },
})
