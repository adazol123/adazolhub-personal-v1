import React from 'react'

const UXCaseStudy = () => {
    return (
        <section>
            <div className='relative h-28 w-full overflow-hidden rounded-xl'>
                {/**
                 * Credits: Amélie Mourichon
                 * @profile https://unsplash.com/@amayli
                 * @url https://unsplash.com/photos/sv8oOQaUb-o
                 */}
                <img src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" className='w-full h-full object-cover absolute inset-0' />
            </div>
            <div className='grid min-h-[calc(60vh)] place-content-center place-items-center gap-6 text-neutral-600'>

                <h4>UX Case Study</h4>
                <p className='max-w-[30ch] text-center text-neutral-400'>Currently building user interface and user experience case studies</p>
            </div></section>
    )
}

export default UXCaseStudy