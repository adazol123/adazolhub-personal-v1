import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import useMeasure from 'react-use-measure'
import { useToggleStore } from '../../../store/store'
import NavLinksDesktop from '../../header/navlinks/NavLinksDesktop'
import NavTabs from '../../ui/tabs/NavTabs'
import { animate, AnimatePresence, motion, VariantLabels, Variants } from 'framer-motion'
type Props = {}

const NavOverlay = (props: Props) => {
    const toggleMenu = useToggleStore(state => state.triggerMenu)
    const [ref, { width }] = useMeasure({ polyfill: ResizeObserver })
    const { pathname } = useLocation()

    const list: Variants = {
        hidden: { opacity: 0.2, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const item: Variants = {
        hidden: { opacity: 0.2, y: 50 },
        show: { opacity: 1, y: 0 }
    }
    return (

        <motion.div className='fixed h-screen  w-full inset-0 z-40 bg-white '
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{
                duration: 0.4,
                bounce: 0.2
            }}
        >
            <div className="navigation">
                <Link to={'/'} onClick={toggleMenu}>
                    <span >Adazolhub | Personal</span>
                </Link>
                {
                    pathname !== '/' && (width > 768 ?
                        <NavLinksDesktop /> :
                        <span onClick={toggleMenu}>Close</span>)
                }
            </div>
            <div>
                <motion.nav
                    variants={list}
                    initial='hidden'
                    animate='show'
                    className='__nav_mobile__links'>

                    <Link onClick={toggleMenu} to={'/introduction'}>
                        <motion.span variants={item}>Introduction</motion.span>
                    </Link>
                    <Link onClick={toggleMenu} to={'/projects'}>
                        <motion.span variants={item}>Projects</motion.span>

                    </Link>
                    <Link onClick={toggleMenu} to={'/ux-case-study'}>
                        <motion.span variants={item}>UX Case Study</motion.span>
                    </Link>
                    {/* <Link onClick={toggleMenu} to={'/learning'}>
                        <motion.span variants={item}>Learning</motion.span>
                    </Link> */}
                    <Link onClick={toggleMenu} to={'/contact'}>
                        <motion.span variants={item}>Contact</motion.span>
                    </Link>
                </motion.nav>


            </div>
        </motion.div>
    )
}

export default NavOverlay