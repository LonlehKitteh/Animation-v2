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