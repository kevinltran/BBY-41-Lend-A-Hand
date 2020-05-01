// updates the user's listed items in database
function update() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.uid);
      // User is signed in
      let item = document.getElementById("item").value;
      console.log(item);
      db.collection("users").doc(user.uid).update({
        list: firebase.firestore.FieldValue.arrayUnion(item)
      })
        .then(function () {
          console.log("updated");
          window.location.reload();
        })
        .catch(function (error) {
          console.log("error");
        })
    } else {
      console.log("not logged in");
    }
  });

}

//Deletes the user's listed items from database
function remove(item) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(item);
      db.collection("users").doc(user.uid).update({
        list: firebase.firestore.FieldValue.arrayRemove(item)
      }).then(function () {
        console.log("removed");
        window.location.reload();
      })
        .catch(function (error) {
          console.log("error");
        })
    }
  })
}
//Reads and displays the user's listed items from database
function getItem() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      let table = $("<table id='slot'></table>")

      db.collection("users").doc(user.uid).get()
        .then(function (snap) {

          if (snap.exists) {
            snap.data().list.forEach(function (item) {
              let li = document.createElement("li");
              li.innerHTML = JSON.stringify(item);
              li.innerHTML += "&emsp;<button onclick='remove(" + JSON.stringify(item) + ")'>Delete</button>";
              table.append(li);
            });
          }
        });
      with ($("#info")) {
        html(table);
        css("text-align", "left");
      }
    }
    else {
      console.log("not logged in");
    }
  });
}