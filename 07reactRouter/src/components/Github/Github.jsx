import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //     .then( res => res.json())
    //     .then (res => {
    //         setData(res);
    //     })
    // })

    const data = useLoaderData();
  return (
    <div className='w-screen bg-gray-600'>
        <h1  className='text-3xl  text-center text-black mb-3' >Name : <span className='text-amber-300'>{data.name}</span></h1>
        <h1 className='text-3xl  text-center text-black'>Github followers : <span className='text-amber-300'>{data.followers}</span></h1>
        <h1 className='text-3xl  text-center text-black'>Bio : <span className='text-amber-300'>{data.bio}</span></h1>
        <img className='rounded-full w-67' src={data.avatar_url} alt="img" />
    </div>
  )
}

export default GitHub


//using loader in react router
export const githubInfoLoader = async ()=>{
    const response = await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return response.json()
}