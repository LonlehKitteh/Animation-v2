import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyApvvzXiwVe_BTGoClnEhukbVVZE9I0JTs",
    authDomain: "animation-project-cc229.firebaseapp.com",
    projectId: "animation-project-cc229",
    storageBucket: "animation-project-cc229.appspot.com",
    messagingSenderId: "1018777048814",
    appId: "1:1018777048814:web:d9f2e4a0971abf4f6b05ff"
}
firebase.initializeApp(firebaseConfig)
export default firebase