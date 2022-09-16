import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { queryDocument } from '../api/firebase'

type Props = {}
const fetchData = async () => {
  return await queryDocument()
}
const LearningLayout = (props: Props) => {
  const { data, error } = useQuery(['products'], fetchData, { refetchOnWindowFocus: false, cacheTime: 120000 })
  if (data) console.log(data)
  return (
    <div>ProjectLayout

      <div>
        {data?.map(value => (
          <div key={value.product_id}>
            <p>{value.product_name}</p>
            <img src={value.product_image} alt={value.product_name} className='w-80 h-80 object-cover' />
          </div>
        ))}

      </div>
    </div>
  )
}

export default LearningLayout