import app from '../../firebase'
import { useEffect, useState } from 'react'

export function useQuestion() {
    const [question, setQuestion] = useState([])

    useEffect(() => {
        app.firestore().collection("questionsCSS").onSnapshot(snap => {
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
        app.firestore().collection("answersCSS").doc("correct").get().then(doc => {
            setCorrect(doc.data().answers)
        })
    }, [])

    return correct
}