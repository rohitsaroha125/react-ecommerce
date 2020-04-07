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

  export const createuserDocument= async (userAuth,addData) => {
    if(!userAuth) return;

    const userRef=firestore.doc(`users/${userAuth.uid}`)
    const snapShot=await userRef.get()

    if(!snapShot.exists)
    {
      const displayName=addData
      const {email}=userAuth
      const createdAt=new Date();

      try
      {
        userRef.set({displayName,email,createdAt})
      }catch(error)
      {
        console.log(error)
      }

    }
    return userRef
  }


/*

  export const createuserDocument= async (userAuth,addData) => 
  {
    if(!userAuth) return;

    const userRef=firestore.doc(`users/${userAuth.uid}`)
    const snapShot=await userRef.get()
    if(!snapShot.exists)
    {
      const {displayName}=addData
      const {email}=userAuth
      const createdAt=new Date();
      
      try{
        userRef.set({displayName,email,createdAt})
      }catch(error){
        console.log(error);
      }

    }

    return userRef

  }

*/
 
  firebase.initializeApp(config);

  const provider=new firebase.auth.GoogleAuthProvider()

  export const auth=firebase.auth()
  export const firestore=firebase.firestore()

export const Signingoogle=() => auth.signInWithPopup(provider);


    export default firebase;