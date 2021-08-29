import React from 'react'
import '../css/section.css'

export default function Section(props) {

    const transforms = [
        'none',
        'perspective(100px) rotateX(125deg)',
        'translateX(40px)',
        'translateY(-20px)',
        'translate(40px, -20px)',
        'perspective(100px) translateZ(20px)',
        'perspective(300px) translate3d(50px, 75px, 40px)',
        'scaleX(0.8)',
        'scaleY(1.2)',
        'scale(1.3, 0.75)',
        'perspective(300px) scaleZ(0.5) translateZ(200px)',
        'perspective(300px) scale3d(0.75, 1.25, 0.5) translateZ(200px)',
        'skewX(30deg)',
        'skewY(-30deg)',
        'skew(30deg, 20deg)',
        'rotate(60deg)',
        'perspective(300px) rotateX(45deg)',
        'perspective(300px) rotateY(45deg)',
        'perspective(300px) rotateZ(45deg)',
        'perspective(300px) rotate3d(1, 1, 1, 45deg)',
        'matrix(0.8660254, 0.5, -0.5, 0.8660254, 0, 0)',
        'perspective(300px) matrix3d(0.7071067, 0, -0.7071067, 0, 0, 1, 0, 0, 0.7071067, 0, 0.7071067, 0, 0, 0, 0, 1)',
        'translateX(100px) rotate(30deg)',
        'left top'
    ]

    const animation = [
        'none',
        'move',
        'move, color',
        '0s'
    ]
    const animationNames = [
        'animation-name',
        'aniamtion-duration',
        'aniamtion-timing-function',
        'animation-delay',
        'animation-iteration-count',
        'aniamtion-direction',
        'aniamtion-fill-mode',
        'aniamtion-play-state',
        'aniamtion'
    ]


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
                                : <h2>{`${animationNames[props.animationName]}: ${animation[props.counter - 4]}`}</h2>
                        }
                        <div className="css-track-animation">
                            {
                                (props.counter > 10) ? <div style={{ animationDuration: animation[props.counter - 8] }}></div>
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
