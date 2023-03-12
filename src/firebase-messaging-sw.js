// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/9.11.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
  appId: "1:667240062294:web:a3509c7962b4c286514af7",
  authDomain: "angular-crypto-test.firebaseapp.com",
  databaseURL: "https://angular-crypto-test-default-rtdb.firebaseio.com",
  projectId: "angular-crypto-test",
  storageBucket: "angular-crypto-test.appspot.com",
  messagingSenderId: "667240062294",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
