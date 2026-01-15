import React, { useEffect, useState } from 'react'
import {Link,NavLink} from "react-router-dom"
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData();
  console.log(data);

  // const [data,setData] = useState([]);
  // useEffect(()=>{
  //   fetch(`https://api.github.com/users/hiteshchoudhary`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data)
  //   });
  // },[])

  return (
    <div className="flex flex-col gap-4">
    <img src={data.avatar_url}  className="w-56 rounded-full" alt="" />
    <div className='text-3xl'>Github follower : {data.followers}</div>
    <div className='text-3xl'>Name : {data.name}</div>
    </div>
  )
}

export default Github

// another method to fetch the detail of user from api github
export const githubInfoLoader = async()=>{
  const response = await fetch(`https://api.github.com/users/hiteshchoudhary`);
  return response.json();
}