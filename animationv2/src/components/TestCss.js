import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../js/pageAnimation'
import { Form, Button } from 'react-bootstrap'
import { useCorrect, useQuestion } from './questions/Question'
import '../css/test.css'

export default function TestCss() {
    const question = useQuestion()
    const correct = useCorrect()
    const [points, setPoints] = useState(0)
    const [randAnswers,] = useState(shuffle([1, 2, 3]))
    const [randQuestions,] = useState(shuffle([0, 1, 2]))

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

    function takeAnswers(e) {
        e.preventDefault()
        var result = []
        document.querySelectorAll("input").forEach(el => {
            if (el.checked) {
                result.push(document.querySelector(`[for=${el.id}]`).innerHTML)
            }
            el.disabled = true
        })
        arraysEqual(result)
    }
    function arraysEqual(result) {
        var counter = 0
        correct.forEach(element => {
            if (result.includes(element)) {
                counter++
            }
            return setPoints(counter)
        })
    }
    return (
        <motion.div
            className="page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <Form className="test">
                {
                    question.map(check => {
                        return (
                            check.questions.map((quest, key) => {
                                return (
                                    <Form.Group key={`${check.id}-${key}`}>
                                        <Form.Label>{check.questions[randQuestions[key]].question}</Form.Label>
                                        {[1, 2, 3].map((el, counter) => {
                                            return (
                                                <Form.Check
                                                    key={el}
                                                    type="radio"
                                                    label={check.questions[randQuestions[key]][`answer${randAnswers[counter]}`]}
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
                <div id="points">{points}</div>
                <Button variant="primary" id="answers" onClick={takeAnswers}>Sprawdź odpowiedzi</Button>
            </Form>
        </motion.div>
    )
}
