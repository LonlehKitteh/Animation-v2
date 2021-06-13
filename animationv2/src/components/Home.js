import React from 'react'
import '../css/home.css'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../js/pageAnimation'

export default function Home() {

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
                <div className="svg-animation"></div>
            </motion.div>
        </>
    )
}