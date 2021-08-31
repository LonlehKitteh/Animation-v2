import React from 'react'
import '../css/section.css'
import { transforms } from '../js/data/datatransform'
import { animations } from '../js/data/dataanimation'

export default function Section(props) {

    return (
        <div className="section" id={props.id}>
            <h1>{props.header}</h1>
            {
                (typeof props.content === "string") ? <div dangerouslySetInnerHTML={{ __html: props.content }}></div> : <div className="flex-group">{props.children}</div>
            }
            {
                (props.picturedTransform) ? <>
                    <div className="pictured">
                        {(props.counter === 30) ? <h2>transform-origin: {transforms[23]};</h2> : <h2>transform: {transforms[props.counter - 4]};</h2>}
                        <div className="css-example-block">
                            <span className="x-dimention"></span>
                            <span className="y-dimention"></span>
                            <div className="example-main">
                                <div className="border-example">
                                    {
                                        (props.counter === 30) ? <div className="content-example transformOrigin" style={{ transformOrigin: transforms[23] }}>div</div> :
                                            <div className="content-example" style={{ transform: transforms[props.counter - 4] }}>div</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        (props.code) ? <div className="css-lan" dangerouslySetInnerHTML={{ __html: props.code }}></div> : null
                    }
                </> : (props.picturedAnimation) ? <>
                    <div className="pictured">
                        <h2>{(animations[props.counter - 4] !== undefined) ? `${animations[props.counter - 4].value};` : "in progress..."}</h2>
                        <div className="css-track-animation">
                            <div style={animations[props.counter - 4]} className={(props.counter === 64) ? 'paused' : (props.counter === 65) ? 'running' : null}></div>
                        </div>
                    </div>
                    {
                        (props.code) ? <div className="css-lan">
                            <pre>
                                <code className="css" dangerouslySetInnerHTML={{ __html: props.code }}></code>
                            </pre>
                        </div> : null
                    }
                </>
                    : null
            }
        </div>
    )
}
