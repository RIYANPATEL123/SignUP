import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import BasicButton from './BasicButton';
import LoginSignUpBtn from './LoginSingUpBtn';
import { Picker } from '@react-native-picker/picker';
import ValidationComponent from 'react-native-form-validator';
import ORDivider from "./ORDivider";
import SnackBar from "./SnackBar";
import { Audio } from 'expo-av';

export default class SignUp extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      ageGroup: '',
      password: '',
      confirmPassword: '',
      snackBarVisible: false,
      snackBarType: "",
      snackBarText: "",
    };
  }

  

  //function to handle when signup btn is clicked on
  handleRegisterBtnClick = () => {
    //validating fields using 3rd party library
    this.validate({
      name: { minlength: 3, maxlength: 25, required: true },
      email: { email: true, required: true },
      ageGroup: { required: true },
      password: { required: true },
      confirmPassword: { equalPassword: this.state.password, required: true },
    });

      //if some error found in validation
        //then displaying it in snackbar
        if (this.getErrorMessages()) {
          this.displaySnackBar("error", this.getErrorMessages());
      } else {
          this.hideSnackBar();
         // this.playAudio();
          this.displaySnackBar("success", "Login Clicked!");
      }

  };

 //function to display snackbar
 displaySnackBar = (type, text) => {
  this.setState({
      "snackBarType": type,
      "snackBarText": text,
  });
  this.setState({
      "snackBarVisible": true
  });
}

//function to hide snackbar
hideSnackBar = () => {
  this.setState({
      "snackBarVisible": false
  });
}
 

  //function to handle when sign in btn is clicked on
  handleSignInBtnClick() {
    console.log('sign in clicked');
  }

  //component rendering
  render() {
    return (
      <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Signup</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your name"
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
          />

          <View style={styles.divider}></View>

          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.inputField}
            keyboardType="email-address"
            placeholder="Enter your registered email"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
          />

          <View style={styles.divider}></View>

          <Text style={styles.label}> Phone number</Text>
          <TextInput
            style={styles.inputField}
            keyboardType="numeric"
            placeholder="Enter your mobile number"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
          />

          <View style={styles.divider}></View>

          <Text style={styles.label}>Gender</Text>
          <Picker
                style={styles.inputField}
                selectedValue={this.state.ageGroup}
                onValueChange={(ageGroup, itemIndex) => this.setState({ ageGroup })}>
                <Picker.Item label="" value="" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
                
           </Picker>

           <View style={styles.divider}></View>

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inputField}
            secureTextEntry
            placeholder="Enter password"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />

          <View style={styles.divider}></View>

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.inputField}
            secureTextEntry
            placeholder="Confirm password"
            value={this.state.confirmPassword}
            onChangeText={(confirmPassword) =>
              this.setState({ confirmPassword })
            }
          />
        </View>

        <BasicButton text="Register" onPress={this.handleRegisterBtnClick} />

        
        <ORDivider />
        <LoginSignUpBtn
          customStyle={styles.signin}
          text="Already have an account?"
          btnText="Sign in"
          onPress={this.handleSignInBtnClick}
        />
      </ScrollView>
       {
        this.state.snackBarVisible ?
            <SnackBar
                isVisible={this.state.snackBarVisible}
                text={this.state.snackBarText}
                type={this.state.snackBarType}
                onClose={this.hideSnackBar}
            />
            : null
    }
</>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60,
    paddingHorizontal: 30,
  },

  title: {
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: 0.1,
    color: '#2E2E2E',
  },

  form: {
    marginVertical: 35,
  },

  label: {
    fontSize: 16,
    lineHeight: 18,
    color: '#666666',
    marginBottom: 3,
  },

  inputField: {
    fontSize: 14,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#BFBFBF',
    paddingVertical: 6,
  },

  divider: {
    paddingVertical: 8,
  },

  log: {
    textAlign: 'center',
    marginVertical: 2,
    color: 'red',
  },

  signin: {
    marginVertical: 40,
  },
  snackbar: {
    backgroundColor: "red",
}
});
