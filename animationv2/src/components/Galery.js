import React from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../js/pageAnimation'
import '../css/galery.css'
import { NavLink } from "react-router-dom"
import { Button } from 'react-bootstrap'

export default function Galery() {
    var links = Array(16).fill("example")

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
                        return <NavLink key={counter} to={`/${el}${counter}`}><Button>{el + counter}</Button></NavLink>
                    })}
                </div>
            </motion.div>
        </>
    )
}
