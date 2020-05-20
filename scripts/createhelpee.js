// Fucntion that creates a new document in the users collection
let phoneNumber;
let homeAddress;
let city;
let postCode;
let bio;
//Gets the values from the fields when the user clicks confirm.
document.getElementById("clicked").onclick = function () {
    homeAddress = document.getElementById("addressInput").value;
    city = document.getElementById("city").value;
    postCode = document.getElementById("postCode").value;
    phoneNumber = document.getElementById("phone").value;
    bio = document.getElementById("userBio").value;
    console.log(phoneNumber);
    console.log(homeAddress);
    console.log(city);
    console.log(postCode);
    console.log(bio);
    write(phoneNumber, homeAddress, city, postCode)


};

// This function creates a new doc in our "Helper" collection in our Database.
function write(phoneNumber, homeAddress, city, postCode) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            db.collection("users").doc(user.uid).update({
                address: homeAddress,
                phone: phoneNumber,
                city: city,
                postalCode: postCode,
                description: bio,
                role: "helpee"
            })
        }
    })
       

    //puts a delay on the redirect so the data can be written into our database.
    setTimeout(function () { redirect(); }, 1000);
}

//redirects the user to the helper main page.
function redirect() {
    window.location.href = "helpeeProfile.html"
}

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