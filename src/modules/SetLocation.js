import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  Dimensions,
  Switch,
  Alert,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

const {width, height} = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.2922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class PositionRequest extends React.Component {

}

class MapContainer extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      markerPosition: {
        latitude: 0,
        longitude: 0,
      },
      city: null,
    }
  }

  setUserLocation () {

  }

  sendPositionRequest(_latitude, _longitude) {
    fetch('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + _latitude + ','+ _longitude + '&sensor=true')
    .then((response) => response.json())
    .then((responseJSON) => {
      if(responseJSON.status === 'OK') {
        console.log(responseJSON);
        this.setState({city: responseJSON.results[2].formatted_address});
      } else {
        console.error('Status: ' + responseJSON.status);
      } 
    })
    .catch((error) =>{
      console.error(error);
    })
    console.log(this.state.city);
  }
  
  componentDidMount () {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var longi = parseFloat(position.coords.longitude)
      
      var initialRegion = {
        latitude: lat,
        longitude: longi,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
      this.setState({ initialPosition: initialRegion });
      this.setState({ markerPosition: initialRegion });

      this.sendPositionRequest(initialRegion.latitude, initialRegion.longitude);
      
    }, 
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 180000})
    /*
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var longi = parseFloat(position.coords.longitude)

      var lastRegion = {
        latitude: lat,
        longitude: longi,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
      this.setState({ initialPosition: lastRegion });
      this.setState({ markerPosition: lastRegion });
    });
    */
  }


  componentWillUnmount () {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={this.state.initialPosition} >
          <MapView.Marker
            coordinate={this.state.markerPosition} >
            <View style={styles.markerRadius}>
              <View style={styles.marker}>
              </View>
            </View>
          </MapView.Marker>
        </MapView>
        <Text style={styles.cityName}>{this.state.city}</Text>
      </View>
    );
  }
}

class ButtonsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button
            onPress={() => {
              console.log('Set location using GPS button clicked.');
            }}
            title='Set location using GPS'
            color='#D32F2F'
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={()=>{console.log('Choose town button clicked.')}}
            title='Choose town'
            color='#3F51B5'
          />
        </View>
      </View>
    );
  }
}

export default class SetLocation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapContainer />
        <ButtonsContainer />				
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
  markerRadius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 112, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF',
  },
  cityName: {
    position: 'absolute',
  },
  buttonsContainer: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    padding: 5,
    width: 250,
  },
});