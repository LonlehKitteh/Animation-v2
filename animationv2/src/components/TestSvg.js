import React from 'react'
import { Shake } from 'reshake'

export default function TestSvg() {

    return (
        <div className="page">
            <div className="push">
                <Shake h={10} v={0} r={3}>Div</Shake>
            </div>
        </div>
    )
}
