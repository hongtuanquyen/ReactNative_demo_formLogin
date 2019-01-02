import React, {Component} from 'react';
import {Alert, Text, View, Button} from 'react-native';
import '@firebase/auth'
import { TextInput } from 'react-native-gesture-handler';
import {firebaseApp} from './FirebaseConfig'
import * as SignUpActions from "@actions/signUpAction";
import { connect } from "react-redux";

class SignUpComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: 's',
        password: 's' 
      };
      this.textEmail = React.createRef();
      this.textPassword = React.createRef();
    }
    static navigationOptions = ({navigation}) => {
      return {
        title: "Sign Up"  
      }
    }
  
  
    _handleSubmitData = () => {
      this.props.signUp(this.state.email, this.state.password); 
    }
    
    render() {
      return (
        <View>
          <Text>Email: </Text>
          <TextInput ref={this.textEmail} placeholder="Input your Email" onChangeText={(text) => {this.setState({ email: text})} }></TextInput>
          <Text>Password: </Text>
          <TextInput secureTextEntry={true} ref={this.textPassword} placeholder="Input your password" onChangeText={(text) => {this.setState({ password: text})} } ></TextInput>
          <Button title="Sign Up" onPress={() => {this._handleSubmitData()}}/>
        </View>
      );
    }
  }

export default connect(null, SignUpActions)(SignUpComponent);