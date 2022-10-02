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
                        description='Adazolhub | Shop is the redesigned and rebranded version of e-commerce clothing web-app named BSCPE Store'
                        img_url='/assets/mock-adazolhub-shop-02.png'
                        tags={['Next JS', 'Firebase', 'Redux Toolkit', 'Vercel']}
                        live_url='https://bscpe-store-beta.vercel.app'
                        repository_url='https://github.com/adazol123/adazolhub_shop'

                    />
                    <CardProject
                        title="Entrepreneurs' Portfolio"
                        description="Entrepreneurs' Portfolio, is a crypto coins market data analyzer and news provider by leveraging various API endpoints"
                        img_url='/images/mock-02.png'
                        tags={['React JS', 'Rest API', 'MongoDB', 'Crypto']}
                        live_url='https://entrepreneursportfolio.com'
                        repository_url='https://github.com/adazol123'
                        status='Live Site'
                    />
                    <CardProject
                        title="Adazolhub | Pokemon Cards"
                        description='Understanding Data fetching with API (REST API)'
                        img_url='/images/mock-03.png'
                        tags={['Next JS', 'Rest API', 'Chakra UI']}
                        live_url='https://pokemon-cards-adazol.vercel.app'
                        repository_url='https://github.com/adazol123/pokemon-cards-api-fetch'
                        status='Live Site'
                    />
                    <CardProject
                        title="BSCPE Store"
                        description='An E-commerce clothing web app (School Project for web development)'
                        img_url='/assets/bscpe-store.png'
                        tags={['Bootstrap', 'Firebase']}
                        live_url='https://bscpe-store.web.app'
                        repository_url='https://github.com/adazol123/Online-Shopping-App-with-Firebase'
                        status='Live Site'

                    />
                    <CardProject
                        title="Discord Bots"
                        description='Automating the process/task on discord server.'
                        img_url='/images/mock-04.png'
                        tags={['Node JS', 'Discord API']}
                        repository_url='https://github.com/adazol123'
                        status='Live [Discord Server]'

                    />
                    <div className='intersection translate-y-32 opacity-0 flex gap-6 justify-center items-center w-full min-h-[368px] sm:max-w-[344px] sm:min-w-[340px] lg:max-w-[460px] xl:max-w-[390px] 2xl:max-w-[480px]  relative bg-gradient-to-br from-gray-100  to-neutral-200 rounded-lg overflow-hidden'>

                        <span className='self-center justify-self-start mx-auto text-neutral-800 font-semibold text-lg'>Coming Soon</span>
                    </div>


                </div>
            </div>
        </section>
        // <Home />
    )
}

export default Projects