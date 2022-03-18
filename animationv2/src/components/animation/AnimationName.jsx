import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { dataanimationname } from '../../js/data/animation/dataanimationname'
import { pageVariants, pageTransition } from '../../js/pageAnimation'
import Menu from '../Menu'
import Section from '../Section'
import Footer from '../Footer'
import useObserver from '../hooks/useObserver'

export default function AnimationName() {
    const sections = useRef([]);
    const links = useRef([]);
    const linksRef = useRef([]);
    linksRef.current = dataanimationname.map((element, i) => linksRef.current[i] ?? React.createRef());
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
                    <p className="title">Animation-name</p>
                    {
                        dataanimationname.map((data, key) => <Section
                            sections={sections}
                            counter={key + 3}
                            code={data.code}
                            copy={data.copy}
                            picturedAnimation={key > 0 ? true : false}
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
                            dataanimationname.map((link, key) => <li key={key} ref={linksRef.current[key]}><a id={`l${key}`} href={`#s${key}`}>{link.header}</a></li>)
                        }
                    </Menu>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}
