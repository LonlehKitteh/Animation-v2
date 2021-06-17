import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../js/pageAnimation'
import { Button, Form } from 'react-bootstrap'
import Question from './Question'

export default function TestCss() {

    
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
                <Question />
                {/* {
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
                } */}
                <Button>Sprawdź odpowiedzi</Button>
            </Form>
        </motion.div>
    )
}
