import { ResizeObserver } from '@juggle/resize-observer';
import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import useMeasure from 'react-use-measure';
import NavLinksMobile from '../navlinks/NavLinksMobile'
import NavLinksDesktop from './../navlinks/NavLinksDesktop';
import { useQuery } from '@tanstack/react-query';
import DeviceDetector from 'device-detector-js';
import { incrementCount } from '../../../api/firebase';

const fetchData = async () => {
    const dd = new DeviceDetector();
    const userAgent  = navigator.userAgent;
    const device = dd.parse(userAgent)
    return await incrementCount({ device })
  }
const HeaderNav = () => {
    const [ref, { width }] = useMeasure({ polyfill: ResizeObserver })
    const { pathname } = useLocation()
    const { data, error } = useQuery(['unique_visit'], fetchData, { refetchOnWindowFocus: false, cacheTime: 120000 })


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