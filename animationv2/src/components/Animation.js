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
    var picturedBugFixer = [4, 5, 6, 11, 12, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 32, 33, 38, 39, 40, 45, 46, 47, 48, 49, 54, 55, 56, 57, 58, 63, 64, 65, 70, 71]

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
                                    whileHover={{ scale: 1.1, zIndex: 99 }}
                                    transition={btnAnimation}
                                    key={subkey}
                                >
                                    <a href={`#s${subkey + key - links + 2}`}><Button variant="primary" className={(subkey === 0 && key !== 9 && key !== 30) ? "initial" : false}>{subdata}</Button></a></motion.div>)
                        })}</Section> :
                            <Section counter={key} code={data.code} copy={data.copy} animationName={links - 1} picturedAnimation={(picturedBugFixer.includes(key)) ? true : false} header={data.header} content={data.content} key={key} id={`s${key - links}`} />
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
            <Footer counter="0" currentPage='3'/>
        </motion.div>
    )
}
