import React from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition, btnAnimation } from '../js/pageAnimation'
import Section from './Section'
import Menu from './Menu'
import Footer from './Footer'
import { dataanimation } from '../js/data/dataanimation'
import { Button } from 'react-bootstrap'

export default function Animation() {
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
                    {dataanimation.map((data, key) => {
                        if (data.hasOwnProperty("mainHeader")) {
                            links++
                            return <p key={key} className="title">{`${links}. ${data.mainHeader}`}</p>
                        }
                        return (typeof data.content !== 'string') ? <Section key={key} id={`s${key - links}`} header={data.header}>{data.content.map((subdata, subkey) => {
                            return (
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                    whileHover={{ scale: 1.2, zIndex: 99 }}
                                    transition={btnAnimation}
                                    key={subkey}
                                >
                                    <a href={`#s${subkey + 3}`}><Button variant="primary" className={(subkey === 0) ? "initial" : false}>{subdata}</Button></a></motion.div>)
                        })}</Section> :
                            <Section counter={key} code={data.code} animationName={links - 1} picturedAnimation={((key > 3 && key < 7) || (key > 10)) ? true : false} header={data.header} content={data.content} key={key} id={`s${key - links}`} />
                    })}
                </div>

                <div className="aside">
                    <Menu>
                        {
                            dataanimation.map((element, key) => {
                                return (element.hasOwnProperty("mainHeader")) ? <li key={key}>{`${++counter}. ${element.mainHeader}`}</li> : <li key={key}><a id={`l${key - counter}`} href={`#s${key - counter}`}>{element.header}</a></li>
                            })
                        }
                    </Menu>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}
