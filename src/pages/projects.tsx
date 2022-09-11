import React from 'react'
import Home from '.'

const Projects = () => {
    return (
        <section className='text-neutral-400 space-y-8'>
            <div className='flex lg:flex-row justify-between gap-4 flex-col-reverse  w-full mx-auto mt-2 mb-24'>
                <div>
                    <h4>Project</h4>
                    <p className='max-w-[100ch] mt-4'>Here are some of my project showcase during my learning journey as web developer.</p>
                </div>
                <div className='relative h-28 w-full overflow-hidden rounded-xl'>

                    <img src="https://images.unsplash.com/photo-1501959181532-7d2a3c064642?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80" alt="" className='w-full h-full object-cover absolute inset-0' />
                </div>
                {/* <p className='absolute bottom-0 left-0 z-10 h-60 text-black'>Project</p> */}

            </div>
            <div>

                <div className='flex flex-col gap-24'>
                    <div className='flex gap-6 flex-col md:flex-row justify-between'>
                        <div className='w-fit'>
                            <h1>Adazolhub</h1>
                            <p>Adazolhub is a concept software development services</p>

                            <h3>Hello</h3>
                            <div className='flex gap-2 flex-col lg:flex-row w-fit'>
                                <button>Source Code</button>
                                <button>Design Process</button>
                                <button>Live Site</button>

                            </div>
                        </div>
                        <img src='/images/mock-01.png' alt='' className='w-full md:w-[40vw]' />
                    </div>
                    <div className='flex gap-6 flex-col-reverse md:flex-row justify-between'>
                        <img src='/images/mock-02.png' alt='' className='w-full md:w-[40vw]' />
                        <div className='w-fit'>
                            <h1>Entrepreneurs' Portfolio</h1>
                            <p>Adazolhub is a concept software development services</p>

                            <h3>Hello</h3>
                            <div className='flex gap-6 flex-col md:flex-row w-fit'>
                                <button>Source Code</button>
                                <button>Design Process</button>
                                <button>Live Site</button>

                            </div>
                        </div>

                    </div>
                    <div className='flex gap-6 flex-col md:flex-row justify-between'>
                        <div className='w-fit'>
                            <h1>Adazolhub | shop</h1>
                            <p>Adazolhub is a concept software development services</p>

                            <h3>Hello</h3>
                            <div className='flex gap-6 flex-col md:flex-row w-fit'>
                                <button>Source Code</button>
                                <button>Design Process</button>
                                <button>Live Site</button>

                            </div>
                        </div>
                        <img src='/images/mock-03.png' alt='' className='w-full md:w-[40vw]' />

                    </div>
                    <div className='flex gap-6 flex-col-reverse md:flex-row justify-between'>
                        <img src='/images/mock-04.png' alt='' className='w-full md:w-[40vw]' />
                        <div className='w-fit'>
                            <h1>Discord Bots</h1>
                            <p>Automatic some of the process task on discord server.</p>

                            <h3>Hello</h3>
                            <div className='flex gap-6 flex-col md:flex-row w-fit'>
                                <button>Source Code</button>
                                <button>Design Process</button>
                                <button>Live Site</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        // <Home />
    )
}

export default Projects