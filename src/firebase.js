import * as firebase from 'firebase';

const config = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT)
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const tweetsRef = databaseRef.child("tweets")