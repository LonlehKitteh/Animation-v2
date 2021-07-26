import React from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../js/pageAnimation'
import { datatransform } from '../js/data/datatransform'
import Footer from './Footer'
import Section from './Section'
import Menu from './Menu'
import { Button } from 'react-bootstrap'
import { btnAnimation } from '../js/pageAnimation'

export default function Transform() {
    var counter = 0
    var links = 0

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
                        if (data.hasOwnProperty("mainHeader")){
                            links++
                            return null
                        }
                        return (typeof data.content !== 'string') ? <Section key={key} id={`s${key - links}`} header={data.header}>{data.content.map((subdata, subkey) => {
                            var initial = false
                            if (subkey === 0) initial = "initial"
                            return (
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                    whileHover={{ scale: 1.2, zIndex: 99 }}
                                    transition={btnAnimation}
                                    key={subkey}
                                >
                                    <a href={`#s${subkey + 3}`}><Button variant="primary" className={initial}>{subdata}</Button></a></motion.div>)
                        })}</Section> :
                            <Section header={data.header} content={data.content} key={key} id={`s${key - links}`} />
                    })}
                </div>

                <div className="aside">
                    <Menu>
                        {
                            datatransform.map((element, key) => {
                                return (element.hasOwnProperty("mainHeader")) ? <div key={key}>{`${++counter}. ${element.mainHeader}`}</div> : <li key={key}><a id={`l${key - counter}`} href={`#s${key - counter}`}>{element.header}</a></li>
                            })
                        }
                    </Menu>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}
