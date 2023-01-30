import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg'

const Header = () => {

    const menu = <>

        <li><Link to='/' className='btn btn-ghost rounded font-semibold'>Home</Link></li>
        <li><Link to='/recipes' className='btn btn-ghost rounded font-semibold'>Recipes</Link></li>
        <li><Link to='/myRecipes' className='btn btn-ghost rounded font-semibold'>MyRecipes</Link></li>

        <li><Link to='/signIn' className='btn btn-ghost rounded font-semibold'>Sign In</Link></li>
        <li><Link to='/signUp' className='btn btn-ghost rounded font-semibold'>Sign Up</Link></li>

        <li><Link to='/' className='btn btn-ghost rounded font-semibold' >Sign Out</Link></li>

    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    
                        {menu}


                    </ul>
                </div>


                <img src={logo} alt="logo" className="w-14 h-14 rounded-full" />
                <Link to="/" className="mx-2 font-bold normal-case text-xl font-serif italic">Recipe Jar</Link>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end w-5/12">
                <p className="text-xl font-serif hidden sm:hidden md:hidden lg:block">Name</p>
            </div>

        </div>
    );
};

export default Header;