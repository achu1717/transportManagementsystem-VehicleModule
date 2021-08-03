import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Alert, 
  ActivityIndicator
} from "react-native";
import firebase from '../../config/config';
export default class Homescreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailValdate: true,
      password: "",
      passwordValdate: true,
      displayName:"",
      isLoading: false
    };
  }



  // Validite(text, type) {
  //   alph = /^[a-z1-9@.]+$/;
  //   pass = /^[a-z1-9A-Z]+$/;
  //   if (type == "email") {
  //     if (alph.test(text)) {
  //       this.setState({
  //         emailValdate: true,
  //       });
  //     } else {
  //       this.setState({
  //         emailValdate: false,
  //       });
  //     }
  //   } else if (type == "password") {
  //     if (pass.test(text)) {
  //       this.setState({
  //         passwordValdate: true,
  //       });
  //     } else {
  //       this.setState({
  //         passwordValdate: false,
  //       });
  //     }
  //   }
  // }
  //firebase code
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('LOGIN')
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
        <Text style={styles.logotxt}>Create Account</Text>
      </View>
        <View style={styles.v2}>
          
        <TextInput
            placeholder="Full Name"
            placeholderTextColor="gray"
            style={styles.logintxtbx}
            onChangeText={(val) => this.updateInputVal(val, 'displayName')}
          />

          <TextInput
            placeholder="Email"
            placeholderTextColor="gray"
            style={[
              styles.logintxtbx,
              !this.state.emailValdate ? styles.error : null,
            ]}
            onChangeText={(val) => this.updateInputVal(val, 'email')}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="gray"
            style={[
              styles.logintxtbx,
              !this.state.passwordValdate ? styles.error : null,
            ]}
            onChangeText={(val) => this.updateInputVal(val, 'password')}
            secureTextEntry
          />

          <View style={styles.v3}>
            <View
              style={styles.signup}
              blurRadius={Platform.OS == "ios" ? 15 : 5}
            >
              <Button
                title="SIGNUP"
                color="#1E90FF"
                onPress={() => this.registerUser()}
              />
            </View>
          </View>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
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
  logotxt: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 30,
    color: "black",
  },
  logo: {
    height: 100,
    width: 100,
  },
  signup: {
    borderColor: "#1E90FF",
    borderWidth: 2,
    width: "70%",
    borderRadius: 10,
    alignContent: "center",
    marginTop: "5%",
  },

  v2: {
    flex: 0.9,
    alignContent: "center",
    paddingTop: "0%",
  },
  v3: {
    flex: 0.7,
    width: "100%",
    marginTop: "5%",
    alignItems: "center",
  },
  error: {
    borderWidth: 1,
    borderColor: "red",
  },
});
