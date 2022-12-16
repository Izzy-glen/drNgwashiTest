// Import the functions you need from the SDKs you need
import { getRemoteConfig } from "firebase/remote-config";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOVqBavyRWp14obRPMOqKMRJrrLvMi9HQ",
  authDomain: "drng-23.firebaseapp.com",
  databaseURL: "https://drng-23-default-rtdb.firebaseio.com",
  projectId: "drng-23",
  storageBucket: "drng-23.appspot.com",
  messagingSenderId: "725343233461",
  appId: "1:725343233461:web:c7ff2906d11503f3d425fc",
  measurementId: "G-7W6MYTFNSV",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// Initialize Remote Config and get a reference to the service
const remoteConfig = getRemoteConfig(app);
remoteConfig.settings.minimumFetchIntervalMillis = 3600000;

export const firestore = firebase.firestore();

export const db = getFirestore(app);

export default firebaseConfig;
