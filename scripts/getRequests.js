function getRequests() {
  firebase.auth().onAuthStateChanged(function (user) {
    let list = $("<div></div>");
    // for each request the current user has..
    db.collection("users").doc(user.uid).get().then(function (snap) {
      snap.data().requests.forEach(function (req) {
        // compare id of requester to ids in database
        db.collection("users").get().then(function (ids) {
          ids.forEach(function (person) {
            // if ids match, return the name
            if (person.id == req) {
              let li = document.createElement("div");
              li.innerHTML = person.data().name + "&nbsp;has requested to help!<br/>";
              //comment this out when finished
              li.innerHTML += '<br/>leon self-note: remember to add profile pictures here too once done<br/>'
              //end of self note
              li.innerHTML += "&emsp;<button onclick='acceptRequest(" + JSON.stringify(person.id) + ")'>Accept</button>";
              li.innerHTML += "&emsp;<button onclick='refuseRequest(" + JSON.stringify(person.id) + ")'>Refuse</button>";
              $(li).css("margin", "1em");
              $(li).css("padding", "1em");
              $(li).css("background-color", "#c5f8fa");
              $(li).css("border-radius", "12px");
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
    $(list).css("transform", "translate(0px, 70px)");
    $(list).css("text-align", "center");
    $(list).css("padding", "1em");
    $(list).css("font-size", "3vmax");
    $(list).css("font-family", "'Raleway', sans-serif");
    $(list).css("font-weight", "600");
    $("#requests").append(list);
  })
}