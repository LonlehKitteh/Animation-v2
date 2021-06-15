import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../js/pageAnimation'
import { Form } from 'react-bootstrap'
import { testcss } from '../js/test'

export default function TestCss() {
    var correctAnswersTable = []
    
    function getHash(){
        let hash = ''
        for(let i = 0;i < 8;i++){
            hash += Math.floor(Math.random() * 10)
        }
        return hash
    }
    
    function shuffle(array) {
        var i = array.length,
            j = 0,
            temp;

        while (i--) {

            j = Math.floor(Math.random() * (i + 1));

            // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;

        }

        return array;
    }
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
                    testcss.map((el, counter) => {
                        el = testcss[ranNums[counter] - 1]
                        var answers = shuffle([1, 2, 3])
                        return (
                            <Form.Group key={counter}>
                                <Form.Label>{`${counter + 1}. ${el[0]}`}</Form.Label>
                                {answers.map(element => {
                                var hash = getHash()
                                if(el[element].value) correctAnswersTable.push(hash)
                                    return (
                                        <Form.Check
                                            key={`${counter}-${element}`}
                                            type="radio"
                                            label={`${el[element].answer}`}
                                            name="formHorizontalRadios"
                                            id={`formHorizontalRadios${element}`}
                                            value={hash}
                                        />
                                    )
                                })}
                            </Form.Group>
                        )
                    })
                }
                <Button>Calculate</Button>
            </Form>
        </motion.div>
    )
}
