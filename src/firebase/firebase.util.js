import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyBDf8AGoEjBKLJ-BdGXe9SveuPLNH5_LzY",
    authDomain: "react-ecom-80483.firebaseapp.com",
    databaseURL: "https://react-ecom-80483.firebaseio.com",
    projectId: "react-ecom-80483",
    storageBucket: "react-ecom-80483.appspot.com",
    messagingSenderId: "381666857055",
    appId: "1:381666857055:web:2538c1a4b2bf111ba10bea",
    measurementId: "G-9VJQFCPJY2"
  };

  firebase.initializeApp(config);

  const provider=new firebase.auth.GoogleAuthProvider()

  export const auth=firebase.auth()

export const Signingoogle=() => auth.signInWithPopup(provider);


    export default firebase;