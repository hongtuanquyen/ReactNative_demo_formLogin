import * as ActionTypes from '@constants/actionTypes';
import {firebaseApp} from '../components/FirebaseConfig'
import {AsyncStorage, Alert} from 'react-native';

export function signIn (email, password, navigation) {
  firebaseApp.auth().signInWithEmailAndPassword(email, password)
  .then(()=>{
      Alert.alert(
        'Log in successfully',
        'Log in successfully',
        [
          {text: 'OK'}
        ],
        { cancelable: true }
      )
      saveAccount(email, password, navigation);
    }).catch((error) => {
      Alert.alert(
        'Log in failed',
        'Log in failed',
        [
          {text: 'OK'}
        ],
        { cancelable: true }
      )
    })  
      
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SIGN_IN,
    });
  }
}

  saveAccount = async(email, password, navigation) => {
    try{
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password); 
      navigation.navigate('App');
    }
    catch (error) {
      console.log(error.message);
    }
  }