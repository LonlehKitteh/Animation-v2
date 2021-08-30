import React from 'react'
import '../css/section.css'
import { transforms } from '../js/data/datatransform'
import { animationNames, animation } from '../js/data/dataanimation'

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
                        {
                            (props.counter > 10) ? <h2>{`${animationNames[props.animationName]}: ${animation[props.counter - 8]}`}</h2>
                                : <h2>{`${animationNames[props.animationName]}: ${animation[props.counter - 4]};`}</h2>
                        }
                        <div className="css-track-animation">
                            {
                                (props.counter > 10) ? <div style={
                                    {
                                        animationDuration: animation[props.counter - 8],
                                        animationName: (props.counter === 12) ? 'move, color' : null
                                    }
                                }></div>
                                    : <div style={{ animationName: animation[props.counter - 4] }}></div>
                            }
                        </div>
                    </div>
                    {
                        (props.code) ? <div className="css-lan" dangerouslySetInnerHTML={{ __html: props.code }}></div> : null
                    }
                </>
                    : null
            }
        </div>
    )
}
