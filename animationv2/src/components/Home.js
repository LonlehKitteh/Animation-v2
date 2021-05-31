import React, { useEffect } from 'react'
import Navigation from './Navigation'
import '../css/home.css'
import hljs from 'highlight.js'

export default function Home() {

    useEffect(() => {
        hljs.initHighlightingOnLoad()
    }, [])

    return (
        <>
            <Navigation />
            <div className="page">
                <div className="svg-animation"></div>
                    <pre><code className="javascript">var x; alert(1+1)</code></pre>
            </div>
        </>
    )
}