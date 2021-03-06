import React, { useState, useRef, useEffect } from 'react'
import '../css/section.css'
import { transforms } from '../js/data/datatransform'
import { animations } from '../js/data/dataanimation'
import copy from 'copy-to-clipboard'
import { motion } from 'framer-motion'
import { messages } from '../js/data/message'
import { Shake } from 'reshake'
import Cube from './Cube'

const Section = props => {
    const ref = useRef(null)
    const [isDisabled, setIsDisabled] = useState(false)
    const [messageCounter, setMessageCounter] = useState(0)
    const messageRef = useRef(null)
    var start = Date.now()
    var timeoutHandler

    useEffect(() => {
        if (!props.sections.current.includes(ref)) props.sections.current = [...props.sections.current, ref]
    })

    function code() {
        return <div className="css-lan">
            <div className="copy">
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8, backgroundColor: '#00ff62' }}
                    onClick={CopyHandlerClick}
                    className="copy-btn"
                >
                    <i className="fas fa-copy"></i>
                </motion.div>
                <div ref={messageRef} className='copy-message'>
                    {messageCounter >= 9 ? <Shake h={15} v={15} r={5} int={1} max={100} fixed={true}><span className="bolder">{messages[messageCounter]}</span></Shake> : <span>{messages[messageCounter]}</span>}
                </div>
            </div>

            {(![63, 64, 65].includes(props.counter) && props.picturedAnimation) ? <>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mysterious-btn" onClick={() => setIsDisabled(prev => !prev)}
                    style={{ backgroundColor: isDisabled ? '#ff2600' : '#00ff4c' }}
                >
                    <i className={`fas ${isDisabled ? 'fa-pause' : 'fa-play'}`}></i>
                </motion.div>
                <div className="mysterious-text">Press me!</div>
            </> : null}
            <pre>
                <code className="css" dangerouslySetInnerHTML={{ __html: props.code }}></code>
            </pre>
        </div>
    }
    function CopyHandlerClick() {
        let now = Date.now()
        copy(props.copy)

        messageRef.current.style.opacity = 1

        if (now - start < 1500 && now - start > 800) {
            setMessageCounter(prev => prev + 1 < messages.length ? prev + 1 : prev)
            if (messageCounter > 1) messageRef.current.classList.add('bold')
            if (messageCounter >= 8) messageRef.current.classList.add('bolder')
            setTimeout(() => {
                messageRef.current.style.opacity = 0
            }, 600)
        } else if (now - start > 1500) {
            setMessageCounter(0)
            messageRef.current.className = 'copy-message'
            setTimeout(() => {
                messageRef.current.style.opacity = 0
            }, 600)
        } else {
            messageRef.current.style.opacity = 1
            clearTimeout(timeoutHandler)
            timeoutHandler = setTimeout(() => {
                messageRef.current.style.opacity = 0
            }, 600)
        }
        start = Date.now()
    }

    return (
        <div className="section" id={props.id} ref={ref}>
            <h1>{props.header}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
            {
                (props.beginCube) ? <Cube></Cube> :
                (props.picturedTransform) ? <>
                    <div className="pictured">
                        <h2>{`${transforms[props.counter].value || ''};`}</h2>
                        {
                            (props.perspectivePicture) ?
                                <div className="flex">
                                    <div className="parent" style={transforms[props.counter]}>{(props.isChildNeed) ? "div.parent" : <span>div</span>}
                                        {(props.isChildNeed) ? <div className="child" style={(transforms[props.counter] !== undefined) ? transforms[props.counter].child : null}>div.child</div> : null}
                                    </div>
                                </div> :
                                <div className="css-example-block">
                                    <span className="x-dimention"></span>
                                    <span className="y-dimention"></span>
                                    <div className="example-main">
                                        <div className="border-example">
                                            <div className="content-example" style={transforms[props.counter]}>div</div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                    {
                        code()
                    }
                </> : (props.picturedAnimation) ? <>
                    <div className="pictured">
                        <h2>{`${animations[props.counter - 4].value || ""};`}</h2>
                        <div className={([22, 23, 54, 55, 56, 57].includes(props.counter)) ? 'css-track-color' : 'css-track-animation'}>
                            {![63, 64, 65].includes(props.counter) ?
                                <div style={{ ...animations[props.counter - 4], animationPlayState: (!isDisabled) ? 'paused' : 'running' }} /> :
                                <div style={{ ...animations[props.counter - 4] }} className={(props.counter === 64) ? 'paused' : (props.counter === 65) ? 'running' : null} />
                            }
                        </div>
                    </div>
                    {
                        code()
                    }
                </>
                    : (props.juxtaposition) ?
                        ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'steps(10)', 'cubic-bezier(0.19, 1, 0.22, 1)'].map((element, key) => {
                            return <div key={key} className="juxtaposition">
                                <p>{element}</p>
                                <div className='css-track-animation'>
                                    <div style={{ animationTimingFunction: element, animationName: 'move2' }}></div>
                                </div>
                            </div>
                        })
                        : null
            }
        </div>
    )
}

export default Section;