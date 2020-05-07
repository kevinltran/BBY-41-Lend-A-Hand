function viewHelpees() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      let info = document.getElementById("info");
      let helpees = db.collection("users").where("role", "==", "helpee");
      helpees.get().then(function (list) {
        list.forEach(function (doc) {
          let name = doc.data().name;
          let link = document.createElement("button");
          let br = document.createElement("br");
          link.innerHTML = name;
          link.setAttribute("onclick", "viewInfo(" + JSON.stringify(doc.id) + "," + JSON.stringify(user.uid) + ")");
          info.append(link);
          info.append(br);
        });
      });

      // delete next 2 lines to remove "View notifications" anchor
      let notifications = $("<a href='helperNotifications.html'>View notifications</a>");
      $("body").append(notifications);
    }
    else {
      console.log("not logged in");
    }
  });
}