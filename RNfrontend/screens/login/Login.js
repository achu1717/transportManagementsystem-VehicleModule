import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, ImageBackground,Image, TextInput , Alert, ActivityIndicator} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from '../../config/config';
import Dashboard from '../dashboard/Dashboard';
export default class Homescreen extends Component {

//firebase code for login
constructor() {
  super();
  this.state = { 
    email: '', 
    password: '',
    isLoading: false
  }
}

updateInputVal = (val, prop) => {
  const state = this.state;
  state[prop] = val;
  this.setState(state);
}

userLogin = () => {
  if(this.state.email === '' && this.state.password === '') {
    Alert.alert('Enter details to signin!')
  } else {
    
    firebase
    .auth()
    .signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((res) => {
      console.log(res)
      console.log('User logged-in successfully!')
      this.setState({
        isLoading: false,
        email: '', 
        password: ''
      })
      this.props.navigation.navigate('DASHBOARD')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }
}

  render() {

    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    } 

    return (
<View style={styles.background}>
      <View style={styles.v1}>
      
        <Text style={styles.logotxt}>Transport Management</Text>
      </View>
      <View style={styles.v2}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="gray"
          style={styles.logintxtbx}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="gray"
          style={styles.logintxtbx}
          secureTextEntry
          onChangeText={(val) => this.updateInputVal(val, 'password')}
        />
        <View
          style={styles.loginbtn}
          blurRadius={Platform.OS == "ios" ? 15 : 5}
        >
          <Button title="LOGIN" color="#1E90FF" 
          onPress={() => this.userLogin()}
          />
        </View>
        <View style={styles.forgotbtn}>
        <Button title="forgot password ?" color="#FF8C00" />
        </View>
        <View style={styles.v3}>
          <Text style={styles.nruy}>Not a registered ?</Text>
          <View
            style={styles.signup}
            blurRadius={Platform.OS == "ios" ? 15 : 5}
          >
            <Button
              title="SIGNUP"
              color="#1E90FF"
              onPress={() => this.props.navigation.navigate('REGISTER')}
            />
          </View>
        </View>
      </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent:"center"
  },
  logotxt: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 30,
    color: "black",
  },
  logo: {
    height: 150,
    width: 150,
  },
  logintxtbx: {
    fontSize: 20,
    textAlign: "center",
    height: 50,
    borderWidth: 1,
    width: "70%",
    marginLeft: 60,
    borderTopColor: 0,
    borderRightColor: 0,
    borderLeftColor: 0,
    borderColor: "#1E90FF",
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor:"#DCDCDC"
  },
  loginbtn: {
    borderColor: "#1E90FF",
    borderWidth: 2,
    width: "70%",
    marginLeft: 60,
    borderRadius: 10,
    alignContent: "center",
  },
  forgotbtn:{
    width: "70%",
    marginLeft: 60,
    marginTop:10
  },
  signup: {
    borderColor: "#1E90FF",
    borderWidth: 2,
    width: "70%",
    borderRadius: 10,
    alignContent: "center",
    marginTop: "5%",
  },
  v1: {
    flex: 0.3,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "0%",
    marginTop: "10%",
    paddingBottom: "0%",
  },
  v2: {
    flex: 0.7,
    alignContent: "center",
    paddingTop: "0%",
  },
  v3: {
    flex: 0.7,
    width: "100%",
    marginTop: "5%",
    alignItems: "center",
    alignContent:"flex-end"
  },
  nruy: {
    fontSize: 20,
    fontFamily: "Arial",
    color: "gray",
  },
});