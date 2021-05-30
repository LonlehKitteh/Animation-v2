import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Transform from './Transform'
import Animation from './Animation'
import Keyframes from './Keyframes'
import Galery from "./Galery"
import '../css/main.css'

export default function App() {

    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.querySelector(".nav").classList.add("scrolled")
        } else {
            document.querySelector(".nav").classList.remove("scrolled")
        }
    })

    useEffect(() => {
        var sectionOffsets = []

        document.querySelectorAll(".section").forEach(el => {
            sectionOffsets.push(el.offsetTop)
        })

        window.addEventListener("scroll", () => {
            var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop

            sectionOffsets.forEach((element, counter) => {
                if (element - 50 <= scrollPosition && sectionOffsets[counter + 1] - 50 >= scrollPosition) {
                    document.getElementById(`l${counter}`).classList.add("active")
                } else if (scrollPosition >= sectionOffsets[sectionOffsets.length - 1] - 50) {
                    document.getElementById(`l${sectionOffsets.length - 2}`).classList.remove("active")
                    document.getElementById(`l${sectionOffsets.length - 1}`).classList.add("active")
                } else {
                    document.getElementById(`l${counter}`).classList.remove("active")
                }
            })
        })
    }, [])

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/transform" component={Transform}></Route>
                    <Route path="/animation" component={Animation}></Route>
                    <Route path="/keyframes" component={Keyframes}></Route>
                    <Route path="/galery" component={Galery}></Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}
