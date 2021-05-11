// import 'firebase/messaging';
// import firebase from 'firebase/app';
// import localforage from 'localforage';

// const firebaseCloudMessaging = {
//   // checking whether token is available in indexed DB
//   tokenInlocalforage: async () => localforage.getItem('fcm_token'),
//   // initializing firebase app
//   init: async () => {
//     if (!firebase.apps.length) {
//       firebase.initializeApp({
//         messagingSenderId: '229412288473',
//       });
//       try {
//         const messaging = firebase.messaging();
//         const tokenInLocalForage = await this.tokenInlocalforage();
//         // if FCM token is already there just return the token
//         if (tokenInLocalForage !== null) {
//           return tokenInLocalForage;
//         }
//         // requesting notification permission from browser
//         const status = await Notification.requestPermission();
//         if (status && status === 'granted') {
//           // getting token from FCM
//           const fcmToken = await messaging.getToken();
//           if (fcmToken) {
//             // setting FCM token in indexed db using localforage
//             localforage.setItem('fcmToken', fcmToken);
//             console.log('fcm token', fcmToken);
//             // return the FCM token after saving it
//             return fcmToken;
//           }
//         }
//       } catch (error) {
//         console.error(error);
//         return null;
//       }
//     }
//     return true;
//   },
// };
// export default firebaseCloudMessaging;

// import 'firebase/messaging';
// import firebase from 'firebase/app';
// import localforage from 'localforage';

// // checking whether token is available in indexed DB
// const firebaseCloudMessaging = {
//   // checking whether token is available in indexed DB
//   // tokenInlocalforage: async () => localforage.getItem('fcm_token'),
//   // initializing firebase app
//   init: async () => {
//     if (!firebase.apps.length) {
//       firebase.initializeApp({
//         apiKey: 'AIzaSyDnbgfRnQ8EKLvoAWLV95uYLlRAubK70Qc',
//         authDomain: 'spider-d2a9d.firebaseapp.com',
//         projectId: 'spider-d2a9d',
//         storageBucket: 'spider-d2a9d.appspot.com',
//         messagingSenderId: '229412288473',
//         appId: '1:229412288473:web:26028063b406a0a3944bc8',
//         measurementId: 'G-WYZS66C9N3',
//       });
//       let fcmToken;
//       try {
//         const messaging = firebase.messaging();
//         console.log('Requesting network permission', tokenInlocalforage());

//         const tokenInLocalForage = await tokenInlocalforage();

//         // if FCM token is already there just return the token
//         if (tokenInLocalForage !== null) {
//           return tokenInLocalForage;
//         }
//         // requesting notification permission from browser
//         const status = await Notification.requestPermission();
//         if (status && status === 'granted') {
//           // getting token from FCM
//           fcmToken = await messaging.getToken();
//           if (fcmToken) {
//             // setting FCM token in indexed db using localforage
//             localforage.setItem('fcm_token', fcmToken);
//             console.log('fcm token', fcmToken);
//             // return the FCM token after saving it
//             return fcmToken;
//           }
//         }
//       } catch (error) {
//         console.error(error);
//         return null;
//       }
//       return fcmToken;
//     }
//   },
// };
// export default firebaseCloudMessaging;

import 'firebase/messaging';
import firebase from 'firebase/app';
import localforage from 'localforage';

const tokenInlocalforageFn = () => localforage.getItem('fcm_token');

const firebaseCloudMessaging = {
  // checking whether token is available in indexed DB

  // initializing firebase app
  init: async () => {
    let fcmToken;
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyDnbgfRnQ8EKLvoAWLV95uYLlRAubK70Qc',
        authDomain: 'spider-d2a9d.firebaseapp.com',
        projectId: 'spider-d2a9d',
        storageBucket: 'spider-d2a9d.appspot.com',
        messagingSenderId: '229412288473',
        appId: '1:229412288473:web:26028063b406a0a3944bc8',
        measurementId: 'G-WYZS66C9N3',
      });
      // console.log('Ginger');
      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await tokenInlocalforageFn();
        // if FCM token is already there just return the token
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }
        // requesting notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === 'granted') {
          // getting token from FCM
          fcmToken = await messaging.getToken();
          if (fcmToken) {
            // setting FCM token in indexed db using localforage
            localforage.setItem('fcm_token', fcmToken);
            console.log('fcm_token', fcmToken);
            // return the FCM token after saving it
            return fcmToken;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
    return fcmToken;
  },
};
export default firebaseCloudMessaging;
