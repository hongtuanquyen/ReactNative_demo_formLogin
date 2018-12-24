import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/database';

var config = {
  apiKey: "AIzaSyCgiDgDcS65LgEy5XSMvM0LrghnhtPnGSU",
  authDomain: "fir-database-demo-25d37.firebaseapp.com",
  databaseURL: "https://fir-database-demo-25d37.firebaseio.com",
  projectId: "fir-database-demo-25d37",
  storageBucket: "fir-database-demo-25d37.appspot.com",
  messagingSenderId: "938404960307"
};
  export const firebaseApp = firebase.initializeApp(config);