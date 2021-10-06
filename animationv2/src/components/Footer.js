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
                                <p>Poprzedni artykuł</p>
                                <Link to={`/${links[props.counter][parseInt(props.currentPage) + 1].title}`} >{links[props.counter][parseInt(props.currentPage) - 1].title}</Link>
                            </> : null
                    }
                </div>
                <div className="next">
                    <p>Następny artykuł</p>
                    <Link to={`/${links[props.counter][parseInt(props.currentPage) + 1].title}`} >{links[props.counter][parseInt(props.currentPage) + 1].title}</Link>
                </div>
            </div>
            <h1>Dokumentacja</h1>
            <div className="mainFooter">
                {links.map((el, counter) => {
                    return (<div key={counter} className="links">
                        <div className='footer-title'>{`${counter + 1}. ${el[0]}`}</div>
                        {el.map((element, keycounter) => {
                            if (typeof element === 'object' && element !== null) {
                                var id = element.id || ''
                                return <NavLink key={`${counter}-${keycounter}`} to={`${element.title}${id}`}><i className={element.icon}></i>{element.title}</NavLink>
                            }
                            return null
                        })}

                    </div>)
                })}
            </div>
            <div className="author">★ animation-project-cc229.web.app &copy; 2021 - 2077 ★ author Krzysztof Gach ★</div>
        </div>
    )
}
