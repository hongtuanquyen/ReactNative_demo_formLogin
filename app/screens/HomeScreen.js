import React, {Component} from 'react';
import {TextInput, FlatList, AsyncStorage, Text, View, Button} from 'react-native';
import '@firebase/auth'
import '@firebase/database';
import {firebaseApp} from '../components/FirebaseConfig'

const rootRef = firebaseApp.database().ref();
const animalRef = rootRef.child('animals');

class HomeScreen extends Component {
    constructor() {
      super();
      this.state={
        animalName: '',
        animals: []
      }
      this.textAnimals = React.createRef();  
    }

    componentDidMount() {
      animalRef.on('value', (childSnapshot)=>{
        const animals = [];
        childSnapshot.forEach((doc)=>{
          animals.push({
            key: doc.key,
            animalName: doc.toJSON().animalName
          })
        })
        this.setState({
          animals: animals
        });
      })
    }

    static navigationOptions = ({navigation}) => {
      return {
        title: "Welcome to my app"  
      }
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
        animalRef.push({
          animalName: this.state.animalName
        });
        this.setState({animalName:''});
        this.textAnimals.current.clear();
      }
    }

    removeItem = (key) =>{
      firebaseApp.database().ref('animals/'.concat(key)).remove();
    }

    modifyItem = (key) => {
      firebaseApp.database().ref('animals/'.concat(key)).update({animalName: this.state.animalName});
      this.setState({animalName:''});
      this.textAnimals.current.clear();
    }

    render() {
      return (
        <View>
          <Text>Welcome to my app</Text>
          <TextInput ref={this.textAnimals} onChangeText={(text)=>{this.setState({animalName: text})}} placeholder="Input your animal" />
          <Button title="+" onPress={()=>{this.addItem();}} />
          <FlatList
            data={this.state.animals}
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

  export default HomeScreen;