import React, { useEffect } from 'react'
import Experience from '../components/ui/sections/resume/Experience'

type Props = {}

let skills = [
  'Figma design',
  'Website design (UI/UX)',
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
  useEffect(() => {
    const observe = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          const item = entry.target
          if (entry.isIntersecting) {
            item.classList.replace('opacity-0', 'opacity-1')
            item.classList.replace('translate-y-32', 'translate-y-0')
          }
          // else {
          //     item.classList.remove('opacity-0')
          //     item.classList.remove("translate-y-32")
          // }
        })
      },
      {
        rootMargin: '-20px'
      }
    )

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
    <section className='text-neutral-400 space-y-8 container mt-5'>
      <div className='flex justify-between items-center py-3 bg-white sticky top-14 z-30'>
        <div className='text-xs'>
          <span>Web Developer</span>
        </div>

        <a
          className='py-3 px-6 rounded-full text-white bg-neutral-700 text-xs'
          href='https://firebasestorage.googleapis.com/v0/b/daniel-lozada.appspot.com/o/resume%2FDaniel%20Lozada%20-%20SWD.pdf?alt=media&token=06b6ba32-501d-4b34-854b-812aecb4ba0c'
          target='_blank'
        >
          Download Resume
        </a>
      </div>
      <div className=' flex flex-col justify-between gap-4   w-full mx-auto mt-6'>
        <div className='intersection translate-y-32 opacity-0 flex justify-between gap-6 flex-col-reverse sm:flex-row w-full'>
          <div>
            <h3 className='text-neutral-400'>DANIEL JOSAPHAT</h3>
            <h1>LOZADA</h1>
          </div>
        </div>

        <div className='flex gap-12 flex-col xl:flex-row'>
          <div className='flex flex-col gap-8'>
            <div className='intersection translate-y-32 opacity-0 flex justify-between mt-6'>
              <div>
                <h5>About</h5>
                <div className=' mt-6'>
                  <p>
                    An aspiring Full-Stack Developer, Self-taught software
                    (web/app) developer currently learning javascript technology
                    frameworks like; Next JS, React, Nuxt JS, and Vue JS and
                    integrating them with backends, APIs, or databases. I am
                    looking for a position where I can enhance, expand, and
                    upskill my current skillsets in software development
                    (web/mobile).
                  </p>
                </div>
              </div>
              {/* <div className='w-64 h-64 flex-1'>
                        <img className='overflow-hidden w-full h-full mx-auto object-contain my-auto rounded-lg' src="/images/profile-pic.png" alt="" />
                    </div> */}
            </div>
            <div className='intersection translate-y-32 opacity-0 flex justify-between mt-6'>
              <div>
                <h5>Experiences</h5>
                <div className=' mt-6'>
                  <Experience
                    year='2022 - Present'
                    jobTitle='Junior Web Developer'
                    companyName='Remote/Work At Home'
                    companyLocation='Taguig City, Philippines'
                    jobYear='2022'
                    jobDuration='7 Months'
                  />
                  <Experience
                    year='2022 - 2022'
                    jobTitle='Personal Development'
                    companyName='Career Break'
                    companyLocation='Taguig City, Philippines'
                    jobYear='2022'
                    jobDuration='10 Months'
                    descriptions={{
                      lists: [
                        'Self-taught software (web/app) development',
                        'Web development bootcamp (Udemy Course)',
                        'Google User Experience Deign Certificate (Coursera)',
                        
                      ]
                    }}
                  />
                  <Experience
                    year='2019 - 2022'
                    jobTitle='System Engineer [Service Desk Analyst]'
                    companyName='Tata Consultancy Services [Philippines]'
                    companyLocation='Bonifacio Global City, Taguig City, Philippines'
                    jobYear='2019 - 2022'
                    jobDuration='2 Years and 5 Months'
                    descriptions={{
                      lists: [
                        'Help Desk Support',
                        'Troubleshooting Hardware and Software via Phone Call, Ticketing System, Remote Support or Live Chat.',
                        'Records, updates, or resolving incidents and requests tickets raised by the clients/users.'
                      ]
                    }}
                  />
                  <Experience
                    year='2018 - 2018'
                    jobTitle='Technical Support Intern'
                    companyName='Maralabs, Inc. of 8Layer Technologies, Inc.'
                    companyLocation='Kapitolyo, Pasig City, Philippines'
                    jobYear='2018'
                    jobDuration='3 Months'
                    descriptions={{
                      lists: [
                        'Exposed to linux technology stach (Linux, Apache, Mysql, PHP',
                        'Assembled and deploy computer network',
                        'Monitor, analyze and troubleshoot server network connectivity issues',
                        'Maintain and monitor server infrastructure',
                        'Provide technical support'
                      ]
                    }}
                  />
                </div>
              </div>
              {/* <div className='w-64 h-64 flex-1'>
                        <img className='overflow-hidden w-full h-full mx-auto object-contain my-auto rounded-lg' src="/images/profile-pic.png" alt="" />
                    </div> */}
            </div>
          </div>
          <div className='flex flex-col max-w-screen-sm gap-8'>
            <div className='mt-6 intersection translate-y-32 opacity-0'>
              <h5>Contact</h5>
              <div className='flex flex-col gap-2 mt-6'>
                <span className='opacity-50 text-sm'>Linkedin: </span>
                <a
                  href='https://linkedin.com/in/daniel-josaphat-lozada'
                  target='_blank'
                  rel='noopener'
                >
                  linkedin.com/in/daniel-josaphat-lozada
                </a>
                <span className='opacity-50 text-sm'>Personal: </span>
                <a
                  href='https://www.adazolhub.com'
                  target='_blank'
                  rel='noopener'
                >
                  www.adazolhub.com
                </a>
                <span className='opacity-50 text-sm'>Phone: </span>
                <a
                  href='mailto:dpadayao40@outlook.ph'
                  target='_blank'
                  rel='noreferrer'
                >
                  (+63) ••• ••• 1542
                </a>
              </div>
            </div>
            <div className='mt-6 intersection translate-y-32 opacity-0'>
              <h5>Skills</h5>
              <div className='flex flex-wrap gap-3  mt-6'>
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`${
                      index % 2
                        ? 'bg-neutral-600 text-neutral-200'
                        : 'bg-neutral-600/5 text-neutral-600'
                    } rounded-full px-4 py-2 whitespace-nowrap text-sm`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
