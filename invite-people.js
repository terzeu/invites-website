 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAbDDYhpS3DOteVl7sYiPnRSR3dpqcPCB4",
    authDomain: "conviteformatura-2baf2.firebaseapp.com",
    databaseURL: "https://conviteformatura-2baf2-default-rtdb.firebaseio.com",
    projectId: "conviteformatura-2baf2",
    storageBucket: "conviteformatura-2baf2.appspot.com",
    messagingSenderId: "826582283350",
    appId: "1:826582283350:web:60c7acc5f84320750e77f7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
(function (){

    const pessoa = [
        {
        nome = 'Paula',
        familia = 'araujo'
        },
        {
        nome = 'Guilherme',
        familia = 'araujo'
        },
        {
        nome = 'Gabriel',
        familia = 'araujo'
        },
        {
        nome = 'Gustavo',
        familia = 'araujo'
        }
    ]
    return firebase.database().ref().child('convidados').push(pessoa)
})()