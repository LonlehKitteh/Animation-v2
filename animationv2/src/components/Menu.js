import React from 'react'

export default function Menu(props) {

    function menuClose(){
        document.querySelector(".menu").classList.add("closed")
        setTimeout(() => {
            document.querySelector(".anchor").classList.add("active")
        }, 400)
    }
    function menuOpen(){
        document.querySelector(".anchor").classList.remove("active")
        setTimeout(() => {
            document.querySelector(".menu").classList.remove("closed")
        }, 600)
    }
    window.addEventListener("scroll",() =>{
        // document.querySelector(".anchor").style.bottom = `${37*16+document.documentElement.scrollTop}px`
    })

    return (
        <>
            <div onClick={menuOpen} className="anchor">
                <i className="fas fa-bars"></i>
            </div>
            <div className="menu">
                <div className="menu-header">
                    <h1>Menu</h1>
                    <div onClick={menuClose} className="mark">
                        <i className="fas fa-times"></i>
                    </div>
                </div>
                <ul>
                    {props.children}
                </ul>
            </div>
        </>
    )
}
