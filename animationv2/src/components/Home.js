import React, { useRef, useEffect } from 'react'
import '../css/home.css'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../js/pageAnimation'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Typed from 'typed.js'

export default function Home() {
    const el = useRef(null)
    const typed = useRef(null)
    const options = {
        strings: [
            '',
            'Welcome to space',
            'Enjoy some nothingness',
            'Not really',
            'Welcome to Aniamtion tuto',
            'Welcome to Animation tutorial'
        ],
        typeSpeed: 50,
        backSpeed: 50
    }

    useEffect(() => {
        typed.current = new Typed(el.current, options)
        return () => {
            typed.current.destroy()
        }
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
            >
                <div className="typed">
                    <div ref={el}></div><div className="typed-cursor"></div>
                </div>

                <Link to="/begin"><Button variant="success">Get Started</Button></Link>

                <motion.div
                    drag
                    animate={{ scale: 0.8, x: -700, y: -250 }}
                    initial={{ scale: 1, x: 0, y: 0 }}
                    transition={{
                        delay: 0.1,
                        duration: 100,
                        ease: 'linear'
                    }}
                    className="jupiter"
                >
                </motion.div>
                <motion.div
                    drag
                    animate={{ scale: 0.5, x: 200, y: -800 }}
                    initial={{ scale: 1, x: 0, y: 0 }}
                    transition={{
                        delay: 0.1,
                        duration: 100,
                        ease: 'linear'
                    }}
                    className="neptune"
                >
                </motion.div>
                <motion.div
                    drag
                    animate={{ scale: 1.1, x: 500, y: -300 }}
                    initial={{ scale: 1, x: 0, y: 0 }}
                    transition={{
                        delay: 0.1,
                        duration: 100,
                        ease: 'linear'
                    }}
                    className="earth"
                >
                </motion.div>
                <motion.div
                    drag
                    animate={{ scale: 0.9, x: 200, y: 300 }}
                    initial={{ scale: 1, x: 0, y: 0 }}
                    transition={{
                        delay: 0.1,
                        duration: 100,
                        ease: 'linear'
                    }}
                    className="mars"
                >
                </motion.div>
            </motion.div>
        </>
    )
}