import appwriteService from "../appwrite/config.js"
import { Link } from "react-router-dom"
import React from 'react'

//we will get this prop when query from appwrite
function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
    <div className="">
        <div className='w-full justify-center mb-4'>
            {/* //get file preview will give the url of image */}
            <img src={appwriteService.getFileView(featuredImage)} alt={title} className='rounded-xl'/>
        </div>
        <h2 
        className='text-xl font-bold'>
            {title}
        </h2>
    </div>
    </Link>
  )
}

export default PostCard