import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  Image,
  Alert,
} from 'react-native';

import MapImage from '../../assets/map.jpg';

class MapContainer extends React.Component {
  render () {
    return (
      <View style={styles.mapContainer}>
        <Image source={MapImage} />
      </View>
    );
  }
}

class ButtonsContainer extends React.Component {
  render () {
    return (
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button
            onPress={()=>{Alert.alert('GPS button click.')}}
            title='Set location using GPS'
            color='#D32F2F'
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={()=>{Alert.alert('Choose town button click.')}}
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
  }
});