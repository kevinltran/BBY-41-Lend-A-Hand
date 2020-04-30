// Fucntion that creates a new document in the users collection
let fullName;
let phoneNumber;
let emailAddress
let homeAddress

//Gets the values from the fields when the user clicks confirm.
document.getElementById("clicked").onclick = function () {
    fullName = document.getElementById("name").value;
    emailAddress = document.getElementById("email").value;
    homeAddress = document.getElementById("addressInput").value;
    phoneNumber = document.getElementById("phone").value;
    console.log(fullName);
    console.log(emailAddress);
    console.log(phoneNumber);
    console.log(homeAddress);
    write(fullName, emailAddress, phoneNumber, homeAddress)


};

// This function creates a new doc in our "Helper" collection in our Database.
function write(fullName, emailAddress, phoneNumber, homeAddress){
    db.collection("users").add({
        address: homeAddress,
        email: emailAddress,
        name: fullName,
        phone: phoneNumber,
<<<<<<< HEAD
        role: "helper"
=======
        role: 'helper'
>>>>>>> c265be9dc971b514abec66cf2e0561c97a84cf32
    })
    .then(function(docRef) {
        console.log("success: ", docRef.id)
    })
    .catch(function(error) {
        console.log("error: ", error);
    })
      
    //puts a delay on the redirect so the data can be written into our database.
    setTimeout(function(){ redirect();}, 1000);
}

//redirects the user to the helper main page.
function redirect() { 
    window.location.href = "helperMain.html"
}

