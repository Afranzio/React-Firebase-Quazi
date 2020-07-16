import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCSxkR7f5vlwOyAFD09kEPUJKkUa0I6ZXo",
    authDomain: "first-app-7c92d.firebaseapp.com",
    databaseURL: "https://first-app-7c92d.firebaseio.com",
    projectId: "first-app-7c92d",
    storageBucket: "first-app-7c92d.appspot.com",
    messagingSenderId: "91934498619",
    appId: "1:91934498619:web:d8d21a5a8c6e3a263d211e",
    measurementId: "G-H24S2DNWJF"
})

const db = firebaseApp.firestore();

export default db;