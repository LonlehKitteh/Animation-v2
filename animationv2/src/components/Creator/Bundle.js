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
    const buttons = ['translateX', 'translateY', 'translateZ', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY', 'rotateX', 'rotateY', 'rotateZ', 'perspective']
    const transforms = ['translateX(50%)', 'translateY(50%)', 'perspective(100px) translateZ(-40px)', 'scaleX(0.7)', 'scaleY(0.5)', 'perspective(100px) scaleZ(0.5) translateZ(30px)', 'skewX(30deg)', 'skewY(-15deg)', 'perspective(100px) rotateX(65deg)', 'perspective(100px) rotateY(65deg)', 'perspective(300px) rotateZ(45deg)', 'perspective(100px)']
    const icons = ['fas fa-arrows-alt-h', "fas fa-arrows-alt-v", "fas fa-level-up-alt", "fas fa-expand-arrows-alt", "fas fa-expand-arrows-alt", "fas fa-retweet", "fas fa-retweet", "fas fa-undo-alt", "fas fa-undo-alt", "fas fa-undo-alt", "fas fa-box-open"]
    const pickStep = e => {
        props.element.text = e
        props.element.ref = ref.current

        if (buttons.includes(e)) {
            props.element.token = 1
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
        setShow(true)
        setRangeValue(0)
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
        const value = props.element.value.substring(1, props.element.value.length - 2)
        return buttons.map((element, key) => element === props.element.text ? <div className='about-step' key={key}>{element} <i className={`${icons[key]} m-2`}></i>{value}</div> : null)
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
                                buttons.map((element, key) => {
                                    return <motion.div key={key} style={{ filter: `hue-rotate(${key * 10}deg)` }} className="modal-element" whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.15, opacity: 0.9 }} transition={btnAnimation}>
                                        <div className="modal-child">
                                            <div className='cube'>
                                                <div className='content-cube'></div>
                                            </div>
                                            <div className='text'>{element}</div>
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
                            min={props.element.text.match(/translate/) ? -100 : props.element.text.match(/scale/) ? -1 : props.element.text.match(/skew/) ? -90 : -360}
                            max={props.element.text.match(/translate/) ? 100 : props.element.text.match(/scale/) ? 1 : props.element.text.match(/skew/) ? 90 : 360}
                            value={rangeValue}
                            step={props.element.text.match(/scale/) ? 0.01 : null}
                            onChange={e => setRangeValue(e.target.value)} />
                    </div>
                    <span className="number">{rangeValue}</span>
                    {props.children}
                </div>
            </> :
                <div className='control-btn' style={{ justifyContent: 'flex-end' }}>
                    {handleDisplay()}
                    <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.15 }} transition={btnAnimation}>
                        <Button variant="secondary" onClick={() => handleEdit()}><i className="fas fa-pen"></i></Button>
                    </motion.div>

                    {props.children}
                </div>}

            <div className='background' style={{ filter: `hue-rotate(${props.counter * 20}deg)` }}></div>
        </div>
    );
}
export default Bundle