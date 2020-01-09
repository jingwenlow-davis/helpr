import React from 'react';
import {
  // AsyncStorage,
  // Button,
  // StyleSheet,
  // ScrollView,
  Text,
  // View,
  // KeyboardAvoidingView,
} from 'react-native';
// import { _signInAsync } from './auth.js';
// import t from 'tcomb-form-native';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign in',
  };

  render() {
    return (
      // <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Text>Heading 1</Text>

          // <Formik
          //   initialValues={{ name: '', email: '' }}
          //   validationSchema={Yup.object({
          //     name: Yup.string()
          //       .required('Required'),
          //     email: Yup.string()
          //       .email('Invalid Email')
          //       .required('Required'),
          //   })}
          //   onSubmit={(values, formikActions) => {
          //     setTimeout(() => {
          //       Alert.alert(JSON.stringify(values));
          //       // Important: Make sure to setSubmitting to false so our loading indicator
          //       // goes away.
          //       formikActions.setSubmitting(false);
          //     }, 500);
          //   }}>
          //   {props => (
          //     <View>
          //      <TextInput
          //         onChangeText={props.handleChange('name')}
          //         onBlur={props.handleBlur('name')}
          //         value={props.values.name}
          //         autoFocus
          //         placeholder="Your Name"
          //         style={styles.input}
          //         onSubmitEditing={() => {
          //           // on certain forms, it is nice to move the user's focus
          //           // to the next input when they press enter.
          //           this.emailInput.focus()
          //         }}
          //       />
          //       {props.touched.name && props.errors.name ? (
          //         <Text style={styles.error}>{props.errors.name}</Text>
          //       ) : null}
          //       <TextInput
          //         onChangeText={props.handleChange('email')}
          //         onBlur={props.handleBlur('email')}
          //         value={props.values.email}
          //         placeholder="Email Address"
          //         style={styles.input}
          //         ref={el => this.emailInput = el}
          //       />
          //       {props.touched.email && props.errors.email ? (
          //         <Text style={styles.error}>{props.errors.email}</Text>
          //       ) : null}
          //       <Button
          //         onPress={props.handleSubmit}
          //         color="black"
          //         mode="contained"
          //         loading={props.isSubmitting}
          //         disabled={props.isSubmitting}
          //         style={{ marginTop: 16 }}>
          //         Submit
          //       </Button>
          //       <Button
          //         onPress={props.handleReset}
          //         color="black"
          //         mode="outlined"
          //         disabled={props.isSubmitting}
          //         style={{ marginTop: 16 }}>
          //         Reset
          //       </Button>
          //     </View>
          //   )}
          // </Formik>
          // <Button
          //   title="Sign in!"
          //   color="#FF7A89"
          //   onPress={() => _signInAsync(this.props.navigation, this._form)}
          // />
      // </KeyboardAvoidingView>
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
