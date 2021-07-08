import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyAbDDYhpS3DOteVl7sYiPnRSR3dpqcPCB4",
  authDomain: "conviteformatura-2baf2.firebaseapp.com",
  databaseURL: "https://conviteformatura-2baf2-default-rtdb.firebaseio.com",
  projectId: "conviteformatura-2baf2",
  storageBucket: "conviteformatura-2baf2.appspot.com",
  messagingSenderId: "826582283350",
  appId: "1:826582283350:web:22c47603c551d6590e77f7"
}

firebase.initializeApp(firebaseConfig)

export const firebaseCollection = firebase.database().ref().child('Convidados')
