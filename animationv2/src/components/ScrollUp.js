import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { btnAnimation } from '../js/pageAnimation';

export default function ScrollUp() {
    const [shouldActionShow, setshouldActionShow] = useState(false)
    const [lastYPos, setLastYPos] = useState(0)
    function handleClick(e) {
        e.preventDefault()
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    useEffect(() => {

        function handleScroll() {
            const yPos = window.scrollY
            const isScrollingUp = yPos > lastYPos

            setshouldActionShow(isScrollingUp)
            setLastYPos(yPos)
        }

        window.addEventListener('scroll', handleScroll, false)

        return () => {
            window.removeEventListener('scroll', handleScroll, false)
        }
    }, [lastYPos])

    return (
        <motion.div className='scrollUp' animate={{ transform: `scale(${shouldActionShow ? 1 : 0})` }} initial={{ transform: 'scale(0)' }} onClick={handleClick} transition={btnAnimation}>
            <div>
                <motion.i className="fas fa-angle-double-up"
                    whileTap={{
                        transform: 'rotate(45deg)'
                    }}></motion.i>
            </div>
        </motion.div>
    )
}