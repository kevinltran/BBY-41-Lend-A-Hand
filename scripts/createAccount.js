// Fucntion that creates a new document in the users collection

function createAccount() {

    // if the current user logged in user
    // is authenticated, then grab "uid" "displayName" and "email"
    // use "set()" with merge (if document did not exist it will be created)

    const db = firebase.firestore();
        db.collection("users").doc(user.uid).set(
    	{
        "name":user.displayName,
         "email":user.email,
         "address":user.address,

        },{ merge: true });
    
}
