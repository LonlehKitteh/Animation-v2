import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { links } from '../js/links'
import '../css/footer.css'

export default function Footer(props) {

    return (
        <div className="footer">
            <div className="minNav">
                <div className="prev">
                    {
                        (typeof links[props.counter][parseInt(props.currentPage) - 1] !== 'string') ?
                            <>
                                <p>Previous article</p>
                                <Link to={`/${links[props.counter][parseInt(props.currentPage) + 1].title}`} >{links[props.counter][parseInt(props.currentPage) - 1].title}</Link>
                            </> : null
                    }
                </div>
                <div className="next">
                    <p>Next article</p>
                    <Link to={`/${links[props.counter][parseInt(props.currentPage) + 1].title}`} >{links[props.counter][parseInt(props.currentPage) + 1].title}</Link>
                </div>
            </div>
            <div className="mainFooter">
                <div className="author">
                    Krzysztof Gach &copy; 2021
                </div>

                <div>
                    <h1>Dokumentacja</h1>
                    <div className="links">
                        {links[props.counter].map((link, key) => {
                            return (typeof link === 'object') ? <NavLink key={key} to={`/${(link.id !== undefined) ? link.title + link.id : link.title}`}><i className={link.icon}></i>{link.title}</NavLink> : <div key={key}>{`${parseInt(props.counter) + 1}. ${link}`}</div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
