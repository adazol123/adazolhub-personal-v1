import React from 'react'

const FooterContact = () => {
    return (
        <footer>
            <div className="__footer_contact">
                <div className='space-y-6'>

                    <div className='flex flex-col'>
                        <span className='text-neutral-400 font-normal    text-xs'>Contact me</span>
                        <a className='text-neutral-600 font-normal' href='mailto:dpadayao40@outlook.ph' >dpadayao40@outlook.ph</a>

                    </div>

                    <nav className='__nav_footer'>
                        <a target='_blank' href="https://www.linkedin.com/in/daniel-josaphat-lozada/">Linkedin</a>
                        <a target='_blank' href="https://github.com/adazol123">Github</a>
                        <a target='_blank' href="https://www.figma.com/@adazolhub">Figma</a>
                        <a target='_blank' href="https://www.behance.net/adazolhub">Behance</a>
                    </nav>
                </div>
                <a href='https://adazolhub.com' className='__copyright'>© Copyright 2022 Adazolhub.com | All rights reserved.</a>
            </div>
        </footer>
    )
}

export default FooterContact