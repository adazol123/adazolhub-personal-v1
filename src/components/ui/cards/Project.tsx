import React, { Fragment } from 'react'

type Optional = {
    tags: string[],
    live_url: string,
    repository_url: string,
    status: string
}

type Props = {
    title: string,
    description: string,
    img_url: string
}

const CardProject = (props: Props & Partial<Optional>) => {
    return (
        <div className='intersection translate-y-32 opacity-0 flex gap-6 flex-col-reverse md:flex-row justify-between w-full min-h-[368px] sm:max-w-[344px] sm:min-w-[340px] lg:max-w-[460px] xl:max-w-[390px] 2xl:max-w-[480px]  relative bg-gradient-to-t from-gray-900  via-neutral-900 rounded-lg overflow-hidden'>
            <img src={props.img_url} alt={props.title} className='absolute w-full inset-y-0 left-0 object-cover  mix-blend-multiply ' />
            <div className='absolute  w-full h-fit bottom-0 px-6 py-6 md:py-8 space-y-3'>
                {props.tags?.length && <div className='flex gap-1 mb-1 '>
                    {
                        props.tags.map((tag, _index) => (
                            <span key={_index} className='text-[0.7rem] px-3 py-1 rounded-full bg-white/20 text-neutral-100 '>{tag}</span>
                        ))
                    }
                </div>}
                <div className='flex flex-col gap-1'>
                    <p className='text-white'>{props.title}</p>
                    <p className='text-sm opacity-75 max-w-[80%] mb-4'>{props.description}</p>
                </div>

                {props.live_url ? <div className='flex gap-3 flex-wrap w-fit '>
                    <a href={props.live_url} rel='noreferrer' target='_blank' className='text-sm w-fit whitespace-nowrap bg-white text-black/80 px-6 py-2 rounded-full'>Visit Site</a>
                    <a href={props.repository_url} rel='noreferrer' target='_blank' className='text-sm whitespace-nowrap w-fit px-6 py-2 rounded-full border border-neutral-400/10'>Repository (Github)</a>
                </div> :
                    <div className='flex gap-3 flex-col sm:flex-row w-fit '>
                        <a href={props.repository_url} rel='noreferrer' target='_blank' className='text-sm w-fit bg-white text-black/80 px-6 py-2 rounded-full '>Repository (Github)</a>

                    </div>}
            </div>

            {
                props.status ?
                    <button className='absolute bg-gradient-to-br  from-[#EA197D]/90 to-[#DE6E06]/90 backdrop-blur-[1px] h-10 w-fit top-0 right-0 text-white rounded-none border-none rounded-bl-2xl px-12 py-2 shadow-md shadow-orange-900/50'>
                        <span className='text-xs'>{props.status}</span>
                    </button>
                    :
                    <button className='absolute bg-gradient-to-br  from-[#e6ce15] to-[#DE6E06] backdrop-blur-[1px] h-10 w-fit top-0 right-0 text-white rounded-none border-none rounded-bl-2xl px-12 py-2 shadow-md shadow-orange-900/50'>
                        <span className='text-xs'>On progress</span>
                    </button>

            }
        </div>


    )
}

export default CardProject