import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { btnAnimation } from '../js/pageAnimation';

export default function ScrollUp() {
    const [offset, setOffset] = useState(null);

    useEffect(() => {
        var body = document.body,
            html = document.documentElement;

        var height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);

        window.onscroll = () => {
            var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop
            if (scrollPosition > height * 0.1) {
                setOffset("visible")
            } else {
                setOffset("hidden")
            }
        }
    }, []);

    function handleClick(e) {
        e.preventDefault()
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    return (
        <motion.div
            className={offset}
            onClick={handleClick}
        >
            <motion.div
                className='scrollUp'
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
                transition={btnAnimation}
            >
                <motion.i
                    className="fas fa-angle-double-up"
                    onTap={(e) => {
                        e.target.classList.add("bouble")
                        setTimeout(() => e.target.classList.remove('bouble'), 700)
                    }}
                ></motion.i>
            </motion.div>
        </motion.div>
    )
}