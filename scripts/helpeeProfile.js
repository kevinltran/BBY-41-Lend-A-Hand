var storageRef = storage.ref();
//handle error for blank fields
function showProfile() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.uid)

      db.collection("users").doc(user.uid).get().then(function(snap){
        storageRef.child('profile_pics/' + snap.data().image).getDownloadURL().then(function(url) {
          var img = document.getElementById('profilePic');
          img.src = url;
        }).catch(function(error) {
          // Handle any errors
        });
      })

      db.collection('users').doc(user.uid).get().then(function (snap) {
        document.getElementById("name").innerHTML = snap.data().name;
      }).catch(function (error) {
        console.log("Could not find user", error);
      });


      db.collection('users').doc(user.uid).get().then(function (snap) {
        document.getElementById("email").innerHTML = snap.data().email;
      }).catch(function (error) {
        console.log("Could not find user", error);
      });

      db.collection('users').doc(user.uid).get().then(function (snap) {
        document.getElementById("address").innerHTML = snap.data().address;
      }).catch(function (error) {
        console.log("Could not find user", error);
      });

      db.collection('users').doc(user.uid).get().then(function (snap) {
        document.getElementById("city").innerHTML = snap.data().city;
      }).catch(function (error) {
        console.log("Could not find user", error);
      });


      db.collection('users').doc(user.uid).get().then(function (snap) {
        document.getElementById("postCode").innerHTML = snap.data().postalCode;
      }).catch(function (error) {
        console.log("Could not find user", error);
      });

      db.collection('users').doc(user.uid).get().then(function (snap) {
        document.getElementById("phone").innerHTML = snap.data().phone;
      }).catch(function (error) {
        console.log("Could not find user", error);
      });

      db.collection('users').doc(user.uid).get().then(function (snap) {
        document.getElementById("bio").innerHTML = snap.data().description;
      }).catch(function (error) {
        console.log("Could not find user", error);
      });

    } else {
      console.log("not logged in");
    }
  })

}

var addressID;
var cityID;
var postCodeID;
var phoneID;
var bioID;

document.getElementById("edit5").onclick = function () {
  //creates a textbox
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  bioID = x.id = "newBio"


  //creates an update button
  var save = document.createElement("BUTTON");
  save.innerHTML = "Update";
  save.onclick = update5;

  document.getElementById("bio").append(x, save);
  document.getElementById("edit5").style.display = "none";
}


document.getElementById("edit1").onclick = function () {
  //creates a textbox
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  addressID = x.id = "newAddress"


  //creates an update button
  var save = document.createElement("BUTTON");
  save.innerHTML = "Update";
  save.onclick = update1;

  document.getElementById("address").append(x, save);
  document.getElementById("edit1").style.display = "none";

}

document.getElementById("edit2").onclick = function () {
  //creates a textbox
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  cityID = x.id = "newCity";


  //creates an update button
  var save = document.createElement("BUTTON");
  save.innerHTML = "Update";
  save.onclick = update2;

  document.getElementById("city").append(x, save);

  document.getElementById("edit2").style.display = "none";

}

document.getElementById("edit3").onclick = function () {
  //creates a textbox
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  postCodeID = x.id = "newPostCode"


  //creates an update button
  var save = document.createElement("BUTTON");
  save.innerHTML = "Update";
  save.onclick = update3;

  document.getElementById("postCode").append(x, save);

  document.getElementById("edit3").style.display = "none";

}

document.getElementById("edit4").onclick = function () {
  //creates a textbox
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  phoneID = x.id = "newPhone";


  //creates an update button
  var save = document.createElement("BUTTON");
  save.innerHTML = "Update";
  save.onclick = update4;

  document.getElementById("phone").append(x, save);

  document.getElementById("edit4").style.display = "none";

}

function update1() {
  console.log(addressID);
  firebase.auth().onAuthStateChanged(function (user) {
    newInfo = document.getElementById(addressID).value;
    db.collection("users").doc(user.uid).update({
      address: newInfo
    })
    console.log('success')
  })
  setTimeout(function () { window.location.reload(); }, 500);

}
function update2() {
  console.log(cityID);
  firebase.auth().onAuthStateChanged(function (user) {
    newInfo = document.getElementById(cityID).value;
    db.collection("users").doc(user.uid).update({
      city: newInfo
    })
    console.log('success')
  })
  setTimeout(function () { window.location.reload(); }, 500);

}

function update3() {
  console.log(postCodeID);
  firebase.auth().onAuthStateChanged(function (user) {
    newInfo = document.getElementById(postCodeID).value;
    db.collection("users").doc(user.uid).update({
      postalCode: newInfo
    })
    console.log('success')
  })
  setTimeout(function () { window.location.reload(); }, 500);

}
function update4() {
  console.log(phoneID);
  firebase.auth().onAuthStateChanged(function (user) {
    newInfo = document.getElementById(phoneID).value;
    db.collection("users").doc(user.uid).update({
      phone: newInfo
    })
    console.log('success')
  })
  setTimeout(function () { window.location.reload(); }, 500);

}
function update5() {
  console.log(bioID);
  firebase.auth().onAuthStateChanged(function (user) {
    newBio = document.getElementById(bioID).value;
    db.collection("users").doc(user.uid).update({
      description: newBio
    })
    console.log('success')
  })
  setTimeout(function () { window.location.reload(); }, 500);
}

showProfile();
