// Configuration connexion Firebase

import firebase from 'firebase/app';
import 'firebase/firestore';          //pour les base de données ça permettra les infos complémentaires des users.
import 'firebase/auth';               //Permet de communicquer avec les bubliotheque d'authentification.

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC-U699t3pdU8Upg_7j1Ju8t0u2xKX6YIk",
  authDomain: "decsia-865d0.firebaseapp.com",
  databaseURL: "https://decsia-865d0.firebaseio.com",
  projectId: "decsia-865d0",
  storageBucket: "decsia-865d0.appspot.com",
  messagingSenderId: "1066510145173"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase
