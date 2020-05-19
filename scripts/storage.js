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