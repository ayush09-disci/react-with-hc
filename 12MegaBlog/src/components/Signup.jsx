import { useForm } from "react-hook-form";
import {Button,Logo,Input} from "./index"
import { useNavigate } from "react-router-dom";
import React,{useState} from "react";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { login as authLogin } from "../store/authSlice";
import { Link } from "react-router-dom";

function SignUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const {register,handleSubmit} = useForm();

    const create  = async (data)=>{
        try {
            const session = await authService.createAccount(data);
            if(session){
                const userData = await authService.getCurrentUser();
                if(userData){
                    dispatch(authLogin(userData))
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            {/* logo  */}
            <div className="mb-2 flex justify-center">
                                <span className="inline-block w-full max-w-[100px]">
                                    <Logo width="200px" />
                                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign up to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Already have an account?&nbsp; 
                <Link 
                to={"/login"}
                className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Signin
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form  
            onSubmit={handleSubmit(create)}
            >
                <div className="space-y-5">
                    {/* //full name */}
                <Input
                label="Fullname :"
                placeholder = "Enter your fullname"
                type = "text"
                {...register("name",{
                    required: true
                })}
                />
                {/* // email */}
                <Input
                label = "Email :"
                placeholder = "Enter your email"
                type="email"
                {...register("email",{
                    required:true,
                    pattern:{
                        value : /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ ,
                        message : "Please enter the valid email"
                    }
                })}
                />
                {/* // Password */}
                <Input
                label = "Password :"
                placeholder="Enter password"
                type = 'password'
                {...register("password",{
                    required: true
                })}
                />
                <Button
                className="w-full"
                type="submit"
                >SignUp</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp