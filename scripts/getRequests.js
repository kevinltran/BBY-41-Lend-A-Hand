// gets and displays helpee user's requests
function getRequests() {
  firebase.auth().onAuthStateChanged(function (user) {
    let list = $("<div></div>");

    // for each request the current user has..
    db.collection("users").doc(user.uid).get().then(function (snap) {

      //if no requests exist
      if (snap.data().requests.length == 0) {
        console.log("Working");
        let msg = $("<p>You currently have no requests - check back later.</p><br/><p>Make sure you keep your necessity list updated!</p>");
        list.append(msg);
      } else {
        snap.data().requests.forEach(function (req) {

          // compare id of requester to ids in database
          db.collection("users").get().then(function (ids) {
            ids.forEach(function (person) {

              // if ids match, return the name
              if (person.id == req) {
                let li = document.createElement("div");
                li.innerHTML = person.data().name + "&nbsp;has requested to help!<br/>";

                //get person's picture
                var storageRef = storage.ref();
                db.collection("users").doc(person.id).get().then(function (snap) {
                  storageRef.child('profile_pics/' + snap.data().image).getDownloadURL().then(function (url) {
                    li.innerHTML += "<img src='" + url + "'/>"
                  }).catch(function (error) {
                    // Handle any errors
                  });
                })

                // display elements after picture is loaded
                setTimeout(function () {
                  li.innerHTML += "<br/><button style='color: white; background-color: #34a8eb; border-radius: 13px; border-color: #34a8eb' onclick='acceptRequest(" + JSON.stringify(person.id) + ")'>Accept</button>";
                  li.innerHTML += "&emsp;<button style='color: white; background-color: #2a8dc7; border-radius: 13px; border-color: #2a8dc7' onclick='refuseRequest(" + JSON.stringify(person.id) + ")'>Refuse</button>";
                }, 800);
                // css styling
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
        });
      }
    })
    // more css styling and rendering
    $(list).css("transform", "translate(0px, 70px)");
    $(list).css("text-align", "center");
    $(list).css("padding", "1em");
    $(list).css("font-size", "3vmax");
    $(list).css("font-family", "'Raleway', sans-serif");
    $(list).css("font-weight", "600");
    $("#requests").append(list);
  })
}