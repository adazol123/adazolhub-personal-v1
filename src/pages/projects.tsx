import React, { useEffect } from 'react'
import Home from '.'
import CardProject from '../components/ui/cards/Project'

const Projects = () => {
    useEffect(() => {
        const observe = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                const item = entry.target
                if (entry.isIntersecting) {

                    item.classList.replace('opacity-0', 'opacity-1')
                    item.classList.replace("translate-y-32", "translate-y-0")
                }
                // else {
                //     item.classList.remove('opacity-0')
                //     item.classList.remove("translate-y-32")
                // }
            })
        }, {
            rootMargin: '-20px'
        })

        let para = document.querySelectorAll('.intersection')
        para.forEach(par => {
            observe.observe(par)
        })
        return () => {
            para.forEach(par => {
                observe.unobserve(par)
            })
        }
    }, [])

    return (
        <section className='text-neutral-400 space-y-8'>
            <div className='intersection translate-y-32 opacity-0 flex lg:flex-row justify-between gap-4 flex-col-reverse  w-full mx-auto mt-2 mb-24'>
                <div>
                    <h4>Project</h4>
                    <p className='max-w-[100ch] mt-4'>Here are some of my project showcase during my learning journey as web developer.</p>
                </div>
                <div className='relative h-28 w-full overflow-hidden rounded-xl'>
                    {
                        /**
                         * @credits Mohammad Rahmani
                         * @profile https://unsplash.com/@afgprogrammer
                         * @url https://unsplash.com/photos/FzRC1FO1KFo
                         */
                    }
                    <img src="https://images.unsplash.com/photo-1607799467885-2c1eb73005bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className='w-full h-full object-cover absolute inset-0' />
                </div>
                {/* <p className='absolute bottom-0 left-0 z-10 h-60 text-black'>Project</p> */}

            </div>
            <div className=''>

                <div className='flex flex-wrap gap-6 mx-auto'>
                    <CardProject
                        title="Adazolhub | shop"
                        description='Adazolhub is a concept software development services'
                        img_url='/images/mock-03.png'
                        tags={['Next JS', 'Firebase', 'Chakra UI']}

                    />
                    <CardProject
                        title="Entrepreneurs' Portfolio"
                        description='Adazolhub is a concept software development services'
                        img_url='/images/mock-02.png'
                        tags={['Next JS', 'Firebase', 'Redux Toolkit']}
                        live_url='https://entrepreneursportfolio.com'
                    />
                    <CardProject
                        title="Discord Bots"
                        description='Automating the process/task on discord server.'
                        img_url='/images/mock-04.png'
                        tags={['Node JS', 'Discord API']}
                        live_url='https://github/com/adazol123'
                    />


                </div>
            </div>
        </section>
        // <Home />
    )
}

export default Projects