function write() {
    // Fucntion that creates a new document in the users collection

    document.getElementById("clicked").onclick = function () {
        let fullName = document.getElementById("name").value;
        let emailAddress = document.getElementById("email").value;
        let homeAddress = document.getElementById("address").value;
        let phoneNumber = document.getElementById("phone").value;
        console.log(fullName);
        console.log(emailAddress);
        console.log(phoneNumber);
        console.log(homeAddress);

        db.collection("helper").add({
            address: homeAddress,
            email: emailAddress,
            name: fullName,
            phone: phoneNumber
        })
            .then(function (docRef) {
                console.log("success: ", docRef.id)
            })
            .catch(function (error) {
                console.log("error: ", error);
            })
    }



}

write();
