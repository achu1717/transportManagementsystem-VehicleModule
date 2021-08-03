import React from 'react'
import { View, Text, StyleSheet, Button,Image ,ImageBackground} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default function Explore() {
    return (
        
        <ScrollView>
        <Text style={styles.banner}>LIST OF VEHICLES </Text>
        <View style={styles.mainbox}>
          <View style={styles.headbox1}>
          <View>
          <Image
            style={styles.itemico}
            source={require("../../assets/vehicle.png")}
          />
          </View>
            <View style={styles.namebx}>
              <Text style={styles.rcpnametext}>KL 13 AA 2356</Text>
              <Text style={styles.nametext}>Type : CAR</Text>
              <Text style={styles.nametext}>ID : 32</Text>
              <Text style={styles.nametext}>Seats : 5</Text>
            </View>
          </View>
        </View>
        <View style={styles.mainbox}>
          <View style={styles.headbox1}>
          <View>
          <Image
            style={styles.itemico}
            source={require("../../assets/vehicle.png")}
          />
          </View>
            <View style={styles.namebx}>
              <Text style={styles.rcpnametext}>TN 47 AE 5555</Text>
              <Text style={styles.nametext}>Type : BUS</Text>
              <Text style={styles.nametext}>ID : 12</Text>
              <Text style={styles.nametext}>Seats : 20</Text>
            </View>
          </View>
        </View>
        <View style={styles.mainbox}>
          <View style={styles.headbox1}>
          <View>
          <Image
            style={styles.itemico}
            source={require("../../assets/vehicle.png")}
          />
          </View>
            <View style={styles.namebx}>
              <Text style={styles.rcpnametext}>TN 47 AA 7777</Text>
              <Text style={styles.nametext}>Type : BUS</Text>
              <Text style={styles.nametext}>ID : 44</Text>
              <Text style={styles.nametext}>Seats : 20</Text>
            </View>
          </View>
        </View>
        <View style={styles.mainbox}>
          <View style={styles.headbox1}>
          <View>
          <Image
            style={styles.itemico}
            source={require("../../assets/vehicle.png")}
          />
          </View>
            <View style={styles.namebx}>
              <Text style={styles.rcpnametext}>TN 47 AA 7769</Text>
              <Text style={styles.nametext}>Type : VAN</Text>
              <Text style={styles.nametext}>ID : 74</Text>
              <Text style={styles.nametext}>Seats : 12</Text>
            </View>
          </View>
        </View>
        <View style={styles.mainbox}>
          <View style={styles.headbox1}>
          <View>
          <Image
            style={styles.itemico}
            source={require("../../assets/vehicle.png")}
          />
          </View>
            <View style={styles.namebx}>
              <Text style={styles.rcpnametext}>TN 47 AA 2377</Text>
              <Text style={styles.nametext}>Type : CAR</Text>
              <Text style={styles.nametext}>ID : 36</Text>
              <Text style={styles.nametext}>Seats : 7</Text>
            </View>
          </View>
        </View>
        <View style={styles.mainbox}>
          <View style={styles.headbox1}>
          <View>
          <Image
            style={styles.itemico}
            source={require("../../assets/vehicle.png")}
          />
          </View>
            <View style={styles.namebx}>
              <Text style={styles.rcpnametext}>TN 47 AA 7309</Text>
              <Text style={styles.nametext}>Type : CAR</Text>
              <Text style={styles.nametext}>ID : 34</Text>
              <Text style={styles.nametext}>Seats : 20</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
     
    },
    banner: {
      fontSize: 15,
      fontWeight: "bold",
      marginBottom: 20,
      marginTop:20,
      marginLeft:20
    },
    footr:{
        height:30
    },
    mainbox: {
      height: "18%",
      justifyContent: "center",
      width: "90%",
      marginLeft:"5%",
      paddingLeft:"2%",
      marginTop:9,
      backgroundColor:"white",
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "#1E90FF",
    },
    headbox1: {
      flexDirection: "row",

    },
    namebx: {
      width: "86%",
      height: "100%",
      marginLeft: 2,
    },
  
    nametext: {
      fontSize: 15,
      marginTop: "2.5%",
      marginLeft: "4%",
      color:"gray"
    },
    rcpnametext: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: "2.5%",
        marginLeft: "4%",
        color:"black"
      },
    addresstxt: {
      fontSize: 18,
      marginLeft: "5%",
    },
    addressbtn: {
      borderColor: "#C0C0C0",
      width: "100%",
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: "white",
      height: 55,
      marginTop: "3%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.17,
      shadowRadius: 2.65,
      elevation: 1,
    },
    btntext: {
      fontWeight: "bold",
      fontSize: 3,
    },
    itemico:{
        width:100,
        height:100
    },
  });
