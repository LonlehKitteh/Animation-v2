import React, { useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { btnAnimation } from '../../js/pageAnimation';

const Bundle = ({ isDisabled, ...props }) => {
    const ref = useRef(null)
    const [isSaved, setIsSaved] = useState(false)
    const [show, setShow] = useState(true)
    const [rangeValue, setRangeValue] = useState(0)
    const buttons = ['translateX', 'translateY', 'translateZ', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY', 'rotateX', 'rotateY', 'rotateZ', 'perspective']

    const pickStep = e => {
        props.element.text = e
        props.element.ref = ref.current

        if (buttons.includes(e)) {
            props.element.token = 1
        }

        setShow(false)
    }

    const handleSave = () => {
        props.element.text.match(/translate/) ? props.element.value = `(${rangeValue}%) ` : props.element.text.match(/perspe/) ? props.element.value = `(${rangeValue}px) ` : props.element.text.match(/scale/) ? props.element.value = `(${rangeValue}) ` : props.element.value = `(${rangeValue}deg) `
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
        setShow(false)
    }

    const handleEnter = (e, key) => {
        const transforms = ['translateX(50%)', 'translateY(50%)', 'perspective(100px) translateZ(20%)', 'scaleX(0.7)', 'scaleY(0.5)', 'perspective(100px) scaleZ(0.5) translateZ(50%)', 'skewX(30deg)', 'skewY(-30deg)', 'perspective(100px) rotateX(65deg)', 'perspective(100px) rotateY(65deg)', 'perspective(300px) rotateZ(45deg)', 'perspective(100px)']
        // e.target.children[0].firstChild.style.transform = transforms[key]
    }

    const handleLeave = e => {
        // e.target.children[0].firstChild.style.transform = 'none'
    }

    const handleChoseModal = e => {
        if(e.target.parentElement.classList.value === 'modal-element' || e.target.classList.value === 'modal-element' || e.target.parentElement.parentElement.classList.value === 'modal-element'){
            e.target.parentElement.parentElement.classList.value === 'modal-element' ? pickStep(e.target.parentElement.parentElement.innerText) : pickStep(e.target.innerText)
        }
    }

    return (
        <div className='bundle' id={props.element.id} ref={ref}>
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
                                    return <motion.div style={{ filter: `hue-rotate(${key * 10}deg)` }} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.15 }} transition={btnAnimation} className="modal-element" key={key} onClick={e => handleChoseModal(e)} onMouseEnter={(e) => handleEnter(e, key)} onMouseLeave={e => handleLeave(e)}>
                                        <div className='cube'>
                                            <div className='content-cube'></div>
                                        </div>
                                        <div className='text'>{element}</div>
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
                    {!show ?
                        <>
                            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.15 }} transition={btnAnimation}>
                                <Button variant="warning" onClick={() => handleUndo()}><i className="fas fa-undo"></i></Button>
                            </motion.div>

                            <div className="flex" style={{ flexGrow: 1, position: 'relative' }}>
                                <div className="about-step">{props.element.text}</div>
                                <input
                                    className="customRange"
                                    type="range"
                                    min={['translateX', 'translateY', 'translateZ'].includes(props.element.text) ? -100 : ['scaleX', 'scaleY', 'scaleZ'].includes(props.element.text) ? -1 : -360}
                                    max={['translateX', 'translateY', 'translateZ'].includes(props.element.text) ? 100 : ['scaleX', 'scaleY', 'scaleZ'].includes(props.element.text) ? 1 : 360}
                                    value={rangeValue}
                                    step={['scaleX', 'scaleY', 'scaleZ'].includes(props.element.text) ? 0.01 : null}
                                    onChange={e => setRangeValue(e.target.value)} />
                                <span className="number">{rangeValue}</span>
                            </div>
                        </>
                        : null}
                    {props.children}
                </div>
            </> :
                <div className='control-btn' style={{ justifyContent: 'flex-end' }}>
                    {props.element.text === "translateX" ? <div className="about-step">X <i className="fas fa-arrows-alt-h"></i> {rangeValue}%</div>
                        :
                        props.element.text === "translateY" ? <div className="about-step">Y <i className="fas fa-arrows-alt-v"></i> {rangeValue}%</div> : null}

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