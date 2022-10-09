import React from 'react'

type Props = {
    href: string,
    label: string,
    name: string,
    icon: React.ReactNode,
    theme: string
}

const CardProfile = (props: Props) => {
    return (
        <a target='_blank' href={props.href}
            className={['p-6 relative bg-gradient-to-br  to-[#292420] text-white rounded-2xl min-h-[160px] min-w-[300px] max-w-[380px] w-full overflow-hidden intersection translate-y-32 opacity-0 scale-100 hover:scale-105 transition-all', props.theme].join(' ')}>
            <span className='opacity-50'>{props.label}</span>
            {props.icon}
            <div className='absolute flex flex-col items-end m-3 bottom-3 right-2'>
                <h4>
                    {props.name}
                </h4>
                <span className='text-[0.65rem] opacity-30'>{props.href.slice(8)}</span>
            </div>
        </a>
    )
}

export default CardProfile