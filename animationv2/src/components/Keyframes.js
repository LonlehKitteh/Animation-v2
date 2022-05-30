import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../js/pageAnimation'
import { datakeyframes } from '../js/data/datakeyframes'
import useObserver from './hooks/useObserver'
import Section from './Section'
import Menu from './Menu'
import Footer from './Footer'

export default function Keyframes() {
    const sections = useRef([]);
    const links = useRef([]);
    const linksRef = useRef([]);
    linksRef.current = datakeyframes.map((element, i) => linksRef.current[i] ?? React.createRef());
    useObserver(sections, links);

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
                <p className="title">Keyframes</p>
                    {datakeyframes.map((element, counter) => <Section
                        key={counter}
                        sections={sections}
                        id={`s${counter}`}
                        header={element.header}
                        content={element.content}
                        code={element.code}
                        copy={element.copy}
                    />)}
                </div>
                <div className="aside">
                    <Menu links={links}>
                        {datakeyframes.map((el, key) => <li key={key} ref={linksRef.current[key]}><a id={`l${key}`} href={`#s${key}`}>{el.header}</a></li>)}
                    </Menu>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}
