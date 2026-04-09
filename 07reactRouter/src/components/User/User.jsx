import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams();
  return (
    <div className='bg-orange-500 text-xl text-black'>User id : {id}</div>
  )
}

export default User