import React from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Button,
  Image,
} from 'react-native';

import Profile from '../../assets/profile.svg';
import Events from '../../assets/events.svg';

class ProfileButton extends React.Component {
  render () {
    return (
      <View>
        <Image source={Profile} />
      </View>
    );
  }
}

class EventsButton extends React.Component {
  render () {
    return (
      <View>
        <Image source={Profile} />
      </View>
    );
  }
}

export default class Menu extends React.Component {
  render () {
    return (
      <EventsButton />
    );
  }
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: 'red',
	},
});