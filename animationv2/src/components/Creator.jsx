import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../js/pageAnimation'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { btnAnimation } from '../js/pageAnimation'

function useForceUpdate() {
    const [, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

const Creator = () => {
    // const steps = ['transformX', 'transformY', 'transformZ']
    const [todos, setTodos] = useState([]);
    const [counter, setCounter] = useState(1);
    const forceUpdate = useForceUpdate()
    const [isDisabled, setIsDisabled] = useState(false)


    const handleClick = () => {
        setTodos([...todos, { id: counter, eventKey: null }])
        setCounter(counter + 1)
    }

    function handleDelete(element) {
        const deleted = todos.filter(num => {
            if (num.id > element) {
                return num.id -= 1
            }
            return num.id !== element
        })
        setCounter(deleted.length + 1)
        setTodos(deleted)
    }

    const reRender = (element, eventKey) => {
        element.eventKey = eventKey

        forceUpdate()
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
                                <div key={key}>
                                    <h1>Step: {el.id}</h1>

                                    <DropdownButton id="dropdown-item-button" title="Dropdown button" onSelect={(eventKey) => reRender(el, eventKey)}>
                                        <Dropdown.Item as="button" eventKey="1">translateX</Dropdown.Item>
                                        <Dropdown.Item as="button" eventKey="2">translateY</Dropdown.Item>
                                    </DropdownButton>

                                    {
                                        el.eventKey === '1' ?
                                            <div>
                                                <input type="range" min="-100" max="100" defaultChecked="0" />
                                            </div>
                                            :
                                            <div>
                                                Not yet implemented
                                            </div>
                                    }

                                    <Button variant="success">save</Button>
                                    <Button variant="danger" onClick={() => handleDelete(el.id)}>delete</Button>
                                </div>
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