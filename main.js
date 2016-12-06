var login = document.getElementById("login");
var username = document.getElementById("username");
var messageForm = document.getElementById("message-form");
var messageInput = document.getElementById("note");
var container = document.getElementById("stickyNoteContainer");
var loginPage = document.getElementById("loginPage");



	if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCiz_vyWm9PA4U2nd7ySnJL-NLDSyAbcYo",
    authDomain: "it202final-68481.firebaseapp.com",
    databaseURL: "https://it202final-68481.firebaseio.com",
    storageBucket: "it202final-68481.appspot.com",
    messagingSenderId: "562799919264"
  };
  firebase.initializeApp(config);
  

// Shortcuts to Firebase SDK features.
this.auth = firebase.auth();
this.database = firebase.database();
this.storage = firebase.storage();  



//login  
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/plus.login');


login.addEventListener('click', function(event) {


  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
  

    console.log("Authenticated successfully with payload:", user);
      username.innerHTML = "Hello " + user.displayName;

      


    // ...
  }).catch(function(error) {
    // Handle Errors here.
    console.log("There was an error.");
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });


});


//add messages to database
//messageForm.addEventListener('submit', function(e) {
//  e.preventDefault();
//  // Check that the user entered a message
//  if (this.messageInput.value) {
//    var currentUser = this.auth.currentUser;
//    // Add a new message entry to the Firebase Database.
//    this.messagesRef.push({
//      name: currentUser.displayName,
//      text: this.messageInput.value,
//      photoUrl: currentUser.photoURL || '/images/profile_placeholder.png'
//    }).then(function() {
//      // Clear message text field and SEND button state.
//      messageForm.reset();
//    }.bind(this)).catch(function(error) {
//      console.error('Error writing new message to Firebase Database', error);
//    });
//  }
//});




//-------- just put the notes on the page at least
messageForm.addEventListener('submit', function(e) {

var htmlString =        				"<li>"+
                    					"<a href='#'>"+
                    						"<h3>"+messageInput.value +"</h3>"+
                    					"</a>"+
                    				"</li>";

$("#stickyNoteContainer").append(htmlString);

});