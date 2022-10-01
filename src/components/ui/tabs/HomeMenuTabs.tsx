import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
interface CustomNavLink {
    to: string,
    children?: React.ReactNode,
    disabled?: boolean
}

function HomeMenuTabs(props: CustomNavLink) {
    const { pathname } = useLocation()
    console.log(pathname)
    return (
        <NavLink to={props.to}>{({ isActive }) => (
            <>
                <motion.span
                    layoutId={`header__name__${props.to.split('/')[1]}`}
                    initial={{ x: 400 }}
                    animate={{ x: 0 }}

                >{props.children}</motion.span>

                <div
                    className={`__home_menu_active_links ${isActive && 'active'}`}
                />
            </>
        )}</NavLink>
    )
}

export default HomeMenuTabs