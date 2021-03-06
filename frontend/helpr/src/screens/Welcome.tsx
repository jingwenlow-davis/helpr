import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Container } from '../components';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  public navigateSignIn = () => this.props.navigation.navigate('SignIn');
  public navigateSignUp = () => this.props.navigation.navigate('SignUp');

  render() {
    return (
      <Container center>
        <Button title={'Sign In'} onPress={this.navigateSignIn} />
        <Button title={'Sign Up'} onPress={this.navigateSignUp} />
      </Container>
    );
  }
}


export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonz: {
    backgroundColor: 'white'
  }
});