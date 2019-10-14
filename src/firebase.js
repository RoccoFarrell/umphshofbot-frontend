import * as firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyAugHiaqSZBdsmDIb1Gsf5eutrHiC3bTPk",
    authDomain: "umphshofbot-e1c79.firebaseapp.com",
    databaseURL: "https://umphshofbot-e1c79.firebaseio.com",
    projectId: "umphshofbot-e1c79",
    storageBucket: "umphshofbot-e1c79.appspot.com",
    messagingSenderId: "159175579655",
    appId: "1:159175579655:web:d63a2552bc307efa21f2a2",
    measurementId: "G-12RFXB8N89"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const tweetCollection = db.collection('tweets')
export const tweetsRef = tweetCollection