function refuseRequest(id) {
  console.log("refused request");
  // delete request from database
  firebase.auth().onAuthStateChanged(function (user) {
    db.collection("users").doc(user.uid).update({
      requests: firebase.firestore.FieldValue.arrayRemove(id)
    })
  })
}