/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AsyncStorage, Alert, Text, View, Button, ActivityIndicator} from 'react-native';
import '@firebase/auth'
import '@firebase/database';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeComponent from './HomeComponent'
import SignInComponent from './SignInComponent'
import SignUpComponent from './SignUpComponent'
import AuthLoadingComponent from './AuthLoadingComponent'
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
const store = configureStore();

const AppStack = createStackNavigator({Home: HomeComponent});
const AuthStack = createStackNavigator(
  {
    SignIn: SignInComponent, 
    SignUp: SignUpComponent
  },
  {
    initialRouteName: "SignIn"
  }
);

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingComponent,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
  }
)); 

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

