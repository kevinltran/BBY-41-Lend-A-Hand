// Fucntion that creates a new document in the users collection
let phoneNumber;
let homeAddress;
let city;
let postCode;
let bio;

//Gets the values from the fields when the user clicks confirm.
document.getElementById("clicked").onclick = function () {
    homeAddress = document.getElementById("addressInput").value;
    city = document.getElementById("city").value;
    postCode = document.getElementById("postCode").value;
    phoneNumber = document.getElementById("phone").value;
    bio = document.getElementById("userBio").value;
    console.log(phoneNumber);
    console.log(homeAddress);
    console.log(city);
    console.log(postCode);
    console.log(bio);
    write( phoneNumber, homeAddress, city, postCode, bio)


};

// This function creates a new doc in our "Helper" collection in our Database.
function write( phoneNumber, homeAddress, city, postCode) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            db.collection("users").doc(user.uid).update({
                address: homeAddress,
                phone: phoneNumber,
                city: city,
                postalCode: postCode,
                description: bio,
                role: "helper"
            })
        }
    })
       

    //puts a delay on the redirect so the data can be written into our database.
    setTimeout(function () { redirect(); }, 300);
}

//redirects the user to the helper main page.
function redirect() {
    window.location.href = "helperProfile.html"
}

