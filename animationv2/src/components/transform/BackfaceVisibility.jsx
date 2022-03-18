import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../../js/pageAnimation'
import Section from '../Section'
import Menu from '../Menu'
import { databackfacevisibility } from '../../js/data/transform/databackfacevisibility'
import Footer from '../Footer'
import useObserver from '../hooks/useObserver'

export default function BackfaceVisibility() {
    const sections = useRef([]);
    const links = useRef([]);
    const linksRef = useRef([]);
    linksRef.current = databackfacevisibility.map((element, i) => linksRef.current[i] ?? React.createRef());
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
                    <p className="title">Backface-visibility</p>
                    {
                        databackfacevisibility.map((data, key) => <Section
                                sections={sections}
                                counter={key + 25}
                                code={data.code}
                                copy={data.copy}
                                picturedTransform={key > 0 ? true : false}
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
                            databackfacevisibility.map((link, key) => <li key={key} ref={linksRef.current[key]}><a id={`l${key}`} href={`#s${key}`}>{link.header}</a></li>)
                        }
                    </Menu>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}
