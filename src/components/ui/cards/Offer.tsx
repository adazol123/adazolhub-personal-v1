import React from 'react'
interface CardOfferProps {
    title: string,
    description: string,
    image?: string
}

const CardOffer = (props: CardOfferProps) => {
    return (
        <div className='flex gap-4 items-center pl-4 md:pl-8 shadow w-fit rounded-md hover:shadow-lg border border-neutral-100'>
            <div>
                <h3 className='max-w-[20ch] text-lg md:text-xl mb-6 font-semibold'>{props.title}</h3>
                <p className=' max-w-[20ch] md:max-w-[30ch] text-sm'>
                    {props.description}
                </p>
            </div>
            <div className='w-[165px] h-[235px] relative  overflow-hidden bg-white bg-blend-lighten'>
                <img className='w-full h-full absolute object-contain bg-blend-lighten bg-white pointer-events-none' src={props.image} alt={props.title} />
                <div className=''></div>
            </div>
        </div>
    )
}

export default CardOffer