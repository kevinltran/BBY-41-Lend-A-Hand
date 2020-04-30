function redirect() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            db.collection("users").doc(user.uid).get().then(function (snap) {
                if (snap.data().role == "helper") {
                    console.log("redirect to helper page");
                    document.getElementById("body").addEventListener("click", function (e) {
                        window.location.href = "confirmHelpee.html"
                    })
                } else {
                    console.log("redirect to helpee page");
                    document.getElementById("body").addEventListener("click", function (e) {
                        window.location.href = "confirmHelpee.html"
                    })
                }
            })
        }
    });
}

redirect();