import React from 'react'
import copy from 'copy-to-clipboard'
import { motion } from 'framer-motion'

export default function SplittedSection(props) {

    function code(code, element) {
        return <div className="css-lan">
            <div className="copy">
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8, backgroundColor: '#00ff62' }}
                    className="copy-btn"
                    onClick={() => copy(element)}
                    >
                    <i className="fas fa-copy"></i>
                </motion.div>
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
                            {code(props.left.code, props.left.copy)}
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
                            {code(props.right.code, props.right.copy)}
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