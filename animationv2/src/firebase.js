import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyApvvzXiwVe_BTGoClnEhukbVVZE9I0JTs",
    authDomain: "animation-project-cc229.firebaseapp.com",
    projectId: "animation-project-cc229",
    storageBucket: "animation-project-cc229.appspot.com",
    messagingSenderId: "1018777048814",
    appId: "1:1018777048814:web:d9f2e4a0971abf4f6b05ff"
})

export const actionCodeSettings = {
    url: 'https://animation-project-cc229.web.app',
    handleCodeInApp: true,
    iOS: {
        bundleId: 'com.example.ios'
    },
    android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
};


export const auth = firebaseConfig.auth()
export default firebaseConfig