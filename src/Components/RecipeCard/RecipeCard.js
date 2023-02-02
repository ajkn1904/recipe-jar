import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const RecipeCard = ({ recipe }) => {

    const { _id, name, image, ingredients, cooking_description, userName } = recipe;



    return (
        <div data-aos="fade-up"
            data-aos-offset="10" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="false" className="bg-base-100 border shadow-xl relative">

            <figure data-aos="zoom-in" data-aos-duration="1000">
                <Link to={`/recipes/${_id}`}>
                    <img src={image} alt={name} className='w-full mx-auto h-72' />
                </Link>
            </figure>

            <div className="badge bg-gradient-to-r from-[#3c597a] to-[#41ad35] p-3 font-semibold relative bottom-64 left-52 w-[150px]">
                <FaUser className='mr-2' /> by <span className='ml-2 truncate'> {userName}</span></div>
            <div className="card-body">

                <div className='h-40'>
                    <h2 className="card-title mb-3 text-3xl">{name}</h2>

                    <p className='my-3'><strong>Ingredients: </strong>{ingredients.slice(0, 20) + '... '}</p>

                    <p className='mb-3'><strong>Description: </strong>{cooking_description.slice(0, 70) + '...  '}<small className='text-green-500'>read more</small></p>
                </div>

                <div className="card-actions h-20">
                    <button className="btn bg-[#f77834] text-white hover:bg-[#d66223] m-2 w-full text-lg" data-aos="zoom-in" data-aos-duration="1000"><Link to={`/recipes/${_id}`}>View Details</Link></button>

                </div>

            </div>
        </div>
    );
};

export default RecipeCard;