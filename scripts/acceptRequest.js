function acceptRequest(id) {
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
  })
}