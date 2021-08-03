import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  ImageBackground,
  Image,
} from "react-native";
import firebase from "../../config/config";
import Location from "../../components/Location";
import {useNavigation} from '@react-navigation/native'

const Dashboard = (props) => {
    return (
      <View style={styles.background}>
        
        <View style={styles.container1}>
          <View style={styles.profiletab}>
            
            <Image
              source={require("../../assets/userico.png")}
              style={styles.userico}
            />
            <Button
              title="ME"
              color="#1E90FF"
              style={styles.textStyle}
              onPress={() => {props.navigation.navigate('PROFILE')}}
            />
          </View>
          <View style={styles.locationtab}>
          <Image
              source={require("../../assets/add.png")}
              style={styles.userico1}
            />
          <Button
              title="ADD VEHICLE"
              color="#1E90FF"
              style={styles.textStyle}
              onPress={() => {props.navigation.navigate('ADD')}}
            />
          </View>
        </View>
        <View style={styles.container2}>
        <View style={styles.profiletab}>
        <Image
              source={require("../../assets/view.png")}
              style={styles.userico1}
            />
          <Button
              title="VIEW VEHICLES"
              color="#1E90FF"
              style={styles.textStyle}
              onPress={() => {props.navigation.navigate('VIEWVEH')}}
            />
          </View>
          <View style={styles.locationtab}>
          <Image
              source={require("../../assets/update.png")}
              style={styles.userico1}
            />
            <Button
              title="UPDATE VEHICLE"
              color="#1E90FF"
              style={styles.textStyle}
              onPress={() => {props.navigation.navigate('FAVORITES')}}
            />
          </View>
        </View>
        <View style={styles.container3}>
        <View style={styles.profiletab}>
        <Image
              source={require("../../assets/delete.png")}
              style={styles.userico1}
            />
           <Button
              title="DELETE VEHICLE"
              color="#1E90FF"
              style={styles.textStyle}
              onPress={() => {props.navigation.navigate('ADDRECIPIE')}}
            />
          </View>
          <View style={styles.locationtab}>
            <Image
              source={require("../../assets/fav.png")}
              style={styles.locationico}
            />
        
          </View>
        </View>
        <View
          style={styles.logoutbtn}
          blurRadius={Platform.OS == "ios" ? 15 : 5}
        >
          <Button
            color="red"
            title="Logout"
            onPress={() => this.signOut()}
          />
        </View>
        <View style={styles.v4}></View>
        </View>
    );
  }


const styles = StyleSheet.create({
  container1: {
    flex: 0.2,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "0%",
    marginTop: "20%",
    paddingBottom: "0%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  container2: {
    flex: 0.2,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "0%",
    marginTop: "20%",
    paddingBottom: "0%",
    justifyContent: "space-between",
    flexDirection: "row",
 
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
    color: "white",
  },
  logo: {
    height: 100,
    width: 100,
  },
  container3: {
    flex: 0.2,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "10%",
    marginTop: "20%",
    paddingBottom: "0%",
    justifyContent: "space-between",
    flexDirection: "row",
 
  },
  profiletab: {
    width: 180,
    height: 150,
    borderWidth: 3,
    borderColor: "#1E90FF",
    marginLeft: 20,
    borderRadius: 15,
    alignItems: "center",
    backgroundColor:"white",
  },
  userico: {
    width: 100,
    height: 100,
  },
  userico1: {
    width: 60,
    height: 60,
    marginTop:20
  },
  locationico: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
  locationtab: {
    width: 180,
    height: 150,
    marginRight: 20,
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#1E90FF",
    marginLeft: 20,
    borderRadius: 15,
    backgroundColor:"white",
  },
  v4: {
    flex: 0.7,
    alignContent: "center",
    paddingTop: "0%",
  },
  logoutbtn: {
    borderColor: "red",
    borderWidth: 2,
    width: "70%",
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
    marginLeft: "15%",
    marginTop: "5%",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  textStyle: {
    fontSize: 35,
    marginBottom: 20,
    color: "white",
  },
});
export default Dashboard;