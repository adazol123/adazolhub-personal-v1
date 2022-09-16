import { useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { queryDocument } from './../api/firebase';
import { AnimatePresence, motion } from 'framer-motion';
const fetchData = async () => {
    return await queryDocument()
}

let links = {
    javascript: [
        {
            name: 'Zustand',
            url: 'zustand'
        },
    ],
    animation: [

        {
            name: 'Form Stepper',
            url: 'form-stepper'
        },
    ]
}

const Learning = () => {
    const navigate = useNavigate()
    const { data, error } = useQuery(['products'], fetchData, { refetchOnWindowFocus: false, cacheTime: 120000 })
    if (data) console.log(data)
    let [toggleList, setToggleList] = React.useState(false)
    return (
        <div>

            <aside className='flex flex-col gap-6 md:hidden z-40 sticky container top-14 mx-auto px-6 py-3 h-fit bg-white w-full text-xs drop-shadow-sm sm:drop-shadow-none transition-all'>

                <button className='w-fit' onClick={() => setToggleList(!toggleList)}>
                    {toggleList ? 'Collapse' : 'Expand'}  <span className={toggleList ? 'inline-block rotate-90' : 'inline-block rotate-0'}> &gt;</span>
                </button>
                <AnimatePresence mode='sync' initial={false}>
                    {toggleList && <motion.div layout className='flex flex-col gap-6'>
                        <div className="flex flex-col gap-1">
                            <h5 className='ml-2'>Getting Started</h5>
                            <button className='link'
                                onClick={() => {
                                    navigate('')
                                    setToggleList(false)
                                }}
                            >Learning</button>
                        </div>
                        <div className='flex flex-col gap-1'>

                            <h5 className='ml-2'>General</h5>
                            {links.javascript.map((link, index) => (
                                <button key={index} className='link' onClick={() => {
                                    navigate(link.url)
                                    setToggleList(false)
                                }}>{link.name}</button>
                            ))}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h5 className='ml-2'>Animation</h5>
                            {links.animation.map((link, index) => (
                                <button key={index} className='link' onClick={() => {
                                    navigate(link.url)
                                    setToggleList(false)
                                }}>{link.name}</button>
                            ))}
                        </div>

                    </motion.div>}
                </AnimatePresence>
            </aside>
            <section className='flex flex-col mt-16 text-neutral-400'>
                <h4>Learning</h4>

                <div className='flex gap-6 mt-10'>

                    <div className='min-w-[160px] hidden md:flex flex-col gap-6 sticky top-16 self-start'>
                        <div className="flex flex-col gap-1">
                            <h5 className='ml-2'>Getting Started</h5>
                            <button className='link'
                                onClick={() => {
                                    navigate('')
                                    setToggleList(false)
                                }}
                            >Learning</button>
                        </div>
                        <div className='flex flex-col gap-1'>

                            <h5 className='ml-2'>General</h5>
                            {links.javascript.map((link, index) => (
                                <button key={index} className='link' onClick={() => navigate(link.url)}>{link.name}</button>
                            ))}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h5 className='ml-2'>Animation</h5>
                            {links.animation.map((link, index) => (
                                <button key={index} className='link' onClick={() => navigate(link.url)}>{link.name}</button>
                            ))}
                        </div>
                    </div>
                    <div className="w-full">
                        <Outlet />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Learning