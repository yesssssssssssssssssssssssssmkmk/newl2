 import firebase from 'firebase';

 
 
const firebaseConfig = {
    apiKey: "AIzaSyC87M7QUlIv4BRrtOZiTx0G1m6dhcFECAA",
    authDomain: "class58buzzerapp.firebaseapp.com",
    databaseURL: "https://class58buzzerapp.firebaseio.com",
    projectId: "class58buzzerapp",
    storageBucket: "class58buzzerapp.appspot.com",
    messagingSenderId: "19975764201",
    appId: "1:19975764201:web:7003468270023fd8c09878"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();