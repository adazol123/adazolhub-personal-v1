import React from 'react'

const Contact = () => {
    return (
        <section className='container mx-auto text-neutral-500'>
            <div className='relative h-28 w-full overflow-hidden rounded-xl'>
                {/**
                 * Credits: Stephen Phillips
                 * @profile https://unsplash.com/@hostreviews
                 * @url https://unsplash.com/photos/3Mhgvrk4tjM
                 */}
                <img src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className='w-full h-full object-cover absolute inset-0' />
            </div>
            <div className='flex flex-col sm:flex-row-reverse gap-16'>

                <div className='p-[3px] relative rounded-xl bg-gradient-to-br from-[#AC35E4] via-[#EA197D] to-[#DE6E06] mt-10'>
                    <form className=' flex flex-col gap-4 py-6 px-4 bg-white max-w-screen-sm rounded-lg text-neutral-500'>
                        <div>
                            <h4>Set an appointment</h4>
                            <span className='text-xs text-neutral-400'>Lets find a time to connect</span>
                        </div>
                        <input type={'email'} placeholder='Email' className='sm:min-w-[360px]' />
                        <input type={'text'} placeholder='Name' />
                        <textarea placeholder='How can we help you?' />
                        <div className='text-xs flex gap-1'>
                            <span>Send to:</span>
                            <span className='text-neutral-400'>dpadayao40@outlook.ph</span>
                        </div>
                        <button className='_solid px-12 py-3 w-fit self-end' type='button'>Submit</button>
                    </form>
                </div>
                <div className='flex-1 p-6'>
                    <h4>Say hi</h4>
                    <div className='flex flex-col gap-2 '>
                        <button>Discord</button>
                        <button>Messenger</button>
                        <button>Live Chat (Beta)</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact