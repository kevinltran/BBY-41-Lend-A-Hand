     //Gets file name by getting everything after \\
    //  function getFile(filePath) {
    //     return filePath.substr(filePath.lastIndexOf('\\') + 1);
    // }
    // fileUpload.addEventListener('change', function (evt) {
    //     reference = getFile(imageIn.value);
    //     storageRef = firebase.storage().ref(reference);
    //     firstFile = evt.target.files[0] // upload the first file only
    // })




    var storageRef = firebase.storage().ref();

      document.getElementById("clicked").onclick = function () {
      
      
        var file = document.getElementById("imageIn");
        console.log(typeof file);
        storageRef.put(file).then(function(snapshot) {
            console.log('Uploaded a blob or file!');
          });

      }