import React, { useEffect } from 'react'
import Section from './Section'
import { arr } from '../js/data'
import Menu from './Menu'
import hljs from 'highlight.js'
import Footer from './Footer'
import '../css/begin.css'
import { scrolllingAnchor } from '../js/scrollingAnchor'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../js/pageAnimation'

export default function Begin() {
    useEffect(() => {
        hljs.highlightAll()
        scrolllingAnchor()
    }, [])

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
                <Footer />
            </motion.div>
        </>
    )
}
