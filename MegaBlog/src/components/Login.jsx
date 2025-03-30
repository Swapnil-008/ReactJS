import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            //above line returns session if user is there we will get session and if user is not there then we will not get session.
            if (session)
            {
                //we have to extract data from getCurrentUser method that's why we have to use await
                const userData = await authService.getCurrentUser()
                //if we get userData then we have to send this data to backend to verify user
                dispatch(authLogin(userData))
                //if we get user then we have to navigate to dashboard
                navigate('/')
                //here we use navigate not link because the difference between the navigate and link is we have to click on link and navigate takes us to any loaction automatically
            }
        }
        catch (error)
        {
            setError(error.message)
        }
    }
    return (
        <div className="flex items-center justify-center w-full">
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%"/>
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have an account?&nbsp;
            <Link to="/signup" className=""font-medium text-primary transition-all duration-200 hover:underline>Sign Up</Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(login)} className="mt-8">
                <div className="space-y-5">
                    <Input
                    label= "Email: " 
                    type="email"
                    placeholder="Enter your email"
                    //For every component we have to use spread register as because we are using useForm() otherwise if we use same component anywhere it will overide the register
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPattern: (value) => {  
                                // '/' to '/' is a pattern text(value) is for testing 
                                /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/.test(value) || "Email address must be a valid address"
                            }
                        }
                    })}
                    />
                    <Input
                    label="Password: "
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: true
                        //if you want add more options you can add like validations and all
                    })}
                    />
                    <Button
                    type="submit"
                    className="w-full "
                    >Sign in</Button>
                </div>
            </form>
        </div>
    )
}