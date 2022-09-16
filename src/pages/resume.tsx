import React from 'react'

type Props = {}

let skills = [
    'Figma design',
    "Website design (UI/UX)",
    'Web app development',
    'Discord bot development',
    'Javascript/Typescript',
    'Front-End Design',
    'Back-End Design',
    'Restful API',
    'NodeJS',
    'Chat Support',
    'Service Desk Analyst'
]

const Resume = (props: Props) => {

    return (
        <section className='text-neutral-400 space-y-8'>
            <div className='flex justify-between items-center py-3 bg-white sticky top-14'>
                <div className='text-xs'>
                    <span>Web Application Developer</span>
                </div>

                <a className='py-3 px-6 rounded-full border text-xs' href="https://firebasestorage.googleapis.com/v0/b/bscpe-store-v2.appspot.com/o/daniel-josaphat-lozada__web-app-developer.pdf?alt=media&token=1829c10b-0995-48c6-a10d-17e86d4620b8" target="_blank" rel="noopener noreferrer">Download resume</a>
            </div>
            <div className='flex flex-col justify-between gap-4   w-full mx-auto mt-10'>
                <div className='flex justify-between gap-6 flex-col-reverse sm:flex-row w-full'>
                    <div >
                        <h3 className='text-neutral-400'>DANIEL JOSAPHAT</h3>
                        <h1>LOZADA</h1>
                    </div>

                </div>
                <div className='flex justify-between mt-10'>
                    <div>

                        <h5>About</h5>
                        <div className=' mt-6'>

                            <p>
                                An aspiring Full-Stack Developer, Self-taught web application developer, and a career shifter, currently learning javascript technology frameworks like; Next JS, React, Nuxt JS, and Vue JS and integrating them with backends, APIs, or databases. I am looking for a position where I can enhance, expand, and upskill my current skillsets.
                            </p>
                        </div>
                    </div>
                    {/* <div className='w-64 h-64 flex-1'>
                        <img className='overflow-hidden w-full h-full mx-auto object-contain my-auto rounded-lg' src="/images/profile-pic.png" alt="" />
                    </div> */}
                </div>
                <div className="mt-10">
                    <h5>Profile</h5>
                    <div className='flex flex-col gap-2 mt-6'>

                        <a href="https://linkedin.com/in/daniel-josaphat-lozada" target='_blank' rel='noopener'>https://linkedin.com/in/daniel-josaphat-lozada</a>
                        <a href="https://www.adazolhub.com" target='_blank' rel='noopener'>https://www.adazolhub.com</a>
                        <a href="mailto:dpadayao40@outlook.ph" target='_blank' rel='noreferrer'>(+63) 9267621542</a>
                    </div>
                </div>
                <div className='mt-10'>
                    <h5>Skills</h5>
                    <div className='flex flex-wrap gap-3  mt-6'>
                        {skills.map((skill, index) => (
                            <div key={index} className={`${index % 2 ? 'bg-neutral-600 text-neutral-200' : 'bg-neutral-600/5 text-neutral-600'} rounded-full px-4 py-2 whitespace-nowrap text-sm`}>{skill}</div>
                        ))}
                    </div>

                </div>

                <div className=' w-full mt-10'>
                    <h5>Other Profile</h5>
                    <div className="flex flex-col sm:flex-row gap-6 mt-6">
                        <div className='p-6 bg-gradient-to-br from-neutral-800 to-neutral-600 text-white rounded-md min-h-[160px] min-w-[300px]'>
                            Github Profile
                        </div>
                        <div className='p-6 bg-gradient-to-br from-neutral-800 to-neutral-600 text-white rounded-md min-h-[160px] min-w-[300px]'>
                            Behance Profile
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume