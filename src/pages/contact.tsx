import React from 'react'

const Contact = () => {
    return (
        <section className='container mx-auto'>
            <div className='flex flex-col sm:flex-row gap-16'>
                <div className=''>
                    Say hi
                    <div className='flex flex-col gap-2 mt-10'>
                        <button>Discord</button>
                        <button>Messenger</button>
                        <button>Live Chat (Beta)</button>
                    </div>
                </div>
                <div className='p-[3px] relative rounded-xl bg-gradient-to-br from-[#AC35E4] via-[#EA197D] to-[#DE6E06]'>
                    <form className=' flex flex-col gap-4 py-6 px-4 bg-white max-w-screen-sm rounded-lg text-neutral-500'>
                        <div>
                            <h4>Set an appointment</h4>
                            <span className='text-xs text-neutral-400'>Lets find a time to connect</span>
                        </div>
                        <input type={'email'} placeholder='Email' />
                        <input type={'text'} placeholder='Name' />
                        <textarea placeholder='How can we help you?' />
                        <div className='text-xs flex gap-1'>
                            <span>Send to:</span>
                            <span className='text-neutral-400'>dpadayao40@outlook.ph</span>
                        </div>
                        <button className='_solid px-12 py-3 w-fit self-end' type='button'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact