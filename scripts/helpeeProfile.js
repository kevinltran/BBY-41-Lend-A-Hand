
function showProfile() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user.uid)

            db.collection('users').doc(user.uid).get().then(function (snap) {
                document.getElementById("name").innerHTML = snap.data().name;
            }).catch(function (error) {
                console.log("Could not find user", error);
            });


            db.collection('users').doc(user.uid).get().then(function (snap) {
                document.getElementById("email").innerHTML = snap.data().email;
            }).catch(function (error) {
                console.log("Could not find user", error);
            });

            db.collection('users').doc(user.uid).get().then(function (snap) {
                document.getElementById("address").innerHTML = snap.data().address;
            }).catch(function (error) {
                console.log("Could not find user", error);
            });

            db.collection('users').doc(user.uid).get().then(function (snap) {
                document.getElementById("city").innerHTML = snap.data().city;
            }).catch(function (error) {
                console.log("Could not find user", error);
            });


            db.collection('users').doc(user.uid).get().then(function (snap) {
                document.getElementById("postCode").innerHTML = snap.data().postalCode;
            }).catch(function (error) {
                console.log("Could not find user", error);
            });

            db.collection('users').doc(user.uid).get().then(function (snap) {
                document.getElementById("phone").innerHTML = snap.data().phone;
            }).catch(function (error) {
                console.log("Could not find user", error);
            });

            db.collection('users').doc(user.uid).get().then(function (snap) {
                for (let i = 0; i < snap.data().list.length; i++) {
                    let item = document.createElement('p');
                    item.setAttribute("id", "" + snap.data().list[i]);
                    item.innerHTML = snap.data().list[i];
                    document.getElementById("list").appendChild(item)
                }
            })

        } else {
            console.log("not logged in");
        }
    })

}
document.getElementById("clicked1").onclick = function () {
    window.location.href = "updateList.html"
}

document.getElementById("clicked2").onclick = function () {
    window.location.href = "requests.html"
}

showProfile();
