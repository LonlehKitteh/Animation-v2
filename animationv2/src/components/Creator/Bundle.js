import React, { useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { btnAnimation } from '../../js/pageAnimation';

const Bundle = ({ isDisabled, setCounter, ...props }) => {
    const ref = useRef(null)
    const [isSaved, setIsSaved] = useState(false)
    const [show, setShow] = useState(true)
    const [closed, setClosed] = useState(false)
    const [rangeValue, setRangeValue] = useState(0)
    const transforms = ['translateX(50%)', 'translateY(50%)', 'perspective(100px) translateZ(-40px)', 'scaleX(0.7)', 'scaleY(0.5)', 'perspective(100px) scaleZ(0.5) translateZ(30px)', 'skewX(30deg)', 'skewY(-15deg)', 'perspective(100px) rotateX(65deg)', 'perspective(100px) rotateY(65deg)', 'perspective(300px) rotateZ(45deg)', 'perspective(100px)']

    const buttonsAndIcons = [
        { name: 'translateX', icon: 'fas fa-arrows-alt-h' },
        { name: 'translateY', icon: "fas fa-arrows-alt-v" },
        { name: 'translateZ', icon: "fas fa-level-up-alt" },
        { name: 'scaleX', icon: "fas fa-expand-arrows-alt" },
        { name: 'scaleZ', icon: "fas fa-expand-arrows-alt" },
        { name: 'skewX', icon: "fas fa-retweet" },
        { name: 'skewY', icon: "fas fa-retweet" },
        { name: 'rotateX', icon: "fas fa-undo-alt" },
        { name: 'rotateY', icon: "fas fa-undo-alt" },
        { name: 'rotateZ', icon: "fas fa-undo-alt" },
        { name: 'perspective', icon: "fas fa-box-open" },
        { name: 'transform-origin', icon: "" },
        { name: 'backface-visibility', icon: "fas fa-eye" }
    ]

    const pickStep = e => {
        props.element.text = e
        props.element.ref = ref.current
        props.element.text !== 'transform-origin' && props.element.text !== 'backface-visibility' ? props.element.token = 1 : props.element.token = 2
        if (e === 'backface-visibility') {
            props.element.saved = true
            setIsSaved(true)
        }

        setShow(false)
    }

    const handleSave = () => {
        (props.element.text.match(/translate/) || props.element.text.match(/perspe/)) ? props.element.value = `(${rangeValue}px) ` : props.element.text.match(/scale/) ? props.element.value = `(${rangeValue}) ` : props.element.value = `(${rangeValue}deg) `
        props.element.saved = true
        ref.current.children[2].classList.remove('unSaved')
        setIsSaved(true)
    }

    const handleEdit = () => {
        props.element.saved = false
        isDisabled(false)
        setIsSaved(false)
    }

    const handleUndo = () => {
        if (props.element.text === 'backface-visibility') setIsSaved(false)
        setShow(true)
        setRangeValue(0)
        props.element.text = ''
        ref.current.children[2].classList.remove('unSaved')
    }

    const handleClose = () => {
        props.element.deleted = true
        setCounter(prev => prev - 1)
        setClosed(true)
        setShow(false)
    }

    const handleEnter = (e, key) => e.target.previousSibling.firstChild.firstChild.style.transform = transforms[key]
    const handleLeave = e => e.target.previousSibling.firstChild.firstChild.style.transform = 'none'
    const handleChoseModal = e => pickStep(e.target.parentElement.innerText)

    function handleDisplay() {
        return props.element.text !== 'backface-visibility' ? buttonsAndIcons.map((element, key) => element.name === props.element.text ? <div className='about-step' key={key}>{element.name} <i className={`${element.icon} m-2`}></i>{props.element.value.substring(1, props.element.value.length - 2)}</div> : null) : <div className='about-step'>{buttonsAndIcons[12].name}<i className={`${buttonsAndIcons[12].icon} m-2`}></i>visible</div>
    }

    return (
        <div className='bundle' id={props.element.id} ref={ref} style={{ display: closed ? 'none' : 'block' }}>
            <h1>Step: {props.element.id}</h1>

            {!isSaved ? <>
                <Modal
                    size="lg"
                    show={show}
                    onHide={handleClose}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header>
                        <Modal.Title id="example-modal-sizes-title-lg" className='flex'>
                            <div>You can take whatever you what</div> <div className="arm"></div>
                        </Modal.Title>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='modal-group'>
                            {
                                buttonsAndIcons.map((element, key) => {
                                    return <motion.div key={key} style={{ filter: `hue-rotate(${key * 10}deg)` }} className="modal-element" whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.15, opacity: 0.9 }} transition={btnAnimation}>
                                        <div className="modal-child">
                                            <div className='cube'>
                                                <div className='content-cube'></div>
                                            </div>
                                            <div className='text'>{element.name}</div>
                                        </div>
                                        <div
                                            className='event-area'
                                            onClick={e => handleChoseModal(e)}
                                            onMouseEnter={e => handleEnter(e, key)}
                                            onMouseLeave={e => handleLeave(e)}
                                        >
                                        </div>
                                    </motion.div>
                                })
                            }
                        </div>
                    </Modal.Body>
                </Modal>
                <div className='control-btn'>
                    {props.element.text !== '' ? <>
                        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.15 }} transition={btnAnimation}>
                            <Button variant="success" onClick={() => handleSave()}><i className="fas fa-check"></i></Button>
                        </motion.div>

                        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.15 }} transition={btnAnimation}>
                            <Button variant="warning" onClick={() => handleUndo()}><i className="fas fa-undo"></i></Button>
                        </motion.div>

                        <div className="rangeValue">
                            <div className="about-step">{props.element.text}</div>
                            <input
                                className="customRange"
                                type="range"
                                min={props.element.text.match(/translate/) ? -100 : props.element.text.match(/scale/) ? -1 : props.element.text.match(/skew/) ? -90 : props.element.text.match(/perspe/) ? -300 : -360}
                                max={props.element.text.match(/translate/) ? 100 : props.element.text.match(/scale/) ? 1 : props.element.text.match(/skew/) ? 90 : props.element.text.match(/perspe/) ? 300 : 360}
                                value={rangeValue}
                                step={props.element.text.match(/scale/) ? 0.01 : null}
                                onChange={e => setRangeValue(e.target.value)} />
                        </div>
                        <span className="number">{rangeValue}</span>
                    </> : null}
                    {props.children}
                </div>
            </> :
                <div className='control-btn' style={{ justifyContent: 'flex-end' }}>
                    {handleDisplay()}
                    {props.element.text !== 'backface-visibility' ? <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.15 }} transition={btnAnimation}>
                        <Button variant="secondary" onClick={() => handleEdit()}><i className="fas fa-pen"></i></Button>
                    </motion.div> :
                        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.15 }} transition={btnAnimation}>
                            <Button variant="warning" onClick={() => handleUndo()}><i className="fas fa-undo"></i></Button>
                        </motion.div>}
                    {props.children}
                </div>}

            <div className='background' style={{ filter: `hue-rotate(${props.counter * 20}deg)` }}></div>
        </div>
    );
}
export default Bundle