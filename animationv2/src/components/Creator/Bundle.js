import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { btnAnimation } from '../../js/pageAnimation';
// import Range from './inputs/Range';

export default function Bundle(props) {
    const [isSaved, setIsSaved] = useState(false)
    const [show, setShow] = useState(true)

    const handleClick = e => {
        props.element.text = e.target.innerHTML
        setShow(false)
    }

    return (
        <motion.div className='bundle'
            animate={{
                scale: [0, 1],
                borderRadius: ["50%", "10%"]
            }}
            transition={btnAnimation}
        >
            <h1>Step: {props.element.id}</h1>

            {!isSaved ? <>
                <Modal
                    size="lg"
                    show={show}
                    onHide={() => setShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header>
                        <Modal.Title id="example-modal-sizes-title-lg" className='flex'>
                            <div>You can take whatever you what</div> <div className="arm"></div>
                        </Modal.Title>
                        <button type="button" className="btn-close" aria-label="Close" onClick={() => setShow(false)}></button>
                    </Modal.Header>
                    <Modal.Body>
                        <Button variant="primary" onClick={(e) => handleClick(e)}>translateX</Button>
                        <Button variant="primary" onClick={(e) => handleClick(e)}>test</Button>
                    </Modal.Body>
                </Modal>
                <div className='control-btn'>
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.15 }}
                        transition={btnAnimation}>
                        <Button variant="success" onClick={() => setIsSaved(true)}><i className="fas fa-check"></i></Button>
                    </motion.div>
                    {!show ?
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.15 }}
                            transition={btnAnimation}>
                            <Button variant="warning" onClick={() => {
                                setShow(true)
                            }}><i className="fas fa-undo"></i></Button>
                        </motion.div>
                        : null}
                    <div style={{ flexGrow: 1 }}></div>
                    {props.children}
                </div>
            </> :
                <div className='control-btn' style={{ justifyContent: 'flex-end' }}>
                    <div className="about-step">{props.element.text}</div>
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.15 }}
                        transition={btnAnimation}>
                        <Button variant="secondary" onClick={() => setIsSaved(false)}><i className="fas fa-pen"></i></Button>
                    </motion.div>
                    {props.children}
                </div>}

            <div className='background' style={{ filter: `hue-rotate(${props.counter * 20}deg)` }}></div>
        </motion.div>
    );
}