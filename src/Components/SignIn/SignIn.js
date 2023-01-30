import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignIn = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInError, setSignInError] = useState('');

    const handleSignIn = data => {
        console.log(data)
    }


    return (
        <div className='flex justify-center items-center my-20 p-4'>
            <div className='card shadow-xl w-96 p-7'>
                <h1 className='text-xl font-bold text-center my-10'>signIn Now</h1>

                <form onSubmit={handleSubmit(handleSignIn)}>



                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" className="w-full my-3 input input-bordered"  {...register("email", { required: "Email is required" })} />

                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}



                    <label>
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" className="w-full my-3 input input-bordered"  {...register("password",
                        {
                            required: "Password is required"
                        })} />

                    {errors.password && <p className='text-error'>{errors.password?.message}</p>}



                    <small className='text-red-600'>{signInError}</small>



                    <div className="flex flex-col w-full border-opacity-50">

                    <button className="w-full my-3 btn bg-[#fa894d] text-white hover:bg-[#d66223]" type="submit">Sign In</button>
                        <small>Have no account? <Link to="/register" className='text-primary'>Sign Up</Link></small>

                        <div className="divider">OR</div>

                        <button className="w-full my-3 btn btn-outline btn-info" type="submit"><FaGoogle className='mr-2' /> <span>CONTINUE WITH GOOGLE</span></button>

                    </div>

                </form>

            </div>
        </div>
    );
};

export default SignIn;