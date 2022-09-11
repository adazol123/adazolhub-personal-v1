import { useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import { queryDocument } from './../api/firebase';

const fetchData = async () => {
    return await queryDocument()
}

const Learning = () => {

    const { data, error } = useQuery(['products'], fetchData, { refetchOnWindowFocus: false, cacheTime: 120000 })
    if (data) console.log(data)
    let [toggleDev, setToggleDev] = React.useState(false)
    return (
        <section>
            Learning
            <div>
                <button onClick={() => setToggleDev(!toggleDev)}>Toggle Devtools</button>
            </div>
            <div>
                {data?.map(value => (
                    <div key={value.product_name}>
                        <p>{value.product_name}</p>
                        <img src={value.product_image} alt={value.product_name} className='w-80 h-80 object-cover' />
                    </div>
                ))}

            </div>
            {toggleDev && <ReactQueryDevtools initialIsOpen={false} />}
        </section>
    )
}

export default Learning