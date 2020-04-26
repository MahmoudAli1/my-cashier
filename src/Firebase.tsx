import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCTbNxj2wDntX1eGLT32lqqe4tag9fwUf4",
    authDomain: "my-cashier-51c4c.firebaseapp.com",
    databaseURL: "https://my-cashier-51c4c.firebaseio.com",
    projectId: "my-cashier-51c4c",
    storageBucket: "my-cashier-51c4c.appspot.com",
    messagingSenderId: "597785020865",
    appId: "1:597785020865:web:78ed13916b31a899fbc740",
    measurementId: "G-PF1G336ZGT"
  };


firebase.initializeApp(firebaseConfig);

export default firebase;