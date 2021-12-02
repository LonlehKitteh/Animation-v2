import React from 'react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../js/pageAnimation'

const Creator = () => {

    function changeHandler(e){
        console.log(e.target.value)
    }

    return (
        <motion.div layout
            className="page creator"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="push">
                <div className="title">
                    Style Creator
                </div>
                <div className="animation-field">
                    <div className="animation-item"></div>
                </div>
                <div className="control-pannel">
                X: <input type="range" min='-100' max='100' defaultValue="0" onChange={changeHandler} /> <br />
                Y: <input type="range" min='-100' max='100' defaultValue="0" onChange={changeHandler} />

                </div>

            </div>
        </motion.div>

    )
}

export default Creator
