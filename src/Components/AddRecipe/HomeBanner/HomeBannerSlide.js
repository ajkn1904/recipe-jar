import React from 'react';
import { IoMdRestaurant } from 'react-icons/io';

const HomeBannerSlide = ({data}) => {

    const {id, img, previous, next} = data;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='banner-image'>
        <img src={img} alt="food" className='w-screen h-[550px]' />
        </div>

        <div className="absolute flex justify-start gap-4 transform -translate-y-1/2 left-16 top-1/4">
            <h1 className='text-5xl font-bold text-white w-80'> Boiled/Steamed <br /> Fried/Baked?</h1>
        </div>

        <div className="absolute flex justify-start gap-4 transform -translate-y-1/2 w-[50%] left-16 top-2/4">
            <p className='text-white text-lg'>No matter how you cook, RECIPE JAR has many the recipes!</p>
        </div>


        <div className="absolute flex justify-start gap-4 transform -translate-y-1/2 w-[50%] left-16 top-3/4">

            <button className="btn bg-[#ff762c] btn-lg text-white hover:bg-[#d65023] my-4 text-xl"><IoMdRestaurant className='w-6 h-6 mr-2' /> View Details</button>
        </div>

        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-2">
            <a href={`#slide${previous}`} className="btn btn-circle btn-outline bg-orange-300 hover:bg-orange-400">❮</a>
            <a href={`#slide${next}`} className="btn btn-circle bg-orange-600 hover:bg-orange-800">❯</a>
        </div>
    </div>
    );
};

export default HomeBannerSlide;