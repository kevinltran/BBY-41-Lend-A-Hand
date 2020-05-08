function getNotifications() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      let list = $("<ul></ul>");
      // for each notification the current user has..
      db.collection("users").doc(user.uid).get().then(function (snap) {
        snap.data().notifications.forEach(function (req) {
          // compare id of requester to ids in database
          db.collection("users").get().then(function (ids) {
            ids.forEach(function (person) {
              // if ids match, return the name
              if (person.id == req) {
                let li = document.createElement("li");
                li.innerHTML = person.data().name + "&emsp;<button onclick='removeNotification(" + JSON.stringify(person.id) + ")'>Done</button>";
                list.append(li);
              }
            })
          });
        }).catch(function (err) {
          console.log(err);
          console.log("no notifications in database");
        })
      }
      )
      $("body").append(list);
    }
  })
}