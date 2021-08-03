import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/login/Login";
import Signup from "./screens/signUp/Signup"
import { createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';
import Dashboard from "./screens/dashboard/Dashboard";
import Profile from "./screens/dashboard/Profile";
import Explore from "./screens/dashboard/Explore"
import Favorites from "./screens/dashboard/Favorites"
import Addrecp from "./screens/dashboard/Addrecp"
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  LOGIN: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    }
  },
  REGISTER: {
    screen: Signup,
    navigationOptions: {
      headerShown: false,
    }
  },
  DASHBOARD: {
    screen: Dashboard,
    navigationOptions: {
      headerTintColor:"white",
      headerStyle: {
        backgroundColor: '#1E90FF',
        },
    }
  },
  PROFILE: {
    screen: Profile,
    navigationOptions: {
      headerTintColor:"white",
      headerStyle: {
        backgroundColor: '#1E90FF',
        },
    }
  },
  ADD: {
    screen: Addrecp,
    navigationOptions: {
      headerTintColor:"white",
      headerStyle: {
        backgroundColor: '#1E90FF',
        },
    }
  },
  FAVORITES: {
    screen: Favorites,
    navigationOptions: {
      headerTintColor:"white",
      headerStyle: {
        backgroundColor: '#1E90FF',
        },
    }
  },
  VIEWVEH: {
    screen: Explore,
    navigationOptions: {
      headerTintColor:"white",
      headerStyle: {
        backgroundColor: '#1E90FF',
        },
    }
  },
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({});
