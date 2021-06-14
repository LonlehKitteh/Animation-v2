import React from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../js/pageAnimation'
import '../css/galery.css'
import { NavLink } from "react-router-dom"
import { btnAnimation } from '../js/pageAnimation'

export default function Galery() {
    var links = Array(128).fill("Przykład")

    return (
        <>
            <motion.div layout
                className="page"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                <div className="gridGalery">
                    {links.map((el, counter) => {
                        return (
                            <motion.div style={{ filter: `hue-rotate(${counter * 10}deg)` }}
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.05, filter: `hue-rotate(${counter * 10 + 20}deg)` }}
                                transition={btnAnimation}
                                key={counter}
                            >
                                <NavLink to={`/example${counter}`} className="link">
                                    <i className="fas fa-image"></i>
                                    <span>
                                        {`${el} - ${counter + 1}`}
                                    </span>
                                </NavLink>
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>
        </>
    )
}
