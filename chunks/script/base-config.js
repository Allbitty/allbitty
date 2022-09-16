/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */



const config = {
  apiKey: "AIzaSyByLv7NxvdC4KPimywqUwSiHPIPojmUOWE",
  authDomain: "allbitty.firebaseapp.com",
  databaseURL: "https://allbitty-default-rtdb.firebaseio.com",
  projectId: "allbitty",
  storageBucket: "allbitty.appspot.com",
  messagingSenderId: "511756096551",
  appId: "1:511756096551:web:fdcbd4009250ea0aa3aa02",
  measurementId: "G-MPCJ1ML4XD"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}