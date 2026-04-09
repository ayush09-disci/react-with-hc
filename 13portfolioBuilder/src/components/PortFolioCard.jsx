import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PortFolioCard({$id,title,imageId}) {
  return (
    <Link to={`/portfolio/${$id}`}>
    <div className="">
        <div className='w-full justify-center mb-4'>
            {/* //get file preview will give the url of image */}
            <img src={appwriteService.getFileView(imageId)} alt={title} className='rounded-xl'/>
        </div>
        <h2 
        className='text-xl font-bold'>
            {title}
        </h2>
    </div>
    </Link>
  )
}

export default PortFolioCard