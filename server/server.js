var express = require("express");
var firebaseAdmin = require('./configs/FirebaseConfig');
var bodyParser = require('body-parser')

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(3000);

app.post('/getData', (req, res) => {
  res.status(200).json({
    status: 200,
    data: "Connected"
  });
});

app.post("/signUp", (req, res) => {
  firebaseAdmin.auth.createUser({
    email: req.body.email,
    emailVerified: true,
    // phoneNumber: "",
    password: req.body.password,
    // displayName: "",
    // photoURL: "",
    disabled: false
  })
  .then(() => {
    res.status(200).json({
      status: 200,
      data: true
    });
  })
  .catch((error) => {
    res.status(200).json({
      status: 200,
      data: "Can't sign up, error: " + error
    });   
  })
  // firebaseApp.firebaseApp.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
});

app.post("/insertDB", (req, res) => { 
  firebaseAdmin.refAnimal.push({
    animalName: req.body.animalName
  })
  .then(() => {
    let animals = [];
    firebaseAdmin.refAnimal.once('value', (childSnapshot)=>{   
      childSnapshot.forEach((doc)=>{
        animals.push({
          key: doc.key,
          animalName: doc.toJSON().animalName
        }) 
      })
    }).then(()=>{
      res.status(200).json({
        status: 200,
        data: animals
      });
    })
    .catch((error) => {
      res.status(200).json({
        status: 200,
        data: "Can't insert, error: " + error
      });   
    })
  })
  .catch((error) => {
    res.status(200).json({
      status: 200,
      data: "Can't insert, error: " + error
    });   
  })
});

app.post("/modifyDB", (req, res) => { 
  firebaseAdmin.refRoot.ref('animals/'.concat(req.body.key)).update({
    animalName: req.body.animalName
  })
  .then(() => {
    let animals = [];
    firebaseAdmin.refAnimal.once('value', (childSnapshot)=>{   
      childSnapshot.forEach((doc)=>{
        animals.push({
          key: doc.key,
          animalName: doc.toJSON().animalName
        }) 
      })
    }).then(()=>{
      res.status(200).json({
        status: 200,
        data: animals
      });
    })
    .catch((error) => {
      res.status(200).json({
        status: 200,
        data: "Can't modify, error: " + error
      });   
    })
  })
  .catch((error) => {
    res.status(200).json({
      status: 200,
      data: "Can't modify, error: " + error
    });   
  })
});

app.post("/deleteDB", (req, res) => { 
  firebaseAdmin.refRoot.ref('animals/'.concat(req.body.key)).remove()
  .then(() => {
    let animals = [];
    firebaseAdmin.refAnimal.once('value', (childSnapshot)=>{   
      childSnapshot.forEach((doc)=>{
        animals.push({
          key: doc.key,
          animalName: doc.toJSON().animalName
        }) 
      })
    }).then(()=>{
      res.status(200).json({
        status: 200,
        data: animals
      });
    })
    .catch((error) => {
      res.status(200).json({
        status: 200,
        data: "Can't delete, error: " + error
      });   
    })
  })
  .catch((error) => {
    res.status(200).json({
      status: 200,
      data: "Can't delete, error: " + error
    });   
  })
});

app.post("/getDB", (req, res) => { 
  let animals = [];
  firebaseAdmin.refAnimal.once('value', (childSnapshot)=>{   
    childSnapshot.forEach((doc)=>{
      animals.push({
        key: doc.key,
        animalName: doc.toJSON().animalName
      }) 
    })
  }).then(()=>{
    res.status(200).json({
      status: 200,
      data: animals
    });
  })
  .catch((error) => {
    res.status(200).json({
      status: 200,
      data: "Can't get, error: " + error
    });   
  })
});