import React from 'react'
import Section from './Section'
import { arr } from '../js/data/databegin'
import Menu from './Menu'
import Footer from './Footer'
import '../css/begin.css'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../js/pageAnimation'

export default function Begin() {

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
                    {arr.map((el, counter) => <Section key={counter} id={`s${counter}`} header={el.header} content={el.content} />)}
                </div>
                <div className="aside">
                    <Menu>
                        {arr.map((el, counter) => <li key={counter}><a id={`l${counter}`} href={`#s${counter}`}>{el.header}</a></li>)}
                    </Menu>
                </div>
            </div>
            <Footer counter="0" currentPage='1' />
        </motion.div>
    )
}
