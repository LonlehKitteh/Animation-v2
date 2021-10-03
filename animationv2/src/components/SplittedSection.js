import React, { useState, useRef } from 'react'
import copy from 'copy-to-clipboard'
import { motion } from 'framer-motion'

export default function SplittedSection(props) {
    const messages = [
        'Skopiowano!', 'Skopiowano podwójnie!', 'Skopiowano potrójnie!', 'Dzikość!!', 'Dominacja!!', 'Mega Kopia!!', 'Nie do zatrzymania!!', 'Bezwzględne szaleństwo!!', 'Potwór kopiowania!!', 'Boskość!!!', 'Niesamowita boskość!!!'
    ]
    const [messageCounter, setMessageCounter] = useState(-1)
    const messageRefLeft = useRef(null)
    const messageRefRight = useRef(null)
    var start = Date.now()
    var timeoutHandler

    function code(code, element, ref) {
        return <div className="css-lan">
            <div className="copy">
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8, backgroundColor: '#00ff62' }}
                    onClick={() => {
                        let now = Date.now()
                        copy(element)

                        ref.current.style.opacity = 1

                        if (now - start < 1700 && now - start > 800) {
                            setMessageCounter(prev => prev + 1 < messages.length ? prev + 1 : prev)
                            if (messageCounter > 1) ref.current.classList.add('bold')
                            if (messageCounter > 3) ref.current.classList.add('bolder')
                            if (messageCounter > 7) ref.current.classList.add('bolderer')
                            setTimeout(() => {
                                ref.current.style.opacity = 0
                            }, 600)
                        } else if (now - start > 1700) {
                            setMessageCounter(0)
                            ref.current.className = 'copy-message'
                            setTimeout(() => {
                                ref.current.style.opacity = 0
                            }, 600)
                        } else {
                            ref.current.style.opacity = 1
                            clearTimeout(timeoutHandler)
                            timeoutHandler = setTimeout(() => {
                                ref.current.style.opacity = 0
                            }, 600)
                        }
                        start = Date.now()
                    }}
                    className="copy-btn"
                >
                    <i className="fas fa-copy"></i>
                </motion.div>
                <div ref={ref} className='copy-message'><span>{messages[messageCounter]}</span></div>
            </div>
            <pre>
                <code className="css" dangerouslySetInnerHTML={{ __html: code }}></code>
            </pre>
        </div>
    }
    return (
        <div className="section" id={props.id}>
            <h1>{props.header}</h1>
            <div>
                <p dangerouslySetInnerHTML={{ __html: props.contentMainHeader }} />
                <div className="flex" style={{ alignItems: 'initial', marginBottom: '1rem' }}>
                    {(typeof props.left !== 'undefined') ? <div className="flex-child">
                        <h2>{props.left.header}</h2>
                        <div>
                            <p dangerouslySetInnerHTML={{ __html: props.left.textBefore }}></p>
                            {(!props.advanced) ?
                                <div className="example-flow-animation">
                                    <div></div>
                                </div> : <div id="animacja1">Hover me</div>}
                            <p dangerouslySetInnerHTML={{ __html: props.left.textAfter }}></p>
                            {code(props.left.code, props.left.copy, messageRefLeft)}
                        </div>
                    </div> : null}
                    {(typeof props.right !== 'undefined') ? <div className="flex-child">
                        <h2>{props.right.header}</h2>
                        <div>
                            <p dangerouslySetInnerHTML={{ __html: props.right.textBefore }}></p>
                            {(!props.advanced) ?
                                <div className="example-static-animation">
                                    <div></div>
                                    <div></div>
                                </div> : <div id="animacja2">Hover me</div>}
                            <p dangerouslySetInnerHTML={{ __html: props.right.textAfter }}></p>
                            {code(props.right.code, props.right.copy, messageRefRight)}
                        </div>
                    </div> : null}
                </div>
                <div dangerouslySetInnerHTML={{ __html: props.endNote }} />
            </div>
            {
                (typeof props.content === "string") ? <div dangerouslySetInnerHTML={{ __html: props.content }}></div> : <div className="flex-group">{props.children}</div>
            }
        </div>
    )
}