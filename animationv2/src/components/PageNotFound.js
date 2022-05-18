import React from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../js/pageAnimation'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <motion.div layout
            className="page notFound"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className='main-text'>Page not found</div>
            <div className='empty'></div>
            <div className='return'>
                <span>Please check the url address or use the links below</span>
                <div>
                    <Link to='/'>Home</Link> / <Link to='/begin'>Begin</Link> / <Link to="/signup">Sign up</Link>
                </div>
            </div>
            <div className="slices">
                <div className="slice1"></div>
                <div className="slice2"></div>
                <div className="slice3"></div>
                <div className="slice4"></div>
            </div>
        </motion.div >
    )
}