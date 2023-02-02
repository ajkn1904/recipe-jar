import React from 'react';
import { IoMdRestaurant } from 'react-icons/io';
import { Link } from 'react-router-dom';

const HomeBannerSlide = ({data}) => {

    const {id, img, previous, next} = data;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='banner-image'>
        <img src={img} alt="food" className='w-screen h-[550px]' />
        </div>

        <div className="absolute flex justify-start gap-4 transform -translate-y-1/2 left-16 top-1/4">
            <h1 className='text-5xl font-bold text-white w-80'> Boiled/Steamed? <br /> Fried/Baked?</h1>
        </div>

        <div className="absolute flex justify-start gap-4 transform -translate-y-1/2 w-[50%] left-16 top-2/4">
            <p className='text-white text-lg'>No matter how you cook, <span className='text-xl font-semibold text-orange-200'>RECIPE JAR</span> has many the recipes!</p>
        </div>


        <div className="absolute flex justify-start gap-4 transform -translate-y-1/2 w-[50%] left-16 top-3/4">

            <button className="btn bg-[#ff762c] btn-lg text-white hover:bg-[#d65023] text-xl hover:translate-x-2"><Link to='/recipes'><IoMdRestaurant className='text-3xl' />Explore Recipes</Link> </button>
        </div>

        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-2">
            <a href={`#slide${previous}`} className="btn btn-circle btn-outline bg-orange-300 hover:bg-orange-400">❮</a>
            <a href={`#slide${next}`} className="btn btn-circle bg-orange-600 hover:bg-orange-800">❯</a>
        </div>
    </div>
    );
};

export default HomeBannerSlide;