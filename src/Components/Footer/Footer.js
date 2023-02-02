import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg'

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-around items-center p-10 bg-base-200 text-base-content">
            <div>
                <img src={logo} alt="logo" className="w-14 h-14 rounded-full" />
                <Link to="/" className="mx-2 font-bold normal-case font-mono italic"><span className='text-5xl text-green-600'>R</span><span className='text-3xl '>ECIPE</span><span className='text-5xl font-semibold text-orange-600'>J<span className='text-3xl'>ar</span></span></Link>
            </div>
           
           
            <div className='flex flex-row justify-between gap-32 mt-10 md:mt-0'>
                <div className='flex flex-col'>
                    <p className="footer-title">Company</p>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>

                <div className='flex flex-col'>
                    <p className="footer-title">Legal</p>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </div>

        </footer>
    );
};

export default Footer;