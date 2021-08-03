import React from 'react'
import { Button, View, Text, StyleSheet, ImageBackground,Image, TextInput , Alert, ActivityIndicator} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Favorites() {
    return (
        <ScrollView>
        <View style={styles.v1}>
        <Text style={styles.logotxt}>Update Vehicles</Text>
      </View>
        <View style={styles.v2}>
        
<Text style={styles.banner}>Registration Number</Text>
          <TextInput
            placeholder="TN 00 AA 0000"
            placeholderTextColor="gray"
            style={styles.logintxtbx}
            
          />
          <Text style={styles.banner}>Vehicle Type</Text>
          <TextInput
            placeholder="CAR / BUS / VAN"
            placeholderTextColor="gray"
            style={
              styles.logintxtbx
             
            }
            
          />
 <Text style={styles.banner}>Vehicle ID</Text>
          <TextInput
            placeholder="ID No."
            placeholderTextColor="gray"
            style={
              styles.logintxtbx
              }
          />
         
          <Text style={styles.banner}>Seating Capacity</Text>
          <TextInput
            placeholder="Number of seats"
            placeholderTextColor="gray"
            style={styles.logintxtbx}
          />

          <View style={styles.v3}>
            <View
              style={styles.signup}
              blurRadius={Platform.OS == "ios" ? 15 : 5}
            >
              <Button
                title="ADD"
                color="black"
                onPress={() => {props.navigation.navigate('DASHBOARD')}}
              />
              
            </View>
          </View>
        </View></ScrollView>
    )
}
const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: "flex-end",
    },
    yer:{
        flexDirection:"row"
    },
    yer1:{
      flexDirection:"row",
      justifyContent: 'space-between'
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
    logintxtbx2: {
      fontSize: 19,
      textAlign: "center",
      height: 50,
      borderWidth: 1,
      width: "40%",
      marginLeft: "5%",
      borderColor: "gray",
      marginBottom: 30,
    },
    banner:{
      marginLeft:"5%",
      fontSize:16,
      marginBottom:7
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
      fontSize: 30,
      color: "black",
      marginBottom:30
    },
    signup: {
      borderColor: "#1E90FF",
    borderWidth: 2,
    width: "90%",
    marginLeft: 0,
    borderRadius: 10,
    alignContent: "center",
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
  