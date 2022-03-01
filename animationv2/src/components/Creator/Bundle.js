import React, { useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { btnAnimation } from '../../js/pageAnimation';
import { datatransform } from '../../js/data/transform/datatransform';

const Bundle = ({ isDisabled, ...props }) => {
    const ref = useRef(null)
    const [isSaved, setIsSaved] = useState(false)
    const [show, setShow] = useState(true)
    const [rangeValue, setRangeValue] = useState(0)

    const pickStep = e => {
        props.element.text = e.target.innerHTML
        props.element.ref = ref.current

        if (datatransform[1].content.map(element => element.endsWith('()') ? element.substring(0, element.length - 2) : element).includes(e.target.innerHTML)) {
            props.element.token = 1
        }

        setShow(false)
    }

    const handleSave = () => {
        props.element.text.match(/translate/) ? props.element.value = `(${rangeValue}%) ` : props.element.text.match(/perspe/) ? props.element.value = `(${rangeValue}px) ` : props.element.value = `(${rangeValue}deg) `
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
        ref.current.children[2].classList.remove('unSaved')
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <div className='bundle' id={props.element.id} ref={ref}>
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
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            datatransform[1].content.map((element, key) => element.endsWith('()') && key < 20 ? <Button key={key} variant="primary" onClick={(e) => pickStep(e)}>{element.substring(0, element.length - 2)}</Button> : null)
                        }
                        {/* <Button variant="primary" onClick={(e) => pickStep(e)}>translateX</Button>
                        <Button variant="primary" onClick={(e) => pickStep(e)}>translateY</Button> */}
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
                            {props.element.text === 'translateX' || props.element.text === 'translateY' ?
                                <div className="flex" style={{ flexGrow: 1, position: 'relative' }}>
                                    <div className="about-step">{props.element.text}</div>
                                    <input className="customRange" type="range" min={-100} max={100} value={rangeValue} onChange={e => setRangeValue(e.target.value)} />
                                    <span className="number">{rangeValue}</span>
                                </div>
                                : null}
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