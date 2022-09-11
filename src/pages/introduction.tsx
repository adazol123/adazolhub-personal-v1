import React from 'react'
import { useLocation, useRoutes, useNavigate } from 'react-router-dom'
import TechStack from '../components/techstack/TechStack'
import CardOffer from '../components/ui/cards/Offer'

const Introduction = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className='text-neutral-400 space-y-8 flex'>

                <div className='col-span-10 flex flex-col gap-32'>
                    <div className='flex lg:flex-row justify-between gap-4 flex-col-reverse  w-full mx-auto mt-10'>
                        <div id='introduction' className='flex flex-col gap-6 scroll-m-4'>
                            <h4 >Introduction</h4>
                            <h1 className='max-w-[10ch] leading-relaxed sm:max-w-full sm:whitespace-nowrap'>Hey there, I'm <span>Daniel</span></h1>
                            <h3>Aspiring full-stack developer, Self-taught programmer, career shifter</h3>
                            <p className='max-w-[100ch]'>My name is Daniel Josaphat Lozada. Started off my career as an Associate System Engineer 3 years ago with Tata Consultancy Services, Where I performed technical support to company's clients through phone-call and remote access. Recently decided to shift career to a development field where I see my dedication and passion as an aspiring full-stack developer. Currently self studying in various technology stack align with web app development. I am also looking for a position where I can enhance, expand, and upskill my current skillsets.</p>

                            <p className='italic'>I help business grow by crafting amazing web experiences. If you're looking for a designer and developer that likes to get stuff done. let's talk</p>
                            <div className='flex gap-6'>
                                <button type='button' onClick={() => navigate('resume')}>Resume</button>
                                <button type='button' onClick={() => navigate('/contact')}>Let's Talk</button>
                            </div>
                        </div >
                        <div className=' w-full mx-auto max-w-[260px] sm:max-w-[530px] h-[260px] sm:h-[530px]'>
                            <img className='overflow-hidden w-full h-full mx-auto object-contain my-auto rounded-lg' src="/images/profile-pic.png" alt="" />
                        </div>
                    </div >
                    <div id='tech-stacks'>
                        <h4 className='mb-10'>Technology Stack</h4>
                        <TechStack />
                        <TechStack reverse />
                    </div>
                    <div id='services'>
                        <h4>Services offer</h4>
                        <div className='grid lg:grid-cols-2  gap-6 mt-10 w-fit mx-auto'>
                            <CardOffer
                                title='Web Application Development'
                                description='We design and develop experiences that make people&apos;s lives simple. '
                                image='/images/web-app-skeleton.png'
                            />
                            <CardOffer
                                title='UI/UX Design'
                                description='We aim for user centric design approach in solving user’s problem and needs, to wireframing, prototyping up to testing.'
                                image='/images/ux-design-tools.png'
                            />
                            <CardOffer
                                title='Modern Frameworks and Typescript Support'
                                description='Typescript support for good developer experience and for scalability of code structure.'
                                image='/images/programming-language.png'
                            />
                            <CardOffer
                                title='Discord Bot & APIs Integration'
                                description='We also offer discord bot development for automation and External API integration on your web application.'
                                image='/images/discord-bot-integration.png'
                            />
                        </div>
                    </div>
                </div>
                <div className='md:flex flex-col sticky top-16 gap-4  whitespace-nowrap self-start p-6 hidden'>
                    <a href="#introduction">Introduction</a>
                    <a href="#tech-stacks">Technology Stack</a>
                    <a href="#services">Services Offer</a>
                </div>


            </section >
        </>
    )
}

export default Introduction