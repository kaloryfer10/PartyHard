import React from 'react';
import { 
	StyleSheet, 
	View,
} from 'react-native';

import Welcome from './src/modules/Welcome';
import SetLocation from './src/modules/SetLocation';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<SetLocation />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
