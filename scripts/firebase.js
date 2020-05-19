// Your web app's Firebase configuration


var firebaseConfig = {
    apiKey: "AIzaSyAdQNsdN8jh2Tv1Ot0ADsbRqbzlUMYQXEU",
    authDomain: "lend-a-hand-9861e.firebaseapp.com",
    databaseURL: "https://lend-a-hand-9861e.firebaseio.com/",
    projectId: "lend-a-hand-9861e",
    storageBucket: "lend-a-hand-9861e.appspot.com",
    messagingSenderId: "230477140946",
    appId: "1:230477140946:web:f1c6cb4bb6ea0533416e0b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const storage = firebase.storage();
