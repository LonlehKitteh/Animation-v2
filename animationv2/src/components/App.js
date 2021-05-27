import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Transform from './Transform'
import Animation from './Animation'
import Keyframes from './Keyframes'
import Galery from "./Galery";
import '../css/main.css'

export default function Navigation() {

    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.querySelector(".nav").classList.add("scrolled")
        } else {
            document.querySelector(".nav").classList.remove("scrolled")
        }
    })

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/transform" component={Transform}></Route>
                <Route path="/animation" component={Animation}></Route>
                <Route path="/keyframes" component={Keyframes}></Route>
                <Route path="/galery" component={Galery}></Route>
            </Switch>
        </BrowserRouter>
    )
}
