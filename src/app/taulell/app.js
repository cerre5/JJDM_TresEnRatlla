firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

var db = firebase.firestore();

var config ={
  apiKey: "AIzaSyBaNjusUJANROx2LGbZYtatLBWxoMW9c8A",
  authDomain: "rbdd-8cd28.firebaseapp.com",
  databaseURL: "https://rbdd-8cd28.firebaseio.com",
  projectId: "rbdd-8cd28",
  storageBucket: "rbdd-8cd28.appspot.com",
  messagingSenderId: "444486780084",
  appId: "1:444486780084:web:7c920c922568a4954343e1",
  measurementId: "G-NM3PN72X40"
}
firebase.initializeApp(config);

var firestore = firebase.firestore();

const usuario = document.querySelector("#usuario");
const outputHeader = document.querySelector("#title");
const inputTextField = document.querySelector("#puntos");
const saveButton = document.querySelector("#saveButton");

const userCollection = firestore.collection('users');

saveButton.addEventListener('click', e=>{
  e.preventDefault();
  console.log("HOLAA");
  firestore.collection('puntos').doc(inputTextField.value).set({
    usuario: usuario.value,
    puntos: inputTextField.value

  }).then(()=>{

    console.log("Data succes");
  }).catch(error=>{
    console.error(error)});

});
