import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import firebase from '../firebase'

function useQuestion() {
    const [question, setQuestion] = useState([])

    useEffect(() => {
        firebase.firestore().collection("pytania").onSnapshot(snap => {
            const newQuestion = snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))

            setQuestion(newQuestion)
        })

    }, [])

    return question
}

export default function Question() {
    const question = useQuestion()
    return (
        <>{console.log(question)}</>
    )
}
