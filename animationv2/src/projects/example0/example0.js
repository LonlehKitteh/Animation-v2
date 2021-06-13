import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../../js/pageAnimation'
import './main.css'

export default function Example0() {
    useEffect(() => {
        document.querySelector(".flex").addEventListener("click", () => {
            if (document.querySelector(".circle").innerHTML < 99) {
                document.querySelector(".circle").innerHTML++
            } else {
                document.querySelector(".circle").innerHTML = "99+"
            }
        }, [])
    })

    return (
        <motion.div layout
            className="page example1"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <motion.div className="flex"
                whileTap={{ scale: 0.9 }}
            >
                <div className="main-letter">
                    <div className="right-triangle"></div>
                    <div className="left-triangle"></div>
                    <div className="letter-down">
                        <div className="border"></div>
                        <div id="text" className="text1"></div>
                        <div id="text" className="text2"></div>
                        <div className="circle-text"></div>
                    </div>
                    <div className="circle">0</div>
                </div>
                <div className="shadowBox"></div>
            </motion.div>
        </motion.div>
    )
}