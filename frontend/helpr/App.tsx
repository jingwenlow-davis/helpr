import React from 'react';
import { AppNavigator } from './src/navigation/AppNavigator';
import * as Font from 'expo-font';

// import { ThemeProvider } from 'react-native-elements';
// import { theme } from './theme';

export const url = 'http://7836cdcd.ngrok.io';

interface AppState {
  fontLoaded: boolean;
}
export default class App extends React.Component<{}, AppState> {

  constructor(props) {
    super(props);
    this.fetchFonts();

    this.state = {
      fontLoaded: false
    }
  }

  async fetchFonts() {
    await Font.loadAsync({
      'montserrat': require('./src/assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    })
    this.setState({fontLoaded: true});
  }
  
  render() {
    const { fontLoaded } = this.state;

    return (
      fontLoaded ? <AppNavigator /> : null
    );
  }
}
