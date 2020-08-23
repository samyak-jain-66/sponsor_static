import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBAr7lYuAZ0kfVj7hI7exiAzI4ER5cRW1w",
    authDomain: "sponsor-me-285805.firebaseapp.com",
    databaseURL: "https://sponsor-me-285805.firebaseio.com",
    projectId: "sponsor-me-285805",
    storageBucket: "sponsor-me-285805.appspot.com",
    messagingSenderId: "753974608245",
    appId: "1:753974608245:web:f7a43a4018c74c45a1533c"
  };
  // Initialize Firebase
  var fire = firebase.initializeApp(firebaseConfig);
  export default fire;