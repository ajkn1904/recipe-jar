import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg'
import { AuthContext } from '../Context/AuthProvider';
import { FaUser } from 'react-icons/fa';
import Headroom from 'react-headroom';

const Header = () => {

    const { user, userSignOut } = useContext(AuthContext);

    const handleSignOut = () => {
        userSignOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const menu = <>

        <li><Link to='/' className='btn btn-ghost rounded font-semibold text-black text-lg hover:bg-orange-500 hover:text-white'>Home</Link></li>
        <li><Link to='/recipes' className='btn btn-ghost rounded font-semibold text-black text-lg hover:bg-orange-500 hover:text-white'>Recipes</Link></li>
        <li><Link to='/myRecipes' className='btn btn-ghost rounded font-semibold text-black text-lg hover:bg-orange-500 hover:text-white'>My Recipes</Link></li>
        <li><Link to='/addRecipe' className='btn btn-ghost rounded font-semibold text-black text-lg hover:bg-orange-500 hover:text-white'>Add Recipe</Link></li>

        {
            user?.uid ?
                <>
                    <li><Link to='/' onClick={handleSignOut} className='btn btn-ghost rounded font-semibold text-black text-lg hover:bg-orange-500 hover:text-white' >Sign Out</Link></li>
                </>
                :
                <>
                    <li><Link to='/signIn' className='btn btn-ghost rounded font-semibold text-black text-lg hover:bg-orange-500 hover:text-white'>Sign In</Link></li>
                    <li><Link to='/signUp' className='btn btn-ghost rounded font-semibold text-black text-lg hover:bg-orange-500 hover:text-white'>Sign Up</Link></li>
                </>
        }

    </>


    return (

        <Headroom style={{ WebkitTransition: 'all .5s ease-in-out', MozTransition: 'all .5s ease-in-out', OTransition: 'all .5s ease-in-out', transition: 'all .5s ease-in-out' }}>

            <div className="navbar bg-green-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-50 rounded-box w-52">

                            {menu}


                        </ul>
                    </div>


                    <img src={logo} alt="logo" className="w-14 h-14 rounded-full" />
                    <Link to="/" className="mx-2 font-bold normal-case font-mono italic"><span className='text-5xl text-green-600'>R</span><span className='text-3xl '>ECIPE</span><span className='text-5xl font-semibold text-orange-600'>J<span className='text-3xl'>ar</span></span></Link>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                {
                    user?.uid ?
                        <div className="navbar-end w-5/12 mr-3">
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                                    {
                                        user?.photoURL ?
                                            <img title={user?.displayName} src={user.photoURL} alt="" />
                                            :
                                            <FaUser title={user?.displayName} className='m-auto text-4xl text-orange-600' />
                                    }
                                </div>
                            </div>
                        </div>
                        :
                        <></>
                }

            </ div>
        </Headroom>
    );
};

export default Header;