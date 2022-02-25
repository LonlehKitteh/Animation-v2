import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../js/pageAnimation'
import { Button } from 'react-bootstrap'
import { btnAnimation } from '../js/pageAnimation'
import Bundle from './Creator/Bundle'

const Creator = () => {

    const [todos, setTodos] = useState([]);
    const [counter, setCounter] = useState(1);
    const [isDisabled, setIsDisabled] = useState(false)

    const handleClick = () => {
        setTodos([...todos, { id: counter }])
        setCounter(counter + 1)
    }

    const handleDelete = element => {
        const deleted = todos.filter(num => {
            if (num.id > element) {
                return num.id -= 1
            }
            return num.id !== element
        })
        setCounter(deleted.length + 1)
        setTodos(deleted)
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
                    <div className="animation-item" style={{ animationPlayState: (!isDisabled) ? 'paused' : 'running' }}></div>
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
                                className="mysterious-btn" onClick={() => setIsDisabled(prev => !prev)}
                                style={{ backgroundColor: isDisabled ? '#ff2600' : '#00ff4c' }}
                            >
                                <i className={`fas ${isDisabled ? 'fa-pause' : 'fa-play'}`}></i>
                            </motion.div>
                        </div>
                    </div>
                    <div className='program'>
                        {todos.map((el, key) => {
                            return (
                                <Bundle key={key} counter={key} element={el} ><motion.div
                                    whileTap={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={btnAnimation}>
                                    <Button variant="danger" onClick={() => handleDelete(key + 1)}><i className="fas fa-times"></i></Button>
                                </motion.div>
                                </Bundle>
                            )
                        })}
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