import React, { useEffect, useState } from 'react'
import PostPortfolio from '../components/PostPortfolio/PostPortfolio';
import { useNavigate, useParams } from 'react-router-dom';
import appwriteService from '../appwrite/config';


function EditPortfolio() {
    const [post, setPost] = useState();
    const {slug} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        appwriteService.getProject(slug)
            .then((post)=>{
                if(post){
                    setPost(post);
                }
            })
    },[slug,navigate])
  return (
    <div>
        <PostPortfolio post={post}/>
    </div>
  )
}

export default EditPortfolio    