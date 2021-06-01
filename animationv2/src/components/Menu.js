import React from 'react'

export default function Menu(props) {

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
