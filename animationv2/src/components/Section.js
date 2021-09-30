import React, { useRef, useState } from 'react'
import '../css/section.css'
import { transforms } from '../js/data/datatransform'
import { animations } from '../js/data/dataanimation'
import copy from 'copy-to-clipboard'
import { motion } from 'framer-motion'
import { Button } from 'react-bootstrap'

export default function Section(props) {
    const divRef = useRef(null)
    const [isDisabled, setIsDisabled] = useState(false)

    function code() {
        return <div className="css-lan">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8, backgroundColor: '#00ff62' }} onClick={() => copy(props.copy)} className="copy-btn"><i className="fas fa-copy"></i></motion.div>
            <pre>
                <code className="css" dangerouslySetInnerHTML={{ __html: props.code }}></code>
            </pre>
        </div>
    }

    function clickHandler(e) {
        e.preventDefault()
        setIsDisabled(prev => !prev)
        divRef.current.style.animationPlayState = (isDisabled) ? 'paused' : 'running' 
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
                        {[54, 55, 56, 57, 58].includes(props.counter) ? <div className="mysterious-btn"><Button disabled={isDisabled} variant="success" onClick={clickHandler} size="lg">Animate!<i className="fas fa-play"></i></Button></div> : null}
                        <h2>{(animations[props.counter - 4] !== undefined) ? `${animations[props.counter - 4].value};` : "in progress..."}</h2>
                        <div className={([22, 23, 54, 55, 56, 57].includes(props.counter)) ? 'css-track-color' : 'css-track-animation'}>
                            <div ref={divRef} style={animations[props.counter - 4]} className={(props.counter === 64) ? 'paused' : (props.counter === 65) ? 'running' : null}></div>
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
