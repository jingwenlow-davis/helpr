import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title={'Sign In'} />
        <Button title={'Sign Up'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
