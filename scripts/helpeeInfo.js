let displaying = false;
function viewInfo(id, userId) {
  let popup = document.getElementById("popup");
  db.collection("users").get().then(function (xlist) {
    xlist.forEach(function (doc) {
      if (doc.id == id) {
        //display doc.data() in pop up div
        popup.innerHTML = "<h2>" + doc.data().name + "</h2><ul>";
        var storageRef = storage.ref();
        db.collection("users").doc(doc.id).get().then(function (snap) {
          storageRef.child('profile_pics/' + snap.data().image).getDownloadURL().then(function (url) {
            popup.innerHTML += "<img style='display: block; margin-left: auto; margin-right: auto' width='50%'src='" + url + "'/>"
          }).catch(function (error) {
            // Handle any errors
          });
        })
        setTimeout(function () {
          if (doc.data().list != null) {
            doc.data().list.forEach(function (item) {
              popup.innerHTML += "<li>" + item + "</li>";
            })
          } else {
            popup.innerHTML += "<li>this person has no items on their list</li>";
          }
          popup.innerHTML += "</ul>";
          const div = $("<div></div>");
          const button = $("<button onclick='sendRequest(" + JSON.stringify(doc.id) + "," + JSON.stringify(userId) + ")'>Request To Help</button>");
          $(div).css("display", "flex");
          $(div).css("justify-content", "center");
          $(button).css("width", "100%");
          $(div).append(button);
          $(popup).append(div);
        }, 800)
      }
    })
  });
  if (popup.style.display === "none" && !displaying) {
    popup.style.display = "block";
    displaying = true;
  } else {
    displaying = false;
  }
}