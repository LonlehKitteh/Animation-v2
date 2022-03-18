import React, { useEffect } from 'react'

export default function Menu(props) {

    useEffect(() => props.links.current = props.children.map(element => element.ref))

    return (
        <>
            <div className="menu">
                <div className="menu-header">
                    <h1>Menu</h1>
                </div>
                <ul>
                    {props.children}
                </ul>
            </div>
        </>
    )
}
