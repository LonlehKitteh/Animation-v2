import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../js/pageAnimation'

export default function Keyframes() {
    return (
        <motion.div layout
            className="page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="push">
                <div className="main">
                    test
                </div>
            </div>
        </motion.div>
    )
}
