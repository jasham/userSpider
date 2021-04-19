import 'firebase/messaging';
import firebase from 'firebase/app';
import localforage from 'localforage';

const firebaseCloudMessaging = {
  // checking whether token is available in indexed DB
  tokenInlocalforage: async () => localforage.getItem('fcm_token'),
  // initializing firebase app
  async init() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        messagingSenderId: '229412288473',
      });
      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await this.tokenInlocalforage();
        // if FCM token is already there just return the token
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }
        // requesting notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === 'granted') {
          // getting token from FCM
          const fcmToken = await messaging.getToken();
          if (fcmToken) {
            // setting FCM token in indexed db using localforage
            localforage.setItem('fcmToken', fcmToken);
            console.log('fcm token', fcmToken);
            // return the FCM token after saving it
            return fcmToken;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
    return true;
  },
};
export default firebaseCloudMessaging;
