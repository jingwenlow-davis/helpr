import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import AuthLoadingScreen from '../screens/auth';
import WelcomeScreen from '../screens/Welcome';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';

export const url = 'http://7836cdcd.ngrok.io';

const AuthStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
  },
  // {
  //   defaultNavigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
  //       const { routeName } = navigation.state;
  //       // let IconComponent = Ionicons;
  //       let iconName;
  //       if (routeName === 'SignIn') {
  //         iconName = 'exit-to-app';
  //       } else if (routeName === 'SignUp') {
  //         iconName = 'person-add';
  //       }
  //       // You can return any component that you like here!
  //       return <Icon name={iconName} color={tintColor} type="material" />;
  //     },
  //   }),
  //   tabBarOptions: {
  //     activeTintColor: '#FF7A89',
  //     inactiveTintColor: 'gray',
  //   },
  // }
);

export const AppNavigator = 
  createAppContainer(
    createSwitchNavigator(
      {
        AuthLoading: AuthLoadingScreen,
        // App: AppStack,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'AuthLoading',
      }
    )
  )
