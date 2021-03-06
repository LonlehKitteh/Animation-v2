import React, { useRef, useEffect } from 'react'
import '../css/home.css'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../js/pageAnimation'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Typed from 'typed.js'
import { options } from '../js/data/message'

export default function Home() {
    const el = useRef(null)
    const typed = useRef(null)
    const jupiterRef = useRef(null)
    const neptuneRef = useRef(null)
    const earthRef = useRef(null)
    const marsRef = useRef(null)
    const pageRef = useRef(null)

    useEffect(() => {
        typed.current = new Typed(el.current, options)
        return () => typed.current.destroy()
    })

    return (
        <>
            <motion.div layout
                className="page space"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                ref={pageRef}
            >
                <div className="typed">
                    <div ref={el}></div><div className="typed-cursor"></div>
                </div>

                <Link to="/begin"><Button variant="success">Get Started</Button></Link>
                <motion.div
                    drag
                    dragConstraints={pageRef}
                    animate={{ scale: 0.8, x: -window.outerWidth * 0.5, y: -window.outerHeight / 5 }}
                    initial={{ scale: 1, x: 0, y: 0 }}
                    transition={{
                        delay: 0.1,
                        duration: 100,
                        ease: 'linear'
                    }}
                    className="jupiter"
                    ref={jupiterRef}
                >
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={pageRef}
                    animate={{ scale: 0.5, x: window.outerWidth * 0.25, y: -window.outerHeight * 0.83 }}
                    initial={{ scale: 1, x: 0, y: 0 }}
                    transition={{
                        delay: 0.1,
                        duration: 100,
                        ease: 'linear'
                    }}
                    className="neptune"
                    ref={neptuneRef}
                >
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={pageRef}
                    animate={{ scale: 1.1, x: window.outerWidth * 0.25, y: -window.outerHeight * 0.4 }}
                    initial={{ scale: 1, x: 0, y: 0 }}
                    transition={{
                        delay: 0.1,
                        duration: 100,
                        ease: 'linear'
                    }}
                    className="earth"
                    ref={earthRef}
                >
                </motion.div>
                <motion.div
                    drag
                    dragConstraints={pageRef}
                    animate={{ scale: 0.9, x: window.outerWidth * 0.5, y: window.outerHeight * 0.5 }}
                    initial={{ scale: 1, x: 0, y: 0 }}
                    transition={{
                        delay: 0.1,
                        duration: 100,
                        ease: 'linear'
                    }}
                    className="mars"
                    ref={marsRef}
                >
                </motion.div>
            </motion.div>
        </>
    )
}