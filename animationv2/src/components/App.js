import React, { useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Home from './Home'
import Transform from './Transform'
import Animation from './Animation'
import Keyframes from './Keyframes'
import Navigation from './Navigation'
import Galery from "./Galery"
import '../css/main.css'
import '../css/hljs.css'
import Begin from './Begin'
import { AnimatePresence } from 'framer-motion'
import Example0 from '../projects/example0/example0'
import TestCss from './TestCss'
import TestSvg from './TestSvg'

export default function App() {
    const location = useLocation()
    useEffect(() => {
        var title = location.pathname.substring(1)

        if (location.pathname === '/') {
            title = 'Home'
        } else if (location.pathname.includes("test")) {
            title = "Test " + location.pathname.substring(5)[0].toUpperCase() + location.pathname.substring(6)
        } else if (location.pathname.endsWith("0")) {
            title = location.pathname[1].toUpperCase() + location.pathname.substring(2, location.pathname.length - 1)
        }
        else {
            title = title.charAt(0).toUpperCase() + title.substring(1)
        }
        document.getElementById("title").innerHTML = `Animation tutorial | ${title}`
    }, [location])

    return (
        <>
            <Navigation />
            <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/begin" component={Begin}></Route>
                    <Route path="/transform" component={Transform}></Route>
                    <Route path="/animation" component={Animation}></Route>
                    <Route path="/keyframes" component={Keyframes}></Route>
                    <Route path="/galery" component={Galery}></Route>
                    <Route path="/testcss" component={TestCss}></Route>
                    <Route path="/testsvg" component={TestSvg}></Route>

                    <Route path="/example0" exact component={Example0}></Route>
                    {/* <Route path="/example1" exact component={Example1}></Route>
                    <Route path="/example2" exact component={Example2}></Route>
                    <Route path="/example3" exact component={Example3}></Route>
                    <Route path="/example4" exact component={Example4}></Route> */}
                </Switch>
            </AnimatePresence>
        </>
    )
}
