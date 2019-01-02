import React, {Component} from 'react';
import {TextInput, FlatList, AsyncStorage, Text, View, Button} from 'react-native';

import * as HomeActions from "@actions/homeActions";
import { connect } from "react-redux";

class HomeComponent extends Component {
    constructor() {
      super();
      this.state={
        animalName: '',
        animals: []
      }
      this.textAnimals = React.createRef();  
    }
    componentDidMount() {
      this.props.getList();
    }
    
    static navigationOptions = ({navigation}) => {
      return {
        title: "Welcome to my app"  
      }
    }

    componentWillReceiveProps(props) {
      console.log(props.homeState.listItem);
    }
    
    logout = async() => {
      try{
        await AsyncStorage.setItem('email'," ");
        await AsyncStorage.setItem('password', " ");
        this.props.navigation.navigate('AuthLoading');
      }catch (error) {
        console.log(error.message);
      }
    }
  
    addItem = () => {
      if(this.state.animalName.trim() !== ''){
        this.props.addItem(this.state.animalName);
      }
    }

    removeItem = (key) =>{
      this.props.removeItem(key);
    }

    modifyItem = (key) => {
      this.props.modifyItem(key, this.state.animalName);
    }

    render() {
      if(this.props.homeState != undefined && this.props.homeState.listItem != undefined) {
        datasource = this.props.homeState.listItem;
      }
      else {
        datasource = null;
      }
      return (
        <View>
          {/* <Text>{this.props.homeState}</Text> */}
          <Text>Welcome to my app</Text>
          <TextInput ref={this.textAnimals} onChangeText={(text)=>{this.setState({animalName: text})}} placeholder="Input your animal" />
          <Button title="+" onPress={()=>{this.addItem();}} />
          <FlatList
            data={datasource}
            renderItem={({item}) => {
              return(
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={{width: 350, height: 50, backgroundColor: 'powderblue'}}>{item.animalName}</Text>
                  <Button style={{width: 50, height: 50 }} title="M" onPress={()=>{this.modifyItem(item.key)}} />
                  <Button style={{width: 50, height: 50 }} title="X" onPress={()=>{this.removeItem(item.key)}}/>
                </View>
              );
            }}
          />
          <Button title="Logout" onPress={()=>{this.logout()}} />
        </View>
      );
    }
  }

function mapStateToProps(state) {
  return {
    homeState: state.homeReducer
  };
}

export default connect(mapStateToProps, HomeActions)(HomeComponent);