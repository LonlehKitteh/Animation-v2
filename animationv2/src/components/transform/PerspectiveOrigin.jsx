import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../../js/pageAnimation'
import Section from '../Section'
import Menu from '../Menu'
import { dataperspectiveorigin } from '../../js/data/transform/dataperspectiveorigin'
import Footer from '../Footer'
import useObserver from '../hooks/useObserver'

export default function PerspectiveOrigin() {
    const sections = useRef([]);
    const links = useRef([]);
    const linksRef = useRef([]);
    linksRef.current = dataperspectiveorigin.map((element, i) => linksRef.current[i] ?? React.createRef());
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
                    <p className="title">Perspective-origin</p>
                    {
                        dataperspectiveorigin.map((data, key) => <Section
                            sections={sections}
                            counter={key + 28}
                            code={data.code}
                            copy={data.copy}
                            isChildNeed={true}
                            picturedTransform={key > 1 ? true : false}
                            perspectivePicture={true}
                            header={data.header}
                            content={data.content}
                            key={key}
                            id={`s${key}`} />
                        )
                    }
                </div>

                <div className="aside">
                    <Menu links={links}>
                        {
                            dataperspectiveorigin.map((link, key) => <li key={key} ref={linksRef.current[key]}><a id={`l${key}`} href={`#s${key}`}>{link.header}</a></li>)
                        }
                    </Menu>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}
