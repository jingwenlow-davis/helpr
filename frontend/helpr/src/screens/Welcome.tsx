import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container } from '../../theme';
import { Button } from '../components/Button';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <Container>
        <Button title={'Sign In'} />
        <Button title={'Sign Up'} />
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