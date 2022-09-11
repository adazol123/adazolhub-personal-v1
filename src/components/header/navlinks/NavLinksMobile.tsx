import React from 'react'
import { useToggleStore } from '../../../store/store'

const NavLinksMobile = () => {
    const menuState = useToggleStore(state => state.menu)
    const toggle = useToggleStore(state => state.triggerMenu)
    return (
        <nav className='__nav_mobile'>
            <span onClick={toggle}>
                {menuState ? 'Close' : 'Menu'}
            </span>

        </nav>
    )
}

export default NavLinksMobile