import React,{useCallback, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Button , Input , Select ,RTE} from "../index"
import { set, useForm } from 'react-hook-form'
import appwriteService from "../../appwrite/config.js"

function PostForm({post}) {

    const {register,handleSubmit , setValue , getValues , control,watch} = useForm({
        defaultValues:{
            title : post?.title || "",
            content : post?.content || "",
            slug: post?.$id || "",
            status : post?.status || "active"
        }
    })

    const navigate = useNavigate();
    const userData = useSelector((state)=> state.auth.userData);

    // data = all form values from react-hook-form
    // example : {
                // title,
                // slug,
                // content,
                // status,
                // image: FileList
                // }  that we have saved in appwrite db collection/table
    const submit = async (data)=>{

        //if post already exist then update 
        if(post){
            // Upload new image (if user selected one) || file => image
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            //remove the last image 
            if(file){
                await appwriteService.deleteFile(post.featuredImage);
            }

            //update post
            const dbPost = await appwriteService.updatePost(
                post.$id,
                {...data , featuredImage: file ? file.$id : undefined}
            )

            //if post posted then route the user to posts
            if(dbPost){
                navigate(`/post/${dbPost.$id}`);

            }
        }
        //if not file then creta new and upload
        else{
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;


            if(file){
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({...data,userId:userData.$id});

                if(dbPost){
                    navigate(`/post/${dbPost.$id}`);

                }
            }
        }
    }

    const slugTransform = useCallback((value)=>{
        if(value && typeof value === "string"){
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        }
        return "";
    },[])

    useEffect(()=>{

        const subscription = watch((value,{name})=>{  //value → current form values
                                                     // name → field that just changed
            if(name === "title"){
                setValue("slug",slugTransform(value.title),{shouldValidate : true})
            }
        });

        return ()=> subscription.unsubscribe();
    },[watch,slugTransform,setValue])
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}  // if post exists 👉 you are editing an already-created post
                                                                // so post = true and reuired become false so no need of image while upadting
                                                                //post does NOT exist 👉 you are creating a new post
                                                                //so post = false and required beccome true so it requires the mage while creating new post
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                        // It generates a URL that points to the image stored in Appwrite.
                            src={appwriteService.getFileView(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default PostForm