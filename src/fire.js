import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDsJXWhiKDj2ghv_qM6dCVW3Vh-L716yko',
  authDomain: 'redirector-d6118.firebaseapp.com',
  databaseURL: 'https://redirector-d6118.firebaseio.com',
  projectId: 'redirector-d6118',
  storageBucket: 'redirector-d6118.appspot.com',
  messagingSenderId: '921184076202',
  appId: '1:921184076202:web:6d9acabddcb59fa3c1ebd3'
}
const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore()

export { db }
