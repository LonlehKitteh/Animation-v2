import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../js/pageAnimation'
import { Button, Form } from 'react-bootstrap'
import 'firebase/database'
import { shuffle, dataTestCss } from '../js/test'

export default function TestCss() {
    const [solution, setSolution] = useState([])

    useEffect(() => {
        setSolution(dataTestCss())
    }, [])

    console.log(dataTestCss())
    var answers = dataTestCss()
    var ranNums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    return (
        <motion.div
            layout
            className="page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <Form>
                {
                    answers.map((el, counter) => {
                        el = answers[ranNums[counter] - 1]
                        let ranAnswers = shuffle([0, 1, 2])
                        return (
                            <Form.Group key={counter}>
                                <Form.Label>{`${counter + 1}. ${el.pop()}`}</Form.Label>
                                {ranAnswers.map((answer, key) => {
                                    return (
                                        <Form.Check
                                            key={`${counter}-${key}`}
                                            type="radio"
                                            label={el[answer]}
                                            name="formHorizontalRadios"
                                            id={`formHorizontalRadios${key + 1}`}
                                        />
                                    )
                                })}
                            </Form.Group>
                        )
                    })
                }
                <Button>Sprawdź odpowiedzi</Button>
            </Form>
        </motion.div>
    )
}
