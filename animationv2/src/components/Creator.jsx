import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../js/pageAnimation'
import { Button } from 'react-bootstrap'
import { btnAnimation } from '../js/pageAnimation'
import Bundle from './Creator/Bundle'

const Creator = () => {
    const [todos, setTodos] = useState([]);
    const [counter, setCounter] = useState(1);
    const [isDisabled, setIsDisabled] = useState(false)
    const cubeRef = useRef(null)

    const handleClick = () => {
        setTodos([...todos, { id: counter, value: 0, text: '', saved: false, deleted: false, token: 0 }])
        setCounter(counter + 1)
    }

    const handleDelete = element => {
        element.deleted = true
        setTimeout(() => {
            element.ref.style.display = 'none'
        }, 300)
        todos.filter(entity => entity.id > element.id && !entity.deleted ? entity.id -= 1 : entity.id)
        setCounter(todos.filter(entity => entity.deleted === false).length + 1)
        setIsDisabled(false)
        if (todos.filter(entity => entity.deleted === true).length === todos.length) setTodos([])
    }

    const handleStart = () => {
        if (todos.find(element => !element.saved && !element.deleted)) {
            let unSaved = todos.filter(element => element.saved === false)
            unSaved.map(entity => entity.ref.children[2].classList.add('unSaved'))
            setIsDisabled(false)
        } else if (todos.length === 0) {
            setIsDisabled(false)
        } else {
            setIsDisabled(prev => !prev)

            if (!isDisabled) {
                const configuration = todos.map(element => element.token === 1 ? [element.text, element.value] : 'not yet implemented...')
                cubeRef.current.style.setProperty('--transform', configuration.flat().join(''))
            }

        }
    }

    return (
        <motion.div layout
            className="page creator"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="push">
                <div className="title">
                    Animate!
                </div>
                <div className="animation-field">
                    <div className="animation-item" ref={cubeRef} style={{ animationPlayState: (!isDisabled) ? 'paused' : 'running' }}></div>
                </div>
                <div className='control-panel'>
                    <div className='options'>
                        <div style={{ flexGrow: 1 }}>
                            <motion.div
                                style={{ display: 'inline-block' }}
                                className="m-3"
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.05, zIndex: 99 }}
                                transition={btnAnimation}
                                onClick={handleClick}
                            >
                                <Button variant="primary">Add animation <i className="fas fa-plus-circle"></i></Button>
                            </motion.div>
                        </div>
                        <div className="mysterious-text">Press me!</div>
                        <div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="mysterious-btn" onClick={() => handleStart()}
                                style={{ backgroundColor: isDisabled ? '#ff2600' : '#00ff4c' }}
                            >
                                <i className={`fas ${isDisabled ? 'fa-pause' : 'fa-play'}`}></i>
                            </motion.div>
                        </div>
                    </div>
                    <div className='program'>
                        {todos.map((el, key) =>
                            <motion.div animate={{ scale: el.deleted ? [1, 0] : [0, 1], borderRadius: ["50%", "10%"] }} transition={btnAnimation} key={key}>
                                <Bundle counter={el.id} element={el} isDisabled={setIsDisabled}>
                                    <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }} transition={btnAnimation}>
                                        <Button variant="danger" onClick={() => handleDelete(el)}><i className="fas fa-times"></i></Button>
                                    </motion.div>
                                </Bundle>
                            </motion.div>
                        )}

                    </div>
                    <div className='code'>
                        code
                    </div>
                </div>
            </div>
        </motion.div>

    )
}

export default Creator