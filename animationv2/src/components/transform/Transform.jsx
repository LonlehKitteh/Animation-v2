import React from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition, btnAnimation } from '../../js/pageAnimation'
import { datatransform } from '../../js/data/transform/datatransform'
import Section from '../Section'
import Menu from '../Menu'
import { Button } from 'react-bootstrap'
import Footer from '../Footer'

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
                    <p className="title">Transform</p>
                    {
                        datatransform.map((data, key) => {
                            return (typeof data.content !== 'string') ? <Section key={key} id={`s${key}`} header={data.header}>{data.content.map((subdata, subkey) => {
                                return (
                                    <motion.div
                                        whileTap={{ scale: 0.9 }}
                                        whileHover={{ scale: 1.2, zIndex: 99 }}
                                        transition={btnAnimation}
                                        key={subkey}
                                    >
                                        <a href={`#s${subkey + key + 2}`}><Button variant="secondary" className={(subkey === 0) ? "initial" : false}>{subdata}</Button></a></motion.div>)
                            })}</Section> :
                                <Section
                                    counter={key - 3}
                                    code={data.code}
                                    copy={data.copy}
                                    picturedTransform={key > 2 ? true : false}
                                    header={data.header} content={data.content}
                                    key={key}
                                    id={`s${key}`} />
                        })
                    }
                </div>

                <div className="aside">
                    <Menu>
                        {
                            datatransform.map((element, key) => {
                                return <li key={key}><a id={`l${key}`} href={`#s${key}`}>{element.header}</a></li>
                            })
                        }
                    </Menu>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}
