import React, { useState, useRef } from 'react'
import '../css/section.css'
import { transforms } from '../js/data/datatransform'
import { animations } from '../js/data/dataanimation'
import copy from 'copy-to-clipboard'
import { motion } from 'framer-motion'
import { messages } from '../js/data/message'
import { Shake } from 'reshake'

export default function Section(props) {
    const [isDisabled, setIsDisabled] = useState(false)
    const [messageCounter, setMessageCounter] = useState(0)
    const messageRef = useRef(null)
    var start = Date.now()
    var timeoutHandler

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
        <div className="section" id={props.id}>
            <h1>{props.header}</h1>
            {
                (typeof props.content === "string") ? <div dangerouslySetInnerHTML={{ __html: props.content }}></div> : <div className="flex-group">{props.children}</div>
            }
            {
                (props.picturedTransform) ? <>
                    <div className="pictured">
                        <h2>{(transforms[props.counter - 4] !== undefined) ? `${transforms[props.counter - 4].value};` : 'in progress...'}</h2>
                        {
                            (props.perspectivePicture) ?
                                <div className="flex" style={{ height: '50vh' }}>
                                    <div className="parent" style={transforms[props.counter - 4]}>{(props.isChildNeed) ? "div.parent" : <span>div</span>}
                                        {(props.isChildNeed) ? <div className="child" style={(transforms[props.counter - 4] !== undefined) ? transforms[props.counter - 4].child : null}>div.child</div> : null}
                                    </div>
                                </div> :
                                <div className="css-example-block">
                                    <span className="x-dimention"></span>
                                    <span className="y-dimention"></span>
                                    <div className="example-main">
                                        <div className="border-example">
                                            <div className="content-example" style={transforms[props.counter - 4]}>div</div>
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
                        <h2>{(animations[props.counter - 4] !== undefined) ? `${animations[props.counter - 4].value};` : "in progress..."}</h2>
                        <div className={([22, 23, 54, 55, 56, 57].includes(props.counter)) ? 'css-track-color' : 'css-track-animation'}>
                            {![63, 64, 65].includes(props.counter) ? 
                            <div style={{ ...animations[props.counter - 4], animationPlayState: (!isDisabled) ? 'paused' : 'running' }} /> : 
                            <div style={{...animations[props.counter - 4]}} className={(props.counter === 64) ? 'paused' : (props.counter === 65) ? 'running' : null} />
                            }
                        </div>
                    </div>
                    {
                        code()
                    }
                </>
                    : null
            }
        </div>
    )
}
