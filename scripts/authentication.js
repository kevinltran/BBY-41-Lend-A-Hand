// Initialize the FirebaseUI Widget using Firebase. ( A new UI object)
// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// // Configuration for object
// var uiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       return true;
//     },
//     uiShown: function() {
//       // The widget is rendered.
//       // Hide the loader.
//       document.getElementById('loader').style.display = 'none';
//     }
//   },
//   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//   signInFlow: 'popup',
//   // In here put where the user goes after log in
//   signInSuccessUrl: 'welcome.html',
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     //firebase.auth.GithubAuthProvider.PROVIDER_ID,
//     // Commented everything out but kept the email one
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//     //firebase.auth.PhoneAuthProvider.PROVIDER_ID
//   ],
//   // Terms of service url.
//   tosUrl: 'welcome.html',
//   // Privacy policy url.
//   privacyPolicyUrl: 'welcome.html'
// };

// // The start method will wait until the DOM is loaded.
// // says to launch the ui at firebase container (line 20) , using uiConfig

// ui.start('#firebaseui-auth-container', uiConfig);
