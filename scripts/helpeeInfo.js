let displaying = false;
function viewInfo(id, userId) {
  let popup = document.getElementById("popup");
  db.collection("users").get().then(function (xlist) {
    xlist.forEach(function (doc) {
      if (doc.id == id) {
        //display doc.data() in pop up div
        popup.innerHTML = "<h2>" + doc.data().name + "</h2><ul>";

        if (doc.data().list != null) {
          doc.data().list.forEach(function (item) {
            popup.innerHTML += "<li>" + item + "</li>";
          })
        } else {
          popup.innerHTML += "<li>this person has no items on their list</li>";
        }
        popup.innerHTML += "</ul>";
        const footer = $("<div></div>");
        const button = $("<button onclick='sendRequest(" + JSON.stringify(doc.id) + "," + JSON.stringify(userId) + ")'>Request To Help</button>");
        $(footer).css("display", "flex");
        $(footer).css("justify-content", "center");
        $(button).css("width", "100%");
        $(footer).append(button);
        $(popup).append(footer);
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