function viewHelpees() {
  firebase.auth().onAuthStateChanged(function (user) {
    // if (user) {
    let info = document.getElementById("info");
    let helpees = db.collection("users").where("role", "==", "helpee");
    helpees.get().then(function (list) {
      list.forEach(function (doc) {
        let name = doc.data().name;
        let link = document.createElement("a");
        let br = document.createElement("br");
        link.innerHTML = name;
        link.setAttribute("href", "");
        info.append(link);
        info.append(br);
      });
    });
    // }
    // else {
    //   console.log("not logged in");
    // }
  });
}