function getRequests() {
  firebase.auth().onAuthStateChanged(function (user) {
    let list = $("<ul></ul>");
    // for each request the current user has..
    db.collection("users").doc(user.uid).get().then(function (snap) {
      snap.data().requests.forEach(function (req) {
        // compare id of requester to ids in database
        db.collection("users").get().then(function (ids) {
          ids.forEach(function (person) {
            // if ids match, return the name
            if (person.id == req) {
              let li = document.createElement("li");
              li.innerHTML = person.data().name + "&nbsp;has requested to help!<br/>";
              li.innerHTML += "&emsp;<button onclick='acceptRequest(" + JSON.stringify(person.id) + ")'>Accept</button>";
              li.innerHTML += "&emsp;<button onclick='refuseRequest(" + JSON.stringify(person.id) + ")'>Refuse</button>";
              list.append(li);
            }
          })
        });
      }).catch(function (err) {
        console.log(err);
        console.log("no requests in database");
      });
    }
    )
    $("body").append(list);
  })
}