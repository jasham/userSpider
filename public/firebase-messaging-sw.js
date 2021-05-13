importScripts('https://www.gstatic.com/firebasejs/8.6.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.6.0/firebase-messaging.js')
firebase.initializeApp({
  apiKey: "AIzaSyDnbgfRnQ8EKLvoAWLV95uYLlRAubK70Qc",
  authDomain: "spider-d2a9d.firebaseapp.com",
  projectId: "spider-d2a9d",
  storageBucket: "spider-d2a9d.appspot.com",
  messagingSenderId: "229412288473",
  appId: "1:229412288473:web:26028063b406a0a3944bc8",
  measurementId: "G-WYZS66C9N3"
});
// firebase.messaging()
const messaging = firebase.messaging()

// Both of them ain't working

// //background notifications will be received here
// messaging.setBackgroundMessageHandler(function (payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload)
//   // Customize notification here
//   const notificationTitle = 'Background Message Title'
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   }

//   return self.registration.showNotification(notificationTitle, notificationOptions)
// })

messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  const notificationTitle = 'Background Message Title'
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  }
  return self.registration.showNotification(notificationTitle, notificationOptions)
})