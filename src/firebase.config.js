import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
var firebaseConfig = {
apiKey: "AIzaSyAyOELMsFzJf2I2HjUPDr9FBKbdrkCfPb0",
  authDomain: "suns-workout-data.firebaseapp.com",
  projectId: "suns-workout-data",
  storageBucket: "suns-workout-data.appspot.com",
  messagingSenderId: "152004603466",
  appId: "1:152004603466:web:18afa19074a05dc34c80b3"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db