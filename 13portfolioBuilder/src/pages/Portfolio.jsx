import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import { Button } from '../components'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import parse  from 'html-react-parser'

function Portfolio() {

    const [post, setPost] = useState();
    const {slug} = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state)=> state.auth.userData);

    const isAuthor = post && userData ? (post.projectId === userData.$id) : false;

    useEffect(()=>{
        appwriteService.getProject(slug)
            .then((post)=>{
                if(post){
                    setPost(post);
                }
            })
    },[slug,navigate])
    

    const deletePost = async()=>{
        appwriteService.deleteProject(post.$id)
            .then((status)=>{
                if(status){
                    appwriteService.deleteProjectImage(post.imageId)
                    navigate("/")
                }
            })
    }

  return post ? (
    <div>
        <div>
            <img src={appwriteService.getFileView(post.imageId)} alt={post.title} />

            {isAuthor &&
            <div>
                <Link to={`/edit-portfolio/${post.$id}`}>
                    <Button type='submit' bgColor="bg-green-500">
                        Edit Post
                    </Button>
                </Link>
                <Button onClick={deletePost}>
                    Delete
                </Button>
            </div>
            }
        </div>
        <div>
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p>{parse(post.description)}</p>
            <Link to={`${post.github}`}>{post.github}</Link>
        </div>
    </div>
  ) : null;
}

export default Portfolio