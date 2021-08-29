import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants, btnAnimation } from '../../js/pageAnimation'
import './main.css'
import '../../css/galery.css'
import { NavLink } from 'react-router-dom'

export default function Example0() {
    const counter = useRef(0)

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
                onClick={() => (counter.current < 99) ? document.querySelector(".circle").innerHTML = ++counter.current : document.querySelector(".circle").innerHTML = "99+"}
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
            <NavLink to="/galery"><motion.div 
            whileTap={{ scale: 0.9 }} 
            whileHover={{ scale: 1.2 }}
            transition={btnAnimation}
            className="prevPageGalery"
            ><i className="fas fa-angle-double-left"></i></motion.div></NavLink>
            <NavLink to="/example1"><motion.div 
            whileTap={{ scale: 0.9 }} 
            whileHover={{ scale: 1.2 }}
            transition={btnAnimation}
            className="nextPageGalery"><i className="fas fa-angle-double-right"></i></motion.div></NavLink>
        </motion.div>
    )
}