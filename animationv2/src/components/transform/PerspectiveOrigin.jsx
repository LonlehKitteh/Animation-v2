import React from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition, btnAnimation } from '../../js/pageAnimation'
import Section from '../Section'
import Menu from '../Menu'
import { Button } from 'react-bootstrap'
import { dataperspectiveorigin } from '../../js/data/transform/dataperspectiveorigin'
import Footer from '../Footer'

export default function PerspectiveOrigin() {
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
                    <p className="title">Perspective-origin</p>
                    {
                        dataperspectiveorigin.map((data, key) => {
                            return (typeof data.content !== 'string') ? <Section key={key} id={`s${key}`} header={data.header}>{data.content.map((subdata, subkey) => {
                                return (
                                    <motion.div
                                        whileTap={{ scale: 0.9 }}
                                        whileHover={{ scaleX: 1.02, scaleY: 1.1, zIndex: 99 }}
                                        transition={btnAnimation}
                                        key={subkey}
                                    >
                                        <a href={`#s${subkey + key + 2}`}><Button variant="secondary" className={(subkey === 0) ? "initial" : false}>{subdata}</Button></a></motion.div>)
                            })}</Section> :
                                <Section
                                    counter={key + 27}
                                    code={data.code}
                                    copy={data.copy}
                                    isChildNeed={true}
                                    picturedTransform={key > 2 ? true : false}
                                    perspectivePicture={true}
                                    header={data.header}
                                    content={data.content}
                                    key={key}
                                    id={`s${key}`} />
                        })
                    }
                </div>

                <div className="aside">
                    <Menu>
                        {
                            dataperspectiveorigin.map((link, key) => {
                                return <li key={key}><a id={`l${key}`} href={`#s${key}`}>{link.header}</a></li>
                            })
                        }
                    </Menu>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}
