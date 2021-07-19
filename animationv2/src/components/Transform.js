import React from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../js/pageAnimation'
import { datatransform } from '../js/data/datatransform'
import Footer from './Footer'
import Section from './Section'
import Menu from './Menu'

export default function Transform() {

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
                    {datatransform.map((data, key) => {
                        return (typeof data.content !== 'string') ? <Section key={key} id={`s${key}`} header={data.header}>{data.content.map(subdata => <div key={subdata}>{subdata}</div>)}</Section> : 
                        
                        <Section header={data.header} content={data.content} key={key} id={`s${key}`} />
                    })}
                </div>

                <div className="aside">
                    <Menu>
                        {datatransform.map((el, counter) => <li key={counter}><a id={`l${counter}`} href={`#s${counter}`}>{el.header}</a></li>)}
                    </Menu>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}
