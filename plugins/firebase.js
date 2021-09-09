import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCb6QK7TyHXL7BfyXfldgx9oLCJm7Ppj8I',
  authDomain: 'solucionesgm-a47f6.firebaseapp.com',
  projectId: 'solucionesgm-a47f6',
  storageBucket: 'solucionesgm-a47f6.appspot.com',
  messagingSenderId: '743141117318',
  appId: '1:743141117318:web:d919457493fbaaea7fb007',
}
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
export { db }
