import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
interface CustomNavLink {
    to: string,
    children?: React.ReactNode
}

const NavTabs: FC<CustomNavLink> = (props) => {
    const [hovered, setHovered] = React.useState(false)
    return (
        <NavLink to={props.to} className='hover:text-green-500'>{({ isActive }) => (
            <>
                <motion.span

                    layoutId={`header__name__${props.to.split('/')[1]}`}
                >{props.children}</motion.span>
                {isActive && <motion.div layoutId='underline'

                    className='__nav_active_links' />}
            </>
        )}</NavLink>
    )
}

export default NavTabs