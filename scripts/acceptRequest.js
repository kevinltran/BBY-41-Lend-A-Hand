function acceptRequest(id) {
  if (confirm("Accepting will share your profile information with this user. Continue?")) {
    accepted(id);
  }
}

function accepted(id) {
  console.log("accepted request");
  firebase.auth().onAuthStateChanged(function (user) {
    db.collection("users").get().then(function (list) {
      list.forEach(function (snap) {
        if (snap.id == id) {
          db.collection("users").doc(id).update({
            notifications: firebase.firestore.FieldValue.arrayUnion(user.uid)
          });
        }
      });
    });
    // delete request from database
    db.collection("users").doc(user.uid).update({
      requests: firebase.firestore.FieldValue.arrayRemove(id)
    })
    // alert and reload
    setTimeout(function () {
      if (!alert('Request accepted! Notification sent')) { window.location.reload(); }
    }, 500);
  })
}