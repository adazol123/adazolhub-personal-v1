import { ResizeObserver } from '@juggle/resize-observer';
import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import useMeasure from 'react-use-measure';
import NavLinksMobile from '../navlinks/NavLinksMobile'
import NavLinksDesktop from './../navlinks/NavLinksDesktop';

const HeaderNav = () => {
    const [ref, { width }] = useMeasure({ polyfill: ResizeObserver })
    const { pathname } = useLocation()
    return (
        <>
            <header ref={ref}>
                <div className={`navigation ${pathname !== '/' ? 'bg-white' : ''}`}>
                    <Link to={'/'}>
                        <span >Adazolhub | Personal</span>
                    </Link>
                    {
                        pathname !== '/' && (width > 768 ?
                            <NavLinksDesktop /> :
                            <NavLinksMobile />)
                    }
                </div>

            </header>
        </>
    )
}

export default HeaderNav