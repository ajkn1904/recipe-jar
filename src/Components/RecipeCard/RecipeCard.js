import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {

    const { _id, name, image, cooking_description, userName } = recipe;


    return (
        <div className="bg-base-100 border border-gray-400 shadow-xl relative">

            <figure><img src={image} alt={name} className='w-full mx-auto h-72' /></figure>

            <div className="badge bg-gradient-to-r from-[#3c597a] to-[#41ad35] p-3 font-semibold relative bottom-64 left-60">
                <FaUser className='mr-2' /> by {userName}</div>
            <div className="card-body">

                <h2 className="card-title mb-6">{name}</h2>

                <p>{cooking_description.slice(0, 70) + '...'}</p>

                <div className="card-actions">
                    <button className="btn bg-[#fa894d] text-white hover:bg-[#d66223] my-8 mx-auto"><Link to={`/recipes/${_id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;