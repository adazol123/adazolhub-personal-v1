import { AnimatePresence } from 'framer-motion'
import React from 'react'
import HomeMenuTabs from '../components/ui/tabs/HomeMenuTabs'

const Home = () => {
    return (
        <section>

            <nav className="__home_menu_selection">
                <HomeMenuTabs to='/introduction' >Introduction</HomeMenuTabs>
                <HomeMenuTabs to='/projects' >Projects</HomeMenuTabs>
                <HomeMenuTabs to='/ux-case-study' >UX Case Study</HomeMenuTabs>
                {/* <HomeMenuTabs to='/learning' >Learning</HomeMenuTabs> */}
                <HomeMenuTabs to='/contact' >Contact</HomeMenuTabs>
            </nav>
        </section>
    )
}

export default Home