importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDnbgfRnQ8EKLvoAWLV95uYLlRAubK70Qc",
  authDomain: "spider-d2a9d.firebaseapp.com",
  projectId: "spider-d2a9d",
  storageBucket: "spider-d2a9d.appspot.com",
  messagingSenderId: "229412288473",
  appId: "1:229412288473:web:26028063b406a0a3944bc8",
  measurementId: "G-WYZS66C9N3"
});

firebase.messaging();

//background notifications will be received here
firebase.messaging().setBackgroundMessageHandler((payload) => {
  const { title, body } = JSON.parse(payload.data.notification);
  var options = {
    body,
    icon: '/icons/launcher-icon-4x.png',
  };
  registration.showNotification(title, options);
});
