import React, { useEffect, useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Home from './Home'
import Transform from './Transform'
import Animation from './Animation'
import Keyframes from './Keyframes'
import Navigation from './Navigation'
import Galery from "./Galery"
import '../css/main.css'
import Begin from './Begin'
import { AnimatePresence } from 'framer-motion'
import Example0 from '../projects/example0/example0'
import TestCss from './TestCss'
import TestSvg from './TestSvg'
import { pageTransition } from '../js/pageAnimation'
import ScrollUp from './ScrollUp'
import PageNotFound from './PageNotFound'
import { AuthProvider } from "./context/AuthContext"
import { useViewportScroll } from 'framer-motion'

import Login from './auth/Login'
import Signup from './auth/Signup'
import ForgotPassword from './auth/ForgotPassword'
import PrivateRoute from './auth/PrivateRoute'
import UpdateProfile from './auth/UpdateProfile'

export default function App() {
    const location = useLocation()
    const [getSection, setGetSection] = useState([])
    const [sectionLength, setSectionLength] = useState(1)
    const { scrollY } = useViewportScroll()

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

        setTimeout(() => {
            var data = []
            document.querySelectorAll(".section").forEach(section => {
                let menuLink = document.getElementById(`l${section.id.substring(1)}`)
                data.push({ section: section.offsetTop, menuLink: menuLink })
            })
            setGetSection(data)
        }, pageTransition.duration * 1000)

    }, [location])

    useEffect(() => {
        var executed = false

        window.addEventListener('scroll', scrollHandler)

        function scrollHandler() {
            const arrayOfSections = getSection.filter(element => element.section - 45 <= scrollY.current)
            setSectionLength((arrayOfSections.length === 0) ? 1 : arrayOfSections.length)
            if (arrayOfSections[arrayOfSections.length - 1] === undefined) return
            getSection.forEach(element => {
                element.menuLink.classList.remove("active")
            })
            arrayOfSections[arrayOfSections.length - 1].menuLink.classList.add("active")
            if(!executed) borderColor(arrayOfSections[arrayOfSections.length - 1].menuLink)
        }

        requestAnimationFrame(scrollHandler)

        function borderColor(element) {
            executed = true
            var randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
            element.style.borderLeftColor = randomColor
            element.style.color = randomColor

            setTimeout(() => {
                element.removeAttribute('style')
            }, 1000)
        }

        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [getSection, scrollY, sectionLength])

    return (
        <AuthProvider>
            {location.pathname !== '/' ? <Navigation /> : null}
            <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact component={Home} />
                    <Route path="/begin" component={Begin} />
                    <Route path="/transform" component={Transform} />
                    <Route path="/animation" component={Animation} />
                    <Route path="/keyframes" component={Keyframes} />
                    <Route path="/galery" component={Galery} />
                    <PrivateRoute path="/testcss" component={TestCss} />
                    <Route path="/testsvg" component={TestSvg} />

                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/forgot-password" component={ForgotPassword} />

                    <PrivateRoute path="/update profile" component={UpdateProfile} />
                    <Route path="/example0" exact component={Example0} />
                    <Route component={PageNotFound} />

                    {/* <Route path="/example1" exact component={Example1}></Route>
                    <Route path="/example2" exact component={Example2}></Route>
                    <Route path="/example3" exact component={Example3}></Route>
                    <Route path="/example4" exact component={Example4}></Route> */}
                </Switch>
            </AnimatePresence>
            <ScrollUp />
        </AuthProvider>
    )
}
