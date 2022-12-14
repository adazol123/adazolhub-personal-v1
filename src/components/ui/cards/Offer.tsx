import React from 'react'
interface CardOfferProps {
    title: string,
    description: string,
    image?: string
}

const CardOffer = (props: CardOfferProps) => {
    return (
        <div className='intersection translate-y-32 opacity-0 flex gap-4 justify-between items-center pl-4 md:pl-8 shadow w-full rounded-2xl hover:shadow-lg border border-neutral-100 overflow-hidden'>
            <div>
                <h3 className='max-w-[30ch] text-lg md:text-xl mb-6 font-semibold'>{props.title}</h3>
                <p className=' max-w-[20ch] md:max-w-[30ch] text-sm'>
                    {props.description}
                </p>
            </div>
            <div className='w-[145px] h-[235px] relative  overflow-hidden bg-white bg-blend-lighten'>
                <img className='w-full h-full absolute object-contain bg-blend-lighten bg-white pointer-events-none' src={props.image} alt={props.title} />
                <div className=''></div>
            </div>
        </div>
    )
}

export default CardOffer