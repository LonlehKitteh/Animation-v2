import React from 'react'
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

export default function App() {
    const location = useLocation();

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
                </Switch>
            </AnimatePresence>
        </>
    )
}
