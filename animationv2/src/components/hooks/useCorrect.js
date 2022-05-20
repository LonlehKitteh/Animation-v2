import app from '../../firebase'
import { useEffect, useState } from 'react'

export function useCorrect() {
    const [correct, setCorrect] = useState([])

    useEffect(() => {
        app.firestore().collection("answersCSS").doc("correct").get().then(doc => {
            setCorrect(doc.data().answers)
        })
    }, [])

    return correct
}