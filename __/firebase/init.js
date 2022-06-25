if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyDb2zqOoWiOBwSSkg1fU0ThcYddPZ-0oPQ",
  "appId": "1:1072633341334:web:746c76af60e9a877e769b7",
  "authDomain": "physical-health-management.firebaseapp.com",
  "databaseURL": "https://physical-health-management-default-rtdb.firebaseio.com",
  "measurementId": "G-MYKSGW6BLD",
  "messagingSenderId": "1072633341334",
  "projectId": "physical-health-management",
  "storageBucket": "physical-health-management.appspot.com"
});