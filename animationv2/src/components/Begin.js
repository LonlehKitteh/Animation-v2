import React, { useRef } from 'react'
import Section from './Section'
import { arr } from '../js/data/databegin'
import Menu from './Menu'
import Footer from './Footer'
import '../css/begin.css'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../js/pageAnimation'
import SplittedSection from './SplittedSection'
import useObserver from './hooks/useObserver'

export default function Begin() {
    const sections = useRef([]);
    const links = useRef([]);
    const linksRef = useRef([]);
    linksRef.current = arr.map((element, i) => linksRef.current[i] ?? React.createRef());
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
                <div className="main begin">
                    {arr.map((el, counter) => counter > 0 ? <SplittedSection
                        sections={sections}
                        key={counter}
                        id={`s${counter}`}
                        header={el.header}
                        left={el.left}
                        right={el.right}
                        endNote={el.endNote}
                        contentMainHeader={el.contentMainHeader}
                        advanced={counter > 1 ? true : false}
                    />
                        : <Section key={counter}
                            sections={sections}
                            id={`s${counter}`}
                            header={el.header}
                            content={el.content} />)}
                </div>
                <div className="aside">
                    <Menu links={links}>
                        {arr.map((el, key) => <li key={key} ref={linksRef.current[key]}><a id={`l${key}`} href={`#s${key}`}>{el.header}</a></li>)}
                    </Menu>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}
