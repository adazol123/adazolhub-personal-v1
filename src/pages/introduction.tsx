import React, { createRef, useEffect, useRef, useState } from 'react'
import { useLocation, useRoutes, useNavigate, useHref } from 'react-router-dom'
import TechStack from '../components/techstack/TechStack'
import CardOffer from '../components/ui/cards/Offer'

const Introduction = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const observe = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                const item = entry.target
                if (entry.isIntersecting) {

                    item.classList.remove('opacity-0')
                    item.classList.remove("translate-y-32")
                }
                // else {
                //     item.classList.add('opacity-0')
                //     item.classList.add("translate-y-32")
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
        <>
            <section className='text-neutral-400 space-y-8 flex'>

                <div className='col-span-10 flex flex-col gap-32'>
                    <div className='flex lg:flex-row justify-between gap-4 flex-col-reverse w-full mx-auto mt-10'>
                        <div id='introduction' className='flex flex-col gap-6 scroll-m-4'>
                            <h4 >Introduction</h4>
                            <h1 className='intersection max-w-[10ch] leading-relaxed sm:max-w-full sm:whitespace-nowrap opacity-0 transition-all duration-500 translate-y-32'>Hey there, I'm <span>Daniel</span></h1>
                            <h3 className='intersection opacity-0 transition-all duration-500 translate-y-32'  >Aspiring full-stack developer, Self-taught programmer, career shifter</h3>



                            <p className='intersection max-w-[100ch] transition-all opacity-0 translate-y-32 duration-500'>My name is Daniel Josaphat Lozada. I am a System Engineer (Service Desk Analyst) by profession where I performed technical support to company's clients through various channels such as phone-call, remote access, and live chat. And a developer as a hobby doing hands-on coding on my spare time. I recently took a career break to focus on up-skilling my knowledge in software development, self studying in various technology stack align with web/mobile app development. I am also looking for a position where I can enhance, expand, and upskill my current skillsets.</p>

                            <p className='intersection italic transition-all translate-y-32 opacity-0  duration-500'>I help business grow by crafting amazing web experiences. If you're looking for a designer and developer that likes to get stuff done. let's talk</p>

                            <div className='flex gap-2'>
                                <button type='button' className='_solid' onClick={() => navigate('resume')}>Resume</button>
                                <button type='button' className='_ghost' onClick={() => navigate('/contact')}>Let's Talk</button>
                            </div>
                        </div >
                        <div className=' w-full mx-auto max-w-[260px] sm:max-w-[530px] h-[260px] sm:h-[530px]'>
                            <img className='overflow-hidden w-full h-full mx-auto object-contain my-auto rounded-lg' src="/images/profile-pic.png" alt="" />
                        </div>
                    </div >

                    <div id='services'>
                        <h4>Services offer</h4>
                        <div className='grid lg:grid-cols-2  gap-6 mt-10 w-full '>
                            <CardOffer
                                title='Web Application Development'
                                description='I design and develop experiences that make people&apos;s lives simple. '
                                image='/images/web-app-skeleton.png'
                            />
                            <CardOffer
                                title='UI/UX Design'
                                description='I aim for user centric design approach in solving user’s problem and needs, to wireframing, prototyping up to testing.'
                                image='/images/ux-design-tools.png'
                            />
                            <CardOffer
                                title='Modern Frameworks and Typescript Support'
                                description='Typescript support for good developer experience and for scalability of code structure.'
                                image='/images/programming-language.png'
                            />
                            <CardOffer
                                title='Discord Bot & APIs Integration'
                                description='I also offer discord bot development for automation on discord servers and External API integration on your web application.'
                                image='/images/discord-bot-integration.png'
                            />
                        </div>
                    </div>
                    <div className="cta intersection translate-y-32 opacity-0 bg-gradient-to-r sm:bg-neutral-700 from-black via-neutral-800 to-neutral-400 rounded-md min-w-full mx-auto p-6 relative min-h-[200px] md:min-h-[300px] lg:min-h-[160px] overflow-hidden">
                        <img src='https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80' alt=''
                            srcSet='https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80 480w, https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80 700w' className='absolute inset-0 mix-blend-overlay md:mix w-full object-contain lg:hidden' />
                        <div className='grid place-items-start justify-start md:place-content-center md:justify-center md:place-items-center absolute inset-0  p-6
                        '>
                            <div className='place-self-end md:place-self-center gap-2 grid'>

                                <p className='max-w-[24ch] md:text-center'>Let's convert your project idea into profitable product.</p>
                                <button className=' border-white text-neutral-800 bg-neutral-100 w-fit md:mx-auto'
                                    onClick={() => navigate('/contact')}
                                >Let's Talk</button>
                            </div>
                        </div>

                    </div>
                    <div id='tech-stacks'>
                        {/* <h4 className='mb-10'>Technology Stack</h4> */}
                        <TechStack />
                        <TechStack reverse />
                    </div>
                </div>
                <div className='md:flex flex-col sticky top-16 gap-4  whitespace-nowrap self-start p-6 hidden'>
                    <a href="#introduction">Introduction</a>
                    <a href="#services">Services Offer</a>
                    <a href="#tech-stacks">Technology Stack</a>
                </div>


            </section >
        </>
    )
}

export default Introduction