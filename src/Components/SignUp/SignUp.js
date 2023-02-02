import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../Hooks/useToken/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { userSignUp, userSignInWithProvider, loading, setLoading, userUpdateProfile } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [signUpError, setSignUpError] = useState('');
    const [currentSignUpEmail, setCurrentSignUpEmail] = useState('');
    const navigate = useNavigate();

    const [token] = useToken(currentSignUpEmail);


    useEffect(() => {
        if (token) {
            setLoading(false);
            navigate('/')
        };
    }, [token, navigate])


    if (loading) {
        return <button className="btn btn-ghost text-red-700 loading"></button>
    }




    const storeUserDataInDB = (name, email) => {
        const user = {
            name, email
        };
        console.log(user)

        fetch('http://localhost:5000/users',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                //navigate('/');
                //setLoading(false);
                setCurrentSignUpEmail(email)
            })

    }



    const handleProfile = (data) => {

        const profile = {
            displayName: data.name
        }
        userUpdateProfile(profile)
            .then(() => {
                //navigate('/');
                storeUserDataInDB(data.name, data.email);
            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message);
                setLoading(false);
            })
    }


    const handleSignUp = data => {

        if (data.length < 6) {
            setSignUpError('Password must be at least 6 character long.');
            return setSignUpError;
        }

        if (data.password !== data.confirmPassword) {
            setSignUpError('Your password did not match.')
            return setSignUpError;
        }

        setSignUpError('');

        userSignUp(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSignUpError('');
                toast.success("Sign Up Successful")
                handleProfile(data);
            })
            .catch(error => {
                setSignUpError(error.message);
                console.error(error);
                setLoading(false);
            })

    }




    const handleGoogleBtn = () => {
        userSignInWithProvider(googleProvider)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success("Sign Up Successful");
                storeUserDataInDB(user.displayName, user.email);
            })
            .catch(err => {
                setSignUpError(err.message);
            });
    }






    return (
        <div className='flex justify-center items-center my-20 p-4'>

            <div className='card shadow-xl w-96 p-7'>
                <h1 className='text-xl font-bold text-center my-10'>Register Now</h1>

                <form onSubmit={handleSubmit(handleSignUp)}>

                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" className="w-full my-3 input input-bordered"  {...register("name")} />




                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" className="w-full my-3 input input-bordered"  {...register("email", { required: "Email is required" })} />

                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}



                    <label>
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder='Password' className="w-full my-3 input input-bordered"  {...register("password",
                        {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be at least 6 character long' },

                        })} />

                    {errors.password && <p className='text-error'>{errors.password?.message}</p>}



                    <label>
                        <span className="label-text">Re-type Password</span>
                    </label>
                    <input type="password" placeholder='Re-type Password' className="w-full my-3 input input-bordered"  {...register("confirmPassword",
                        {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be at least 6 character long' }
                        })} />

                    {errors.confirmPassword && <p className='text-error'>{errors.confirmPassword?.message}</p>}


                    <small className='text-red-600'>{signUpError}</small>



                    <div className="flex flex-col w-full border-opacity-50">

                        <button className="w-full my-3 btn bg-[#fa894d] text-white hover:bg-[#d66223]" type="submit">Sign Up</button>
                        <small>Already have an account? <Link to="/signIn" className='text-primary'>Sign in</Link></small>

                        <div className="divider">OR</div>

                        <button onClick={handleGoogleBtn} className="w-full my-3 btn btn-outline btn-info" type="submit"><FaGoogle className='mr-2' /> <span>CONTINUE WITH GOOGLE</span></button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default SignUp;