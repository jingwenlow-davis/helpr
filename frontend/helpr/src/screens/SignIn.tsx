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
// import t from 'tcomb-form-native';
import { TextField } from '../components/FormFields';
import { Formik, Form, useField } from 'formik';
import { Container } from '../../theme';
import { Button } from '../components/Button';
import * as Yup from 'yup';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign in',
  };

  render() {
    console.log(this.props)
    return (
      // <KeyboardAvoidingView behavior="padding" enabled>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Container>
              <TextField label={'Email'} />
              <TextField label={'Password'} />
              <Button onPress={handleSubmit} title="Submit" />
            </Container>
          )}
        </Formik>
      // </KeyboardAvoidingView>
      // <Formik
      //   initialValues={{
      //     firstName: '',
      //     lastName: '',
      //     email: '',
      //     acceptedTerms: false, // added for our checkbox
      //     jobType: '', // added for our select
      //   }}
      //   validationSchema={Yup.object({
      //     firstName: Yup.string()
      //       .max(15, 'Must be 15 characters or less')
      //       .required('Required'),
      //     lastName: Yup.string()
      //       .max(20, 'Must be 20 characters or less')
      //       .required('Required'),
      //     email: Yup.string()
      //       .email('Invalid email address')
      //       .required('Required'),
      //     acceptedTerms: Yup.boolean()
      //       .required('Required')
      //       .oneOf([true], 'You must accept the terms and conditions.'),
      //     jobType: Yup.string()
      //       .oneOf(
      //         ['designer', 'development', 'product', 'other'],
      //         'Invalid Job Type'
      //       )
      //       .required('Required'),
      //   })}
      //   onSubmit={(values, { setSubmitting }) => {
      //     setTimeout(() => {
      //       alert(JSON.stringify(values, null, 2));
      //       setSubmitting(false);
      //     }, 400);
      //   }}
      // >
      //   <Form>
      //     <TextField
      //       label="First Name"
      //       name="firstName"
      //       type="text"
      //       placeholder="Jane"
      //     />
      //     <TextField
      //       label="Last Name"
      //       name="lastName"
      //       type="text"
      //       placeholder="Doe"
      //     />
      //     <TextField
      //       label="Email Address"
      //       name="email"
      //       type="email"
      //       placeholder="jane@formik.com"
      //     />
      //     <SelectField label="Job Type" name="jobType">
      //       <option value="">Select a job type</option>
      //       <option value="designer">Designer</option>
      //       <option value="development">Developer</option>
      //       <option value="product">Product Manager</option>
      //       <option value="other">Other</option>
      //     </SelectField>
      //     <CheckboxField name="acceptedTerms">
      //       I accept the terms and conditions
      //     </CheckboxField>

      //     <button type="submit">Submit</button>
      //   </Form>
      // </Formik>
          // <Button
          //   title="Sign in!"
          //   color="#FF7A89"
          //   onPress={() => _signInAsync(this.props.navigation, this._form)}
          // />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   logo: {
//     resizeMode: 'contain',
//     height: 200,
//     maxWidth: "100%",
//     margin: 0,
//     marginBottom: 20,
//   },
// });
