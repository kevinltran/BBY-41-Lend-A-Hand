function removeNotification(id) {
  if (confirm('Tapping "Done" will remove this person\'s information from your notifications. Continue?')) {
    console.log("removed notification");
    // delete request from database
    firebase.auth().onAuthStateChanged(function (user) {

      db.collection("users").doc(user.uid).update({
        notifications: firebase.firestore.FieldValue.arrayRemove(id)
      }).then(function () {
        window.location.reload();
      })
    })
  }
}