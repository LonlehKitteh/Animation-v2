import firebase from '../../firebase'
import { useEffect, useState } from 'react'

export function useQuestion() {
    const [question, setQuestion] = useState([])

    useEffect(() => {
        firebase.firestore().collection("questionsCSS").onSnapshot(snap => {
            const newQuestion = snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))

            setQuestion(newQuestion)
        })
    }, [])

    return question
}

export function useCorrect() {
    const [correct, setCorrect] = useState([])

    useEffect(() => {
        firebase.firestore().collection("answersCSS").doc("correct").get().then(doc => {
            setCorrect(doc.data().answers)
        })
    }, [])

    return correct
}