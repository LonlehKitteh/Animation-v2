import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../js/pageAnimation'
import { Form } from 'react-bootstrap'
import Question from './questions/Question.jsx'

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
            </Form>
        </motion.div>
    )
}
