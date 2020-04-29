// Fucntion that creates a new document in the users collection
let fullName;
let phoneNumber;
let emailAddress
let homeAddress

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

function write(fullName, emailAddress, phoneNumber, homeAddress){
    db.collection("helper").add({
        address: homeAddress,
        email: emailAddress,
        name: fullName,
        phone: phoneNumber
    })
    .then(function(docRef) {
        console.log("success: ", docRef.id)
    })
    .catch(function(error) {
        console.log("error: ", error);
    })
}


