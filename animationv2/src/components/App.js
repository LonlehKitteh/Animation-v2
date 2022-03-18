import React, { useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Home from './Home'
import Transform from './transform/Transform'
import TransformOrigin from './transform/TransformOrigin'
import TransformStyle from './transform/TransformStyle'
import BackfaceVisibility from './transform/BackfaceVisibility'
import Perspective from './transform/Perspective'
import PerspectiveOrigin from './transform/PerspectiveOrigin'
import Keyframes from './Keyframes'
import Navigation from './Navigation'
import Galery from "./Galery"
import '../css/main.css'
import Begin from './Begin'
import { AnimatePresence } from 'framer-motion'
import Example0 from '../projects/example0/example0'
import TestCss from './TestCss'
import TestSvg from './TestSvg'
import ScrollUp from './ScrollUp'
import PageNotFound from './PageNotFound'
import { AuthProvider } from "./context/AuthContext"
import Login from './auth/Login'
import Signup from './auth/Signup'
import ForgotPassword from './auth/ForgotPassword'
import PrivateRoute from './auth/PrivateRoute'
import UpdateProfile from './auth/UpdateProfile'
import AnimationName from './animation/AnimationName'
import AnimationDelay from './animation/AnimationDelay'
import AnimationDirection from './animation/AnimationDirection'
import AnimationDuration from './animation/AnimationDuration'
import AnimationFillMode from './animation/AnimationFillMode'
import AnimationIterationCount from './animation/AnimationIterationCount'
import AnimationPlayState from './animation/AnimationPlayState'
import AnimationTimingFunction from './animation/AnimationTimingFunction'
import Animation from './animation/Animation'
import Creator from './Creator'

export default function App() {
    const location = useLocation()

    useEffect(() => {
        var title = location.pathname.substring(1)
        document.documentElement.scrollTop = 0
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
        <AuthProvider>
            {location.pathname !== '/' ? <Navigation /> : null}
            <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact component={Home} />
                    <Route path="/begin" component={Begin} />

                    <Route path="/transform" exact component={Transform} />
                    <Route path="/transform-origin" exact component={TransformOrigin} />
                    <Route path="/transform-style" exact component={TransformStyle} />
                    <Route path="/backface-visibility" component={BackfaceVisibility} />
                    <Route path="/perspective" exact component={Perspective} />
                    <Route path="/perspective-origin" exact component={PerspectiveOrigin} />

                    <Route path="/animation" exact component={Animation} />
                    <Route path="/animation-name" exact component={AnimationName} />
                    <Route path="/animation-delay" exact component={AnimationDelay} />
                    <Route path="/animation-direction" exact component={AnimationDirection} />
                    <Route path="/animation-duration" exact component={AnimationDuration} />
                    <Route path="/animation-fill-mode" exact component={AnimationFillMode} />
                    <Route path="/animation-iteration-count" exact component={AnimationIterationCount} />
                    <Route path="/animation-play-state" exact component={AnimationPlayState} />
                    <Route path="/animation-timing-function" exact component={AnimationTimingFunction} />
                    <Route path='/creator' component={Creator} />

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
