
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
        } else {
            console.log("not logged in");
        }
    })

    }



    showProfile();
