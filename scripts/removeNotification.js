function removeNotification(id) {
  console.log("removed notification");
  // delete request from database
  firebase.auth().onAuthStateChanged(function (user) {
    db.collection("users").doc(user.uid).update({
      notifications: firebase.firestore.FieldValue.arrayRemove(id)
    }).then(function () {
      window.location.reload();
    })
  })

  //delete next 2 lines to remove "View helpees" anchor
  let viewHelpees = $("<a href='viewHelpees.html'>View helpees</a>");
  $("body").append(viewHelpees);
}