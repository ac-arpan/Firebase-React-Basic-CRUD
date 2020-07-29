import * as firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyActEP_BvFNnygLG-myx5AkpD7aUtTDgoE",
  authDomain: "react-crud-b54aa.firebaseapp.com",
  databaseURL: "https://react-crud-b54aa.firebaseio.com",
  projectId: "react-crud-b54aa",
  storageBucket: "react-crud-b54aa.appspot.com",
  messagingSenderId: "619399247196",
  appId: "1:619399247196:web:bb6e9f2ef3385e5334bd99"
};
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()