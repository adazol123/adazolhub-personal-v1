import React from 'react'
import MarqueeIcon from '../ui/marquee/MarqueeIcon'
import { stacks, stacks2 } from './stack'

/**
 * @description Marquee horizontal animation infinite
 * @param reverse accepts boolean value that will reverse the direction of marquee animation if true
 * 
 */
const TechStack = ({ reverse = false }) => {

    stacks.forEach(stack => console.log(stack.icon))


    return (
        <div className='__marquee_wrapper'>
            <div className={`__marquee ${reverse ? 'animate-maarquee_loop_reverse' : 'animate-marquee_loop'}`}>
                <div className="__marquee_inner">
                    {
                        stacks.map(stack => (
                            <MarqueeIcon key={stack.id} placeholder={stack.placeholder}>
                                {stack.svg}
                            </MarqueeIcon>
                        ))
                    }

                </div>
                <div className="__marquee_inner">
                    {
                        stacks2.map(stack => (
                            <MarqueeIcon key={stack.id} placeholder={stack.placeholder}>
                                {stack.svg}
                            </MarqueeIcon>
                        ))
                    }

                </div>


            </div>
        </div>
    )
}

export default TechStack