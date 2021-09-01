import React from 'react'
import '../css/section.css'
import { transforms } from '../js/data/datatransform'
import { animations } from '../js/data/dataanimation'

export default function Section(props) {

    function code() {
        return (props.code) ? <div className="css-lan">
            <pre>
                <code className="css" dangerouslySetInnerHTML={{ __html: props.code }}></code>
            </pre>
        </div> : null

    }

    return (
        <div className="section" id={props.id}>
            <h1>{props.header}</h1>
            {
                (typeof props.content === "string") ? <div dangerouslySetInnerHTML={{ __html: props.content }}></div> : <div className="flex-group">{props.children}</div>
            }
            {
                (props.picturedTransform) ? <>
                    <div className="pictured">
                        <h2>{(transforms[props.counter - 4] !== undefined) ? `${transforms[props.counter - 4].value};` : 'in progress...'}</h2>
                        {
                            (props.perspectivePicture) ?
                                <div className="flex" style={{ height: '50vh' }}>
                                    <div className="parent" style={transforms[props.counter - 4]}>{(props.isChildNeed) ? "div.parent" : <span>div</span>}
                                        {(props.isChildNeed) ? <div className="child" style={(transforms[props.counter - 4] !== undefined) ? transforms[props.counter - 4].child : null}>div.child</div> : null}
                                    </div>
                                </div> :
                                <div className="css-example-block">
                                    <span className="x-dimention"></span>
                                    <span className="y-dimention"></span>
                                    <div className="example-main">
                                        <div className="border-example">
                                            <div className="content-example" style={transforms[props.counter - 4]}>div</div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                    {
                        code()
                    }
                </> : (props.picturedAnimation) ? <>
                    <div className="pictured">
                        <h2>{(animations[props.counter - 4] !== undefined) ? `${animations[props.counter - 4].value};` : "in progress..."}</h2>
                        <div className="css-track-animation">
                            <div style={animations[props.counter - 4]} className={(props.counter === 64) ? 'paused' : (props.counter === 65) ? 'running' : null}></div>
                        </div>
                    </div>
                    {
                        code()
                    }
                </>
                    : null
            }
        </div>
    )
}
