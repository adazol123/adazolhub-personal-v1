import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import NavTabs from '../../ui/tabs/NavTabs'

const NavLinksDesktop = () => {
    return (
        <nav className='__nav_desktop'>

            <NavTabs to={'/introduction/#introduction'}>Introduction</NavTabs>
            <NavTabs to={'/projects'}>Projects</NavTabs>
            <NavTabs to={'/ux-case-study'}>UX Case Study</NavTabs>
            <NavTabs to={'/learning'}>Learning</NavTabs>
            <NavTabs to={'/contact'}>Contact</NavTabs>
        </nav>
    )
}

export default NavLinksDesktop