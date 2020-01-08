import React from 'react';
import AppNavigator from './screens/AppNavigator';
import { ThemeProvider } from 'react-native-elements';
import { theme } from './theme';

export const url = 'http://7836cdcd.ngrok.io';

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    );
  }
}
