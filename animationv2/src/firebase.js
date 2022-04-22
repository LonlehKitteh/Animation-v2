import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBms8Pg_WZ3o4RbfRm2g-6eKAUMgWjACag",
    authDomain: "animation-eaacf.firebaseapp.com",
    projectId: "animation-eaacf",
    storageBucket: "animation-eaacf.appspot.com",
    messagingSenderId: "231176049537",
    appId: "1:231176049537:web:a48ee0cd1459d4c7b60e80",
    measurementId: "G-EPZ9N7TMYQ"
})


export const auth = firebaseConfig.auth()
export default firebaseConfig