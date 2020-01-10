import React from 'react';
import {
  // AsyncStorage,
  // Button,
  // StyleSheet,
  // ScrollView,
  Text, KeyboardAvoidingView,
  // View,
  // KeyboardAvoidingView,
} from 'react-native';
// import { _signInAsync } from './auth.js';
import { Formik, Form, useField } from 'formik';
import { Button, Container, TextField } from '../components';
import * as Yup from 'yup';

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign up',
  };

  render() {
    console.log(this.props)
    return (
      // <KeyboardAvoidingView behavior="padding" enabled>
      <Container center>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Container>
              <TextField label={'First Name'} />
              <TextField label={'Last Name'} />
              <TextField label={'Email'} />
              <TextField label={'Password'} />
              <Button onPress={handleSubmit} title="Submit" />
            </Container>
          )}
        </Formik>
      </Container>
    );
  }
}
