// import firebase from 'firebase/app'
// import { firebaseConfig } from './config'
// import 'firebase/database'

// const app = (!firebase.apps.length) ? firebase.initializeApp(firebaseConfig) : firebase.app()
// const database = app.database().ref().child('testcss')

// var correctAnswers = []

// var dataTestCss = () => {
//     var answers = []
//     database.on('value', snap => {
//         for (let i = 1; i <= 10; i++) {
//             var element = snap.val()['question0' + i]
//             if (i > 9) {
//                 element = snap.val()['question' + i]
//             }
//             answers.push([])
//             correctAnswers.push(element.answer1)
//             for (let j = 1; j <= 4; j++) {
//                 answers[i - 1].push(element['answer' + j])
//             }
//         }
//     })
//     return answers
// }

// function shuffle(array) {
//     var i = array.length,
//         j = 0,
//         temp;

//     while (i--) {

//         j = Math.floor(Math.random() * (i + 1));

//         // swap randomly chosen element with current element
//         temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;

//     }

//     return array;
// }

// export { dataTestCss, shuffle }