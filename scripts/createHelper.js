// Fucntion that creates a new document in the users collection
let fullName;
let phoneNumber;
let emailAddress
let homeAddress;
let city;
let postCode;

//Gets the values from the fields when the user clicks confirm.
document.getElementById("clicked").onclick = function () {
    fullName = document.getElementById("name").value;
    emailAddress = document.getElementById("email").value;
    homeAddress = document.getElementById("addressInput").value;
    city = document.getElementById("city").value;
    postCode = document.getElementById("postCode").value;
    phoneNumber = document.getElementById("phone").value;
    console.log(fullName);
    console.log(emailAddress);
    console.log(phoneNumber);
    console.log(homeAddress);
    console.log(city);
    console.log(postCode);
    write(fullName, emailAddress, phoneNumber, homeAddress, city, postCode)


};

// This function creates a new doc in our "Helper" collection in our Database.
function write(fullName, emailAddress, phoneNumber, homeAddress, city, postCode) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            db.collection("users").doc(user.uid).update({
                address: homeAddress,
                email: emailAddress,
                name: fullName,
                phone: phoneNumber,
                city: city,
                postalCode: postCode,
                role: "helper"
            })
        }
    })
       

    //puts a delay on the redirect so the data can be written into our database.
    setTimeout(function () { redirect(); }, 1000);
}

//redirects the user to the helper main page.
function redirect() {
    window.location.href = "googleMaps-example.html" //"helperMain.html"
}

