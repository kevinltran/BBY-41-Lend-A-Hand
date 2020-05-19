function getNotifications() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      let div = document.createElement("div");
      // for each notification the current user has..
      db.collection("users").doc(user.uid).get().then(function (snap) {
        snap.data().notifications.forEach(function (req) {
          // compare id of requester to ids in database
          db.collection("users").get().then(function (ids) {
            ids.forEach(function (person) {
              // if ids match, return the name, address, and list
              if (person.id == req) {
                let h4 = document.createElement("h4");
                let p = document.createElement("p");
                let p2 = document.createElement("p");
                let ul = document.createElement("ul");

                console.log(person.data().name);
                h4.innerHTML = person.data().name + "&emsp;<button onclick='removeNotification(" + JSON.stringify(person.id) + ")'>Done</button>";
                p.innerHTML = "Location:&nbsp;" + person.data().address + ",&nbsp;" + person.data().postalCode + "&nbsp;" + person.data().city;
                p2.innerHTML = "Contact info:&nbsp;" + person.data().phone + ",&nbsp;" + person.data().email;
                person.data().list.forEach(function (item) {
                  let li = document.createElement("li");
                  li.innerHTML = item;
                  div.append(li);
                })
                div.append(h4);
                div.append(p);
                div.append(p2);
                div.append(ul);
              }
            })
          });
        }).catch(function (err) {
          console.log(err);
          console.log("no notifications in database");
        })

      }
      )
      $(div).css("transform", "translate(0px, 70px)");
      $("body").append(div);
    }
  })
}
<<<<<<< HEAD

=======
>>>>>>> 3c8ff34b9bfe6aacce48b4bb02b8842ec644d334
