import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA92EiKUIsrM1zNiS6s4FS_GNaBr9X_5Rg',
  authDomain: 'facebook-2-0.firebaseapp.com',
  projectId: 'facebook-2-0',
  storageBucket: 'facebook-2-0.appspot.com',
  messagingSenderId: '820973172142',
  appId: '1:820973172142:web:afa7deeec79385cc6c443f',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
