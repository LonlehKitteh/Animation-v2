import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../../js/pageAnimation'
import { datatransform } from '../../js/data/transform/datatransform'
import Section from '../Section'
import Menu from '../Menu'
import Footer from '../Footer'
import useObserver from '../hooks/useObserver'

export default function Transform() {
    const sections = useRef([]);
    const links = useRef([]);
    const linksRef = useRef([]);
    linksRef.current = datatransform.map((element, i) => linksRef.current[i] ?? React.createRef());
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
                    <p className="title">Transform</p>
                    {
                        datatransform.map((data, key) => <Section
                            sections={sections}
                            counter={key - 1}
                            code={data.code}
                            copy={data.copy}
                            picturedTransform={key > 0 ? true : false}
                            header={data.header} content={data.content}
                            key={key}
                            id={`s${key}`} />
                        )
                    }
                </div>

                <div className="aside">
                    <Menu links={links}>
                        {
                            datatransform.map((element, key) => <li ref={linksRef.current[key]} key={key}><a id={`l${key}`} href={`#s${key}`}>{element.header}</a></li>)
                        }
                    </Menu>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}
