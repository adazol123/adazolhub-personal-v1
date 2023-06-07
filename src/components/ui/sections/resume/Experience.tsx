import React, { ReactFragment, ReactNode } from 'react'

type Props = {
  year: string
  jobTitle: string
  companyName: string
  companyLocation: string
  jobYear: string
  jobDuration: string
  descriptions?: {
    lists: Array<string>
  }
  children?: ReactFragment
}

const Experience = (props: Props) => {
  const {
    year,
    jobTitle,
    companyLocation,
    companyName,
    jobYear,
    jobDuration,
    descriptions,
    children
  } = props

  return (
    <div className='flex gap-4 my-6'>
      <span className='whitespace-nowrap w-[120px]'>{year}</span>
      <div>
        <h3 className='text-base font-semibold text-neutral-600'>{jobTitle}</h3>
        <h3 className='text-base font-light text-neutral-600'>
          ({companyName})
        </h3>
        <span className='text-neutral-400 font-light text-sm'>
          {companyLocation}
        </span>
        <br />
        <span className='text-neutral-400 font-light text-sm'>{jobYear} </span>
        <span className='text-neutral-400 font-light text-sm'>
          ({jobDuration})
        </span>

        {descriptions ? (
          <p className='mt-2'>
            <ul>
              {descriptions.lists.map((x, index) => {
                return <li key={index} className='max-w-[60ch]'>{x}</li>
              })}
            </ul>
          </p>
        ) : null}
        {children}
      </div>
    </div>
  )
}

export default Experience
