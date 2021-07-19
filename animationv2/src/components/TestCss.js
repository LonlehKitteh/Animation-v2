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
        var counter = 0
        var key = 0
        document.querySelectorAll("input").forEach(el => {
            let answer = document.querySelector(`[for=${el.id}]`)
            if (el.checked) {
                answer.classList.add("incorrect")
                el.classList.add("incorrect")
                if (correct[randQuestions[key++]].value === answer.innerHTML) {
                    counter++
                    setPoints(counter)
                }
            }
            for (let i = 0; i <= correct.length - 1; i++) {
                if (correct[randQuestions[i]].value === answer.innerHTML) {
                    answer.classList.remove("incorrect")
                    el.classList.remove("incorrect")
                    answer.classList.add("correct")
                    el.classList.add("correct")
                }
            }
            el.disabled = true
            document.getElementById("points").style.width = "100%"
            document.getElementById("points").style.setProperty("--points", `"${Math.round(counter / correct.length * 100)}%"`)
            if (counter > correct.length / 2) document.getElementById("points").style.setProperty("--color", "white")
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
                <div className="alert alert-primary d-flex align-items-center" role="alert">
                    <i className="fas fa-exclamation"></i>
                    <span>Test sprawdzający wiedzę z animacji w CSS3.</span>
                </div>
                {
                    question.map(check => {
                        return (
                            check.questions.map((quest, key) => {
                                quest = check.questions[randQuestions[key]]
                                return (
                                    <Form.Group key={`${check.id}-${key}`}>
                                        <Form.Label>{`${key + 1}. ${quest.question}`}</Form.Label>
                                        {[1, 2, 3].map((el, counter) => {
                                            return (
                                                <Form.Check
                                                    key={el}
                                                    type="radio"
                                                    label={quest[`answer${randAnswers[counter]}`]}
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
                <div id="points">{`${points} / ${correct.length}`}
                    <div style={{ width: `${Math.round(points / correct.length * 100)}%`, filter: `hue-rotate(${Math.round(points / correct.length * 180)}deg)` }}></div> 
                </div>
                <Button variant="success" id="answers" onClick={takeAnswers}>Sprawdź odpowiedzi</Button>
            </Form>
        </motion.div>
    )
}
