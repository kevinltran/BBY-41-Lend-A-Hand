function request() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      db.collection('users').doc(user.uid).get().then(function (snap) {
        if (snap.data().role == "helper") {
          const footer = $("<footer></footer>");
          const button = $("<button onclick='sendReq()'>Request To Help</button>");
          $(footer).css("display", "flex");
          $(footer).css("justify-content", "center");
          $(button).css("width", "100%");
          $(footer).append(button);
          $('body').append(footer);
        }
      });
    }
    else {
      console.log("not logged in");
    }
  });
}

function sendReq() {
  console.log("sent to helpee's notifications");
}