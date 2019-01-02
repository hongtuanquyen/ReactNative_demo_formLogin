import React, {Component} from 'react';
import {AsyncStorage, Alert, Text, View, Button} from 'react-native';
import '@firebase/auth'
import { TextInput } from 'react-native-gesture-handler';
import {firebaseApp} from './FirebaseConfig'
import * as SignInActions from "@actions/signInAction";
import { connect } from "react-redux";
import Urls from "@constants/urls"
import CallAPI from "@lib/api"

class SignInComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: ' ',
        password: ' '
      };
      this.textEmail = React.createRef();
      this.textPassword = React.createRef();
    }
    
    static navigationOptions = ({navigation}) => {
      return {
        title: "Log In"  
      }
    }
  
    _handleSignIn = () => {
       this.props.signIn(this.state.email, this.state.password, this.props.navigation);
    }
  
    _handleGetData = () => {
      url = Urls.getData;
      method = Urls.method.get;
      CallAPI(url, '', method, '', '')
      .then((res) => {
        if (res.status == 200) {
          console.warn(res.data);
        } else {
          console.warn(res);
        }
      })
      .catch((e) => {
        console.warn('error', e);
      }); 
    }

    render() {
      return (
        <View>
          <Text>Email: </Text>
          <TextInput ref={this.textEmail} placeholder="Input your email" onChangeText={(text) => { this.setState({ email: text})} }></TextInput>
          <Text>Password: </Text>
          <TextInput secureTextEntry={true} ref={this.textPassword} placeholder="Input your password" onChangeText={(text) => { this.setState({ password: text})} }></TextInput>
          <Button title="Log In" onPress={() => {this._handleSignIn()}} />
          <Button title="Sign Up" onPress={()=>{ this.props.navigation.navigate('SignUp') }} />
          <Button title="Get Data" onPress={()=>{ this._handleGetData() }} />
       </View>
      );
    }
  }
  
  
export default connect(null, SignInActions)(SignInComponent);