import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { getVisitCounts } from '../../../api/firebase';
const fetchData = async () => {
    return await getVisitCounts()
  }

const fetchVisitors = async () => {
    const data = await fetch('https://app.posthog.com/api/projects/28344/persons', {
        headers: {
          'Authorization': `Bearer phx_zg1qCtlSanOgL14gFo1VZr69MQtVq19yQEwMlesjBf4`
        }
      })
      const x = await data.json()
    return x
}
const FooterContact = () => {
    const { data } = useQuery(['visit_counts'], fetchData, { refetchOnWindowFocus: true, cacheTime: 120000 })
    // TODO: visitors -> visits counts
    const { data : visitors } = useQuery(['visitors'], fetchVisitors, { refetchOnWindowFocus: true, cacheTime: 120000 })
    
    return (
        <footer>
            <div className="__footer_contact">
                <div className='space-y-6'>
                    {/* <span className='text-neutral-400/75 text-sm font-light block'>Unique visitors: <strong className='text-neutral-500 font-light'>{data?.counts ?? '00'}</strong></span> */}
                    <span className='text-neutral-400/75 text-sm font-light'>Unique visitors: <strong className='text-neutral-500 font-light'>{visitors?.results.length ?? '00'}</strong></span>

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