import React, { FC, PropsWithChildren } from 'react'

interface Marquee {
    children: React.ReactNode,
    placeholder?: string
}

const MarqueeIcon: FC<Marquee> = (props) => {
    return (
        <div className='__marquee_icon'>
            <span>{props.children}</span>
            {props.placeholder && <div className='__marquee_placeholder'>{props.placeholder}</div>}
        </div>
    )
}

export default MarqueeIcon