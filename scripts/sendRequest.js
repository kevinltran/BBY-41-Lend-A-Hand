function sendRequest(id, userId) {
  db.collection("users").get().then(function (xlist) {
    xlist.forEach(function (snap) {
      if (snap.id == id) {
        db.collection("users").doc(id).update({
          requests: firebase.firestore.FieldValue.arrayUnion(userId)
        });
        console.log("requested");
      }
    });
  });
}