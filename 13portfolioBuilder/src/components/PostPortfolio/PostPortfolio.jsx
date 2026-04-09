import React,{useCallback, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import appwriteService from '../../appwrite/config'
import { set, useForm } from 'react-hook-form'
import {Button,Input,Select,RTE} from "../index"

function PostPortfolio({post}) {
    const userData = useSelector((state)=> state.auth.userData);
    const navigate = useNavigate();
    const {register,handleSubmit,setValue,getValues,watch,control} = useForm({
        defaultValues: {
            title : post?.title || "",
            slug : post?.$id || "",
            description : post?.description || "",
            github : post?.github || "",
            status : post?.status || "active",
        }
    })

    const submit = async (data)=>{
        console.log("FORM SUBMITTED", data);
        //upadte the portfolio
        if(post){
            const newImage = data.image[0] ? await appwriteService.uploadProjectImage(data.image[0]) : null;

            if(newImage){
                //delete the exietting image
                await appwriteService.deleteProjectImage(post.imageId);
            }

            const updatePost = await appwriteService.updateProject(
                post.$id,
                {...data, imageId : newImage ? newImage.$id : undefined},
            ) 
            if(updatePost){
                navigate(`/portfolio/${updatePost.$id}`);
            }
        }
        else{
            //creatin the new portfolio
            const image = await appwriteService.uploadProjectImage(data.image[0]);

            if(image){
                data.imageId = image.$id;
                const newPost = await appwriteService.createProject({...data,projectId : userData.$id});

                if(newPost){
                    navigate(`/portfolio/${newPost.$id}`);
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
    })

    useEffect(()=>{
        const subscription = watch((value,{name})=>{
            if(name === "title"){
                setValue("slug",slugTransform(value.title),{shouldValidate: true});
            }
        })
        return ()=> subscription.unsubscribe();
    },[watch,slugTransform,setValue])
  return (
    <form onSubmit={handleSubmit(submit)}>
        <div className="w-2/3 px-2">
        {/* title */}
        <Input
        label="Title :"
        placeholder = "Enter title"
        {...register("title",{
            required: true,
        })}
        />
        {/* slug */}
        <Input
        label="slug :"
        placeholder = "Enter slug"
        {...register("slug",{
            required: true,
        })}
        onInput = {(e)=> setValue("slug",slugTransform(e.currentTarget.value),{required: true})}
        />
        <RTE label="Description :" name="description" control={control} defaultValue={getValues("description")} />
        <Input
        label="github :"
        placeholder = "Enter project github repo link"
        {...register("github",{
            required: true,
        })}
        />
        </div>
        <div className="w-1/3 px-2">
            <Input
            label= "Upload Image"
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            className="mb-4"
            {...register("image",{required : !post})}
            />
            {post && (
                    <div className="w-full mb-4">
                        <img
                        // It generates a URL that points to the image stored in Appwrite.
                            src={appwriteService.getFileView(post.imageId)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
            <Select
            label="Status :"
            options={["active","inactive"]}
            {...register("status",{required: false})}
            />
                <Button type="submit" bgColor={post ? "bg-green-500" : "bg-blue-500"} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>        
        </div>
    </form>
  )
}

export default PostPortfolio

/*
title
slug
description
status active inactive
github
 */