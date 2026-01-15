import React from 'react'
import {Link,NavLink} from "react-router-dom"
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams();
  return (
    <div className='text-2xl text-center p-4 bg-gray-500'>User: {userid}</div>
  )
}

export default User 