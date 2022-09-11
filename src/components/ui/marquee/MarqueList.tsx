import React, { FC, PropsWithChildren } from 'react'
import MarqueeIcon from './MarqueeIcon'

interface MarqueList {
    data: {
        placeholder: string,
        icon: React.ReactNode
    }
}

const MarqueList : FC<PropsWithChildren> = (props) => {
  return (
    <div className="__marquee_list">
        <MarqueeIcon placeholder=''>
            {props.children}
        </MarqueeIcon>
    </div>
  )
}

export default MarqueList