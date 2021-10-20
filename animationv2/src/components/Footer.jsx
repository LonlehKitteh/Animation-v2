import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { links } from '../js/links'
import '../css/footer.css'
import { useLocation } from 'react-router'

export default function Footer() {
    const location = useLocation()
    const [pages, setPages] = useState([])

    useEffect(() => {
        links.flat(1).map(el => {
            if (el.hasOwnProperty("mainTitle")) {
                if (el.hasOwnProperty('titles')) {
                    el.titles.map(title => setPages(prev => [...prev, title]))
                } else {
                    setPages(prev => [...prev, el.mainTitle])
                }
            }
            return null
        })

    }, [])

    return (
        <div className="footer">
            <div className="minNav">
                <div className="prev">
                    {
                        pages.findIndex(i => i === location.pathname.substring(1)) - 1 > 0 ?
                            <>
                                <p>Poprzedni artykuł</p>
                                <Link to={`/${pages[pages.findIndex(i => i === location.pathname.substring(1)) - 1]}`}>{pages[pages.findIndex(i => i === location.pathname.substring(1)) - 1]}</Link>
                            </> : null
                    }
                </div>
                <div className="next">
                    {
                        pages.findIndex(i => i === location.pathname.substring(1)) + 1 < pages.length ?
                            <>
                                <p>Poprzedni artykuł</p>
                                <Link to={`/${pages[pages.findIndex(i => i === location.pathname.substring(1)) + 1]}`}>{pages[pages.findIndex(i => i === location.pathname.substring(1)) + 1]}</Link>
                            </> : null
                    }
                </div>
            </div>
            <h1>Dokumentacja</h1>
            <div className="mainFooter">
                {links.map((link, counter) => {
                    return <div key={counter} className="links">
                        <div className='footer-title'>{`${counter + 1}. ${link[0]}`}</div>
                        {link.map((element, index) => {
                            if (typeof element === 'object' && element.hasOwnProperty('titles')) {
                                return <div className="subtitle-footer" key={`${counter}-${index}`}><span><i className={element.icon}></i>{element.mainTitle}</span>
                                    {(typeof element === 'object' && element.hasOwnProperty('titles')) ? element.titles.map((subtitle, key) => {
                                        return <NavLink to={subtitle} key={`${counter}-${key}`}>{subtitle}</NavLink>
                                    }) : null}
                                </div>
                            }
                            if (typeof element !== 'string') return <NavLink key={`${counter}-${index}`} to={`${element.mainTitle}${element.id || ''}`}><i className={element.icon}></i>{element.mainTitle}</NavLink>
                            return null
                        })}
                    </div>
                })}
            </div>
            <div className="author">★ animation-project-cc229.web.app &copy; 2021 - 2077 ★ author Krzysztof Gach ★</div>
        </div>
    )
}
