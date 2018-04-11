import React from 'react';
import { 
	StyleSheet, 
	View,
	Button,
	Text,
	Alert,
} from 'react-native';

class Logo extends React.Component {

}

class FacebookLoginButton extends React.Component {
	render () {
		return (
			<Button
				onPress={()=>{Alert.alert('Login button click.')}}
				title="Login with Facebook"
				color="#4267b2"
			/>
		);
	}
}

export default class Welcome extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.welcomeContainer}>
					<Text>Welcome.js</Text>
				</View>
				<View style={styles.loginContainer}>
					<FacebookLoginButton />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	welcomeContainer: {
		flex: 4,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	loginContainer: {
		flex: 1,
		backgroundColor: '#262626',
		alignItems: 'center',
		justifyContent: 'center',
	}
});