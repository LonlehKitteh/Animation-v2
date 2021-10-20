import { motion } from 'framer-motion'
import React from 'react'
import { pageVariants, pageTransition } from '../../js/pageAnimation'
import { datatransformorigin } from '../../js/data/transform/datatransformorigin'
import Menu from '../Menu'
import Section from '../Section'
import Footer from '../Footer'

export default function TransformOrigin() {
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
                    <p className="title">Transform-origin</p>
                    {datatransformorigin.map((data, key) => {
                        return <Section
                                counter={key + 21}
                                code={data.code}
                                copy={data.copy}
                                picturedTransform={key === 2 ? true : false}
                                header={data.header}
                                content={data.content}
                                key={key}
                                id={`s${key}`} />
                    })}
                </div>

                <div className="aside">
                    <Menu>
                        {
                            datatransformorigin.map((link, key) => {
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
