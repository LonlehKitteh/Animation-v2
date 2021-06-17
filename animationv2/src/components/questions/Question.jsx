import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import firebase from '../../firebase'

function useQuestion() {
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

export default function Question() {
    const question = useQuestion()
    const [points, setPoints] = useState(0)
    var score = 0
    var randNum = shuffle([0, 1, 2])
    function shuffle(array) {
        var i = array.length, j = 0, temp;

        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp
        }
        return array;
    }

    function takeAnswers() {
        score = 0
        var counter = 0
        var correct = []
        question[0].questions.map(el => correct.push(el.true))

        document.querySelectorAll("input").forEach(el => {
            if (el.checked) {
                if (document.querySelectorAll(`[for="${el.id}"]`)[0].innerHTML === correct[counter++]) {
                    score += (1 / correct.length * 100)
                    setPoints(score)
                }
            }
        })
        return score
    }

    return (
        <>
            {
                question.map(check => {
                    return (
                        check.questions.map((quest, key) => {
                            return (
                                <Form.Group key={`${check.id}-${key}`}>
                                    <Form.Label>{check.questions[randNum[key]].question}</Form.Label>
                                    {[1, 2, 3].map((el, counter) => {
                                        return (
                                            <Form.Check
                                                key={el}
                                                type="radio"
                                                label={quest[`answer${el}`]}
                                                name={`formHorizontalRadios${key + 1}`}
                                                id={`formHorizontalRadios${key + 1}-${counter + 1}`}
                                            />
                                        )
                                    })}
                                </Form.Group>
                            )
                        })
                    )
                })
            }
            <div>{`${Math.round(points)}%`}</div>
            <Button onClick={takeAnswers}>Sprawdź odpowiedzi</Button>
        </>
    )
}
