import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../js/pageAnimation'
import { Form, Button } from 'react-bootstrap'
import { useCorrect } from './hooks/useCorrect'
import { useQuestion } from './hooks/useQuestion'
import '../css/test.css'
import { useUser } from './hooks/useUser'
import app from '../firebase'
import { useAuth } from './context/AuthContext'

export default function TestCss() {
    const { currentUser } = useAuth()
    const question = useQuestion()
    const correct = useCorrect()
    const points = useRef(0);
    const valueRef = useRef(null);
    const [randQuestions,] = useState(shuffle([...Array(10).keys()]))
    const inputs = useRef([])
    const [isDisabled, setIsDisabled] = useState(false)
    const circularProgressRef = useRef(null)
    const users = useUser()

    useEffect(() => {
        handleAnimation(points.current / correct.length * 100)
    }, [isDisabled, correct.length])


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
        let temp = []
        correct.map(element => temp.push(element.value))
        points.current = inputs.current.filter(element => temp.includes(element.answer)).length
        setIsDisabled(true)

        const foundUser = users.find(data => data.user === currentUser.uid)

        if (foundUser) {
            app.firestore().collection("usersData").doc(foundUser.id).update({ pointsCSS: Math.max(points.current / correct.length * 100, foundUser.pointsCSS) });
            return;
        }

        app.firestore().collection("usersData").add({ pointsCSS: points.current / correct.length * 100, user: currentUser.uid });
    }

    function handleChange(e, key, answer) {
        var found = inputs.current.find(object => Object.values(object)[0] === key)
        if (found) {
            found.target = e.target
            found.answer = answer
            return
        }

        inputs.current = [...inputs.current, { key: key, target: e.target, answer: answer }];
    }

    function handleAnimation(points) {
        let speed = 50;
        let progressValue = 0;
        let color = '#4d5bf9'
        if (valueRef.current === null) return
        let progress = setInterval(() => {
            if (progressValue !== points) progressValue++;
            valueRef.current.innerHTML = `${progressValue}%`;
            circularProgressRef.current.style.background = `conic-gradient(${color} ${progressValue * 3.6}deg, ${color}40 ${progressValue * 3.6}deg)`
            circularProgressRef.current.style.filter = `hue-rotate(${progressValue * 3.6}deg)`
            if (progressValue === points) clearInterval(progress)
        }, speed)
    }
    return (
        <motion.div
            className={`page test ${isDisabled ? 'score' : ''}`}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {
                !isDisabled ? <div className='push'>
                    <Form className="form">
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
                                                {shuffle([1, 2, 3]).map((el, counter) => {
                                                    return (
                                                        <Form.Check
                                                            key={el}
                                                            type="radio"
                                                            label={quest[`answer${el}`]}
                                                            name={`formHorizontalRadios${key + 1}`}
                                                            id={`formHorizontalRadios${key + 1}-${counter + 1}`}
                                                            onChange={e => handleChange(e, key + 1, quest[`answer${el}`])}
                                                        />
                                                    )
                                                })}
                                            </Form.Group>
                                        )
                                    })
                                )
                            })
                        }
                        <Button variant="success" id="answers" onClick={takeAnswers}>Sprawdź odpowiedzi</Button>
                    </Form>
                </div> :
                    <div className="push">
                        <div className="container">
                            <div className="circular-progress" ref={circularProgressRef}>
                                <div className="value-container" ref={valueRef}></div>
                            </div>
                        </div>
                    </div>
            }
        </motion.div>
    )
}
