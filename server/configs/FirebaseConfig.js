var admin = require('firebase-admin');
var serviceAccount = require("../serviceAccount/fir-database-demo-25d37-firebase-adminsdk.json");

// const firebase = require("firebase");
// var config = {
//   apiKey: "AIzaSyCgiDgDcS65LgEy5XSMvM0LrghnhtPnGSU",
//   authDomain: "fir-database-demo-25d37.firebaseapp.com",
//   databaseURL: "https://fir-database-demo-25d37.firebaseio.com",
//   projectId: "fir-database-demo-25d37",
//   storageBucket: "fir-database-demo-25d37.appspot.com",
//   messagingSenderId: "938404960307"
// };
// firebaseApp = firebase.initializeApp(config);

// module.exports = {
//   firebaseApp: firebaseApp
// }

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://fir-database-demo-25d37.firebaseio.com'
});

var auth = admin.auth();
var refRoot = admin.database();
const refAnimal = refRoot.ref('animals');

module.exports = {
  auth: auth,
  refRoot: refRoot,
  refAnimal: refAnimal
}