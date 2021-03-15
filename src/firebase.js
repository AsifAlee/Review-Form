import  firebase from 'firebase';
 var firebaseConfig = {
    apiKey: "AIzaSyD-6r223Da09L93WAp1CHgs3x3Y3hP1l4U",
    authDomain: "react-crud-176b8.firebaseapp.com",
    projectId: "react-crud-176b8",
    storageBucket: "react-crud-176b8.appspot.com",
    messagingSenderId: "386686364808",
    appId: "1:386686364808:web:8d00c78dd8ccd67b41433d"
  };

  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();