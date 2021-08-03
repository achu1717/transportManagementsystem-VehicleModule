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
  ActivityIndicator,
} from "react-native";
import firebase from "../../config/config";
export default class Homescreen extends Component {
  constructor() {
    super();
    this.state = {
      uid: "",
    };
  }
  //firebase code
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  render() {
    this.state = {
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
      email: firebase.auth().currentUser.email,
    };
    return (
      <View style={styles.background}>
             <View style={styles.v1}>
        <Image
          style={styles.logo}
          source={require("../../assets/userico.png")}
        />
        <Text style={styles.logotxt}>Edit Personal Details</Text>
      </View>
        <View style={styles.v2}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="gray"
            value={this.state.email}
            color="white"
            style={styles.logintxtbx}
            onChangeText={(val) => this.updateInputVal(val, "email")}
            editable={false}
          />

          <TextInput
            placeholder="Full name"
            placeholderTextColor="gray"
            style={styles.logintxtbx}
            value={this.state.displayName}
            color="white"
            onChangeText={(val) => this.updateInputVal(val, "displayName")}
          />
          
          <View style={styles.v3}>
            <View
              style={styles.signup}
              blurRadius={Platform.OS == "ios" ? 15 : 5}
            >
              <Button
                title="Save Changes"
                color="#1E90FF"
                onPress={() => this.navigation.navigate('DASHBOARD')}
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
    width: "90%",
    marginLeft: 20,
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

});
