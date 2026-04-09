import React,{useState,useEffect} from 'react'
import { Container,PostForm } from '../components'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from "../appwrite/config"


function EditForm() {
    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug)
                .then((post)=>{
                    if(post){
                        setPost(post)
                    }else{
                        navigate("/")
                    }
                })
        }
    },[slug,navigate])

  return post ? (
    <div>
        <Container>
            <div>
                <PostForm post={post}/>
            </div>
        </Container>
    </div>
  ) 
  : 
  null;
}

export default EditForm