
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

var uploader = document.getElementById("uploader");
var fileButton = document.getElementById("fileButton");

fileButton.addEventListener('change', function (e) {
  //get File
  var file = e.target.files[0];

  // Create a storage ref
  var storageRef = firebase.storage().ref('profile_pics/' + file.name);

  //Upload File
  var task = storageRef.put(file);


  // Update Bar
  task.on('state_changed',
      function progress(snapshot) {
          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          uploader.value = percentage;
      }, 
      
      function error(err) {

      },
     
      function complete() {

      }

  );

});