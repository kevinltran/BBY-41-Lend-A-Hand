function getNotifications() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      let bigdiv = document.createElement("div");
      // for each notification the current user has..
      db.collection("users").doc(user.uid).get().then(function (snap) {
        // if notifications are empty
        if (snap.data().notifications.length == 0) {
          bigdiv.innerHTML = "You currently have no notifications - make sure you send some requests first!";
        } else {
          snap.data().notifications.forEach(function (req) {
            // compare id of requester to ids in database
            db.collection("users").get().then(function (ids) {
              ids.forEach(function (person) {
                // if ids match, return the name, address, and list
                if (person.id == req) {
                  // create HTML elements
                  let h4 = document.createElement("h3");
                  let p = document.createElement("p");
                  let p2 = document.createElement("p");
                  let p3 = document.createElement("p");
                  let ul = document.createElement("h4");
                  let div = document.createElement("div");
                  let button = document.createElement("p");

                  // fill HTML elements with data
                  console.log(person.data().name);
                  h4.innerHTML = person.data().name;

                  // delete next line when done
                  h4.innerHTML += "<br/> leon self-note: add profile pic here";
                  //end self-note

                  p.innerHTML = "Location:<br/>" + person.data().address + "<br/>" + person.data().postalCode + "&nbsp;" + person.data().city;
                  p2.innerHTML = "Phone Number:<br/>" + person.data().phone
                  p3.innerHTML = "Email:<br/>" + person.data().email;
                  ul.innerHTML = "<b>List items:</b><br/>";
                  button.innerHTML = "<button style='color: white; background-color: #34a8eb; border-radius: 13px; border-color: #34a8eb' onclick='removeNotification(" + JSON.stringify(person.id) + ")'>Done</button>";
                  person.data().list.forEach(function (item) {
                    let li = document.createElement("li");
                    li.innerHTML = item;
                    ul.append(li);
                  })

                  // styling
                  $(div).css("margin", "1em");
                  $(div).css("padding", "1em");
                  $(div).css("background-color", "#c5f8fa");
                  $(div).css("border-radius", "12px");

                  // rendering
                  ul.innerHTML += "<br/>";
                  div.append(h4);
                  div.append(p);
                  div.append(p2);
                  div.append(p3);
                  div.append(ul);
                  div.append(button);
                  bigdiv.append(div);
                }
              })
            });
          }).catch(function (err) {
            console.log(err);
            console.log("no notifications in database");
          })
        }
      }
      )
      // outer div styling
      $(bigdiv).css("transform", "translate(0px, 70px)");
      $(bigdiv).css("text-align", "center");
      $(bigdiv).css("padding", "1em");
      $(bigdiv).css("font-size", "3vmax");
      $(bigdiv).css("font-family", "'Raleway', sans-serif");
      $(bigdiv).css("font-weight", "600");
      $(bigdiv).css("transform", "translate(0px, 70px)");

      $("body").append(bigdiv);
      $("body").append(div);
    }
  })
}
