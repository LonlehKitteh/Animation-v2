import React, { useEffect } from 'react'
import Section from './Section'
import { arr } from '../js/data'
import Menu from './Menu'
import Navigation from './Navigation'
import hljs from 'highlight.js'

export default function Begin() {

    function borderColor(element) {
        var randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        if (element.style.borderLeftColor === '') {
            element.style.borderLeftColor = randomColor
            element.style.color = randomColor
        } else {
            setTimeout(() => {
                element.style.borderLeftColor = ''
                element.style.color = 'black'
            }, 800)
        }
    }


    useEffect(() => {
        hljs.highlightAll()

        var sectionOffsets = []

        document.querySelectorAll(".section").forEach(el => {
            sectionOffsets.push(el.offsetTop)
        })

        window.addEventListener("scroll", () => {

            if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
                document.querySelector(".nav").classList.add("scrolled")
            } else {
                document.querySelector(".nav").classList.remove("scrolled")
            }

            var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop

            sectionOffsets.forEach((element, counter) => {
                if(document.getElementById(`l${counter}`) === null) return
                if (element - 50 <= scrollPosition && sectionOffsets[counter + 1] - 50 >= scrollPosition) {
                    document.getElementById(`l${counter}`).classList.add("active")
                    borderColor(document.getElementById(`l${counter}`))
                } else if (scrollPosition >= sectionOffsets[sectionOffsets.length - 1] - 50) {
                    document.getElementById(`l${sectionOffsets.length - 2}`).classList.remove("active")
                    document.getElementById(`l${sectionOffsets.length - 1}`).classList.add("active")
                    borderColor(document.getElementById(`l${sectionOffsets.length - 1}`))
                } else {
                    document.getElementById(`l${counter}`).classList.remove("active")
                }
            })
        })
    }, [])

    return (
        <>
            <Navigation />
            <div className="page">
                <div className="push">
                    <div className="main">
                        {arr.map((el, counter) => <Section key={counter} id={`s${counter}`} header={el.header} content={el.content} />)}
                    </div>
                    <div className="aside">
                        <Menu>
                            {arr.map((el, counter) => <li key={counter}><a id={`l${counter}`} href={`#s${counter}`}>{el.header}</a></li>)}
                        </Menu>
                    </div>
                </div>
                <div className="footer">
                    footer
                </div>
            </div>
        </>
    )
}
