import React, { createRef, useEffect, useRef, useState } from 'react'
import { useLocation, useRoutes, useNavigate, useHref } from 'react-router-dom'
import TechStack from '../components/techstack/TechStack'
import CardOffer from '../components/ui/cards/Offer'
import CardProfile from '../components/ui/cards/Profile';
import { QueryClient, useQuery } from '@tanstack/react-query';
import DeviceDetector from 'device-detector-js';
import { incrementCount } from '../api/firebase';

const fetchData = async () => {
  const dd = new DeviceDetector();
  const userAgent  = navigator.userAgent;
  const device = dd.parse(userAgent)
  return await incrementCount({ device })
}
const Introduction = () => {
    const navigate = useNavigate()
    const { data, error } = useQuery(['unique_visit'], fetchData, { refetchOnWindowFocus: false, cacheTime: 120000 })
    console.log(data)
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
            <section className='text-neutral-400 space-y-3 flex'>

                <div className='col-span-10 flex flex-col gap-16 container'>
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
                    <div id="social">
                        <h4>Social Portfolio</h4>
                        <div className="flex flex-wrap items-center justify-center w-full gap-6 mt-6 ">
                            <CardProfile
                                name='Daniel Lozada'
                                label='Github'
                                href='https://github.com/adazol123'
                                icon={
                                    <svg className='absolute right-12 -top-4 scale-150 opacity-10' width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 9C25.119 9 9 25.119 9 45C9 61.869 20.616 75.984 36.276 79.89C36.108 79.404 36 78.84 36 78.141V71.988C34.539 71.988 32.091 71.988 31.476 71.988C29.013 71.988 26.823 70.929 25.761 68.961C24.582 66.774 24.378 63.429 21.456 61.383C20.589 60.702 21.249 59.925 22.248 60.03C24.093 60.552 25.623 61.818 27.063 63.696C28.497 65.577 29.172 66.003 31.851 66.003C33.15 66.003 35.094 65.928 36.924 65.64C37.908 63.141 39.609 60.84 41.688 59.754C29.7 58.521 23.979 52.557 23.979 44.46C23.979 40.974 25.464 37.602 27.987 34.761C27.159 31.941 26.118 26.19 28.305 24C33.699 24 36.96 27.498 37.743 28.443C40.431 27.522 43.383 27 46.485 27C49.593 27 52.557 27.522 55.251 28.449C56.025 27.51 59.289 24 64.695 24C66.891 26.193 65.838 31.968 65.001 34.782C67.509 37.617 68.985 40.98 68.985 44.46C68.985 52.551 63.273 58.512 51.303 59.751C54.597 61.47 57 66.3 57 69.939V78.141C57 78.453 56.931 78.678 56.895 78.945C70.923 74.028 81 60.708 81 45C81 25.119 64.881 9 45 9Z" fill="#FAFFFE" />
                                    </svg>
                                }
                                theme='from-[#35e4d2] via-[#33848f]'

                            />
                            <CardProfile
                                name='Daniel Lozada'
                                label='Behance'
                                href='https://behance.net/adazolhub'
                                icon={
                                    <svg className='absolute right-12 -top-4 scale-150 opacity-10' width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 12C14.685 12 12 14.685 12 18V72C12 75.315 14.685 78 18 78H72C75.315 78 78 75.315 78 72V18C78 14.685 75.315 12 72 12H18ZM52.5 33H60.1699C60.9979 33 61.6699 33.672 61.6699 34.5C61.6699 35.328 60.9979 36 60.1699 36H52.5C51.672 36 51 35.328 51 34.5C51 33.672 51.672 33 52.5 33ZM26.7598 34.1543H35.1152C40.0472 34.1543 42.9902 36.5671 42.9902 40.4941C42.9902 43.1881 40.9976 45.5388 38.3906 45.9258V46.2422C41.7566 46.4882 44.2031 49.0248 44.2031 52.3008C44.2061 56.7558 40.8411 59.5781 35.4141 59.5781H26.7598C25.2358 59.5781 24 58.3424 24 56.8184V36.9141C24 35.3901 25.2358 34.1543 26.7598 34.1543ZM29.3203 38.2207V44.6895H33.3164C36.1904 44.6925 37.7578 43.5098 37.7578 41.4668C37.7578 39.4418 36.2997 38.2207 33.7617 38.2207H29.3203ZM56.8887 39.7207C62.6157 39.7207 65.9941 43.3702 65.9941 49.5352V51.0996H52.6641V51.3633C52.7331 54.2523 54.4265 56.0508 57.1055 56.0508C59.1305 56.0508 60.5204 55.3309 61.0664 54.0469H65.8418C65.0678 57.7129 61.717 60 56.959 60C51.04 60 47.5547 56.263 47.5547 49.957C47.5547 43.633 51.1107 39.7207 56.8887 39.7207ZM56.9121 43.6523C54.5331 43.6523 52.8556 45.3042 52.6816 47.8242H60.9609C60.8529 45.2532 59.3061 43.6523 56.9121 43.6523ZM29.3203 48.2871V55.5117H34.0605C37.1265 55.5117 38.7832 54.2197 38.7832 51.8438C38.7832 49.5157 37.0725 48.2871 33.9375 48.2871H29.3203Z" fill="#FAFFFE" />
                                    </svg>
                                }
                                theme='from-[#9318f8] via-[#4a2c6f]'

                            />
                            <CardProfile
                                name='Daniel Lozada'
                                label='Linkedin'
                                href='https://linkedin.com/in/daniel-josaphat-lozada'
                                icon={
                                    <svg className='absolute right-12 -top-4 scale-150 opacity-10' width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M72 12H18C14.685 12 12 14.685 12 18V72C12 75.315 14.685 78 18 78H72C75.315 78 78 75.315 78 72V18C78 14.685 75.315 12 72 12ZM32.862 66H24.012V37.524H32.862V66ZM28.347 33.453C25.494 33.453 23.187 31.14 23.187 28.293C23.187 25.446 25.497 23.136 28.347 23.136C31.191 23.136 33.504 25.449 33.504 28.293C33.504 31.14 31.191 33.453 28.347 33.453ZM66.012 66H57.168V52.152C57.168 48.849 57.108 44.601 52.569 44.601C47.964 44.601 47.256 48.198 47.256 51.912V66H38.412V37.524H46.902V41.415H47.022C48.204 39.177 51.09 36.816 55.395 36.816C64.356 36.816 66.012 42.714 66.012 50.382V66V66Z" fill="#FAFFFE" />
                                    </svg>
                                }
                                theme='from-[#48b2f3] via-[#386485]'

                            />
                            <CardProfile
                                name='Daniel Lozada'
                                label='Figma'
                                href='https://figma.com/@adazolhub'
                                icon={
                                    <svg
                                        className='absolute right-12 -top-4 scale-150 opacity-10'
                                        width="70" height="100" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 87C23.373 87 18 81.627 18 75C18 68.373 23.373 63 30 63H38.571C40.464 63 42 64.536 42 66.429V75C42 81.627 36.627 87 30 87ZM60 27H51.429C49.536 27 48 25.464 48 23.571V6.429C48 4.536 49.536 3 51.429 3H60C66.627 3 72 8.373 72 15C72 21.627 66.627 27 60 27ZM30 3H38.571C40.464 3 42 4.536 42 6.429V23.571C42 25.464 40.464 27 38.571 27H30C23.373 27 18 21.627 18 15C18 8.373 23.373 3 30 3ZM30 33H38.571C40.464 33 42 34.536 42 36.429V53.571C42 55.464 40.464 57 38.571 57H30C23.373 57 18 51.627 18 45C18 38.373 23.373 33 30 33ZM60 33C56.8174 33 53.7652 34.2643 51.5147 36.5147C49.2643 38.7652 48 41.8174 48 45C48 48.1826 49.2643 51.2348 51.5147 53.4853C53.7652 55.7357 56.8174 57 60 57C63.1826 57 66.2348 55.7357 68.4853 53.4853C70.7357 51.2348 72 48.1826 72 45C72 41.8174 70.7357 38.7652 68.4853 36.5147C66.2348 34.2643 63.1826 33 60 33V33Z" fill="#FAFFFE" />
                                    </svg>

                                }
                                theme='from-amber-300 via-amber-700'


                            />
                            <CardProfile
                                name='Daniel Lozada'
                                label='HackerRank'
                                href='https://www.hackerrank.com/adazolhub'
                                icon={
                                    <svg className='absolute right-12 -top-4 scale-150 opacity-10' width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M37.773 55.377C37.221 54.519 36.27 54 35.25 54H21.75C20.73 54 19.779 54.519 19.227 55.377L12.477 65.877C11.844 66.867 11.844 68.133 12.477 69.123L19.227 79.623C19.779 80.481 20.73 81 21.75 81H35.25C36.27 81 37.221 80.481 37.773 79.623L44.523 69.123C45.156 68.133 45.156 66.867 44.523 65.877L37.773 55.377ZM70.773 40.38C70.221 39.519 69.27 39 68.25 39H54.75C53.73 39 52.779 39.519 52.227 40.377L45.477 50.877C44.844 51.867 44.844 53.133 45.477 54.123L52.227 64.623C52.779 65.481 53.73 66 54.75 66H68.25C69.27 66 70.221 65.481 70.773 64.623L77.523 54.123C78.159 53.133 78.159 51.867 77.523 50.877L70.773 40.38ZM37.773 22.38C37.221 21.519 36.27 21 35.25 21H21.75C20.73 21 19.779 21.519 19.227 22.38L12.477 32.88C11.844 33.867 11.844 35.136 12.477 36.123L19.227 46.623C19.779 47.481 20.73 48 21.75 48H35.25C36.27 48 37.221 47.481 37.773 46.623L44.523 36.123C45.156 35.136 45.156 33.867 44.523 32.88L37.773 22.38ZM52.227 31.623C52.779 32.481 53.73 33 54.75 33H68.25C69.27 33 70.221 32.481 70.773 31.623L77.523 21.123C78.159 20.136 78.159 18.867 77.523 17.88L70.773 7.38C70.221 6.519 69.27 6 68.25 6H54.75C53.73 6 52.779 6.519 52.227 7.377L45.477 17.877C44.844 18.864 44.844 20.133 45.477 21.12L52.227 31.623Z" fill="#FAFFFE" />
                                    </svg>
                                }
                                theme='from-[#48f381] via-[#388560]'

                            />
                        </div>
                    </div>
                    <div className="cta intersection translate-y-32 opacity-0 bg-gradient-to-r sm:bg-neutral-700 from-black via-neutral-800 to-neutral-400 rounded-2xl min-w-full mx-auto p-6 relative min-h-[200px] md:min-h-[300px] lg:min-h-[160px] overflow-hidden">
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
                {/* <div className='md:flex flex-col sticky top-16 gap-4  whitespace-nowrap self-start p-6 hidden'>
                    <a href="#introduction">Introduction</a>
                    <a href="#services">Services Offer</a>
                    <a href="#social">Other Social Profile</a>
                    <a href="#tech-stacks">Technology Stack</a>
                </div> */}



            </section >
        </>
    )
}

export default Introduction