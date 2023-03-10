import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../Hooks/useToken/useToken';

const SignIn = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInError, setSignInError] = useState('');
    const [currentSignInEmail, setCurrentSignInEmail] = useState('');
    const {userSignIn, userSignInWithProvider, loading, setLoading} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathName || '/'
    
    const [token] = useToken(currentSignInEmail);


    useEffect(() => {
        if(token){
            setLoading(false)
            navigate(from, {replace: true}); 
        }

    }, [navigate, token, from])
    



    if (loading) {
        return <button className="btn btn-ghost text-red-700 loading"></button>
    }

    const handleSignIn = (data) => {
        userSignIn(data.email, data.password)
        .then(res => {
            const user = res.user;
            console.log(user);
            setSignInError('');
            setCurrentSignInEmail(data.email)
            })
            .catch(error => {
                setSignInError(error.message);
                setLoading(false);

            })
    }


    const handleGoogleSignIn = () => {
        userSignInWithProvider(googleProvider)
        .then(res => {
            const user = res.user;
            console.log(user);
            setCurrentSignInEmail(user.email)
            //navigate(from, {replace: true});
        })
        .catch(error => {
            setLoading(false);
            console.log(error)
            setSignInError(error.message);
        });
    }



    return (
        <div className='flex justify-center items-center my-20 p-4'>
            <div className='card shadow-xl w-[95%] md:w-4/12 p-7 bg-gradient-to-r from-green-50'>
                <h1 className='text-4xl font-bold text-center my-10'>Sign in</h1>

                <form onSubmit={handleSubmit(handleSignIn)}>



                    <label className="label">
                        <span className="label-text text-lg">Email</span>
                    </label>
                    <input type="email" className="w-full my-3 input input-bordered"  {...register("email", { required: "Email is required" })} />

                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}



                    <label>
                        <span className="label-text text-lg">Password</span>
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

                        <button onClick={handleGoogleSignIn} className="w-full my-3 btn btn-outline btn-info" type="submit"><FaGoogle className='mr-2' /> <span>CONTINUE WITH GOOGLE</span></button>

                    </div>

                </form>

            </div>
        </div>
    );
};

export default SignIn;