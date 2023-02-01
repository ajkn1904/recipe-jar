import React from 'react';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'

const MyRecipeCard = ({ recipe }) => {

    const { _id, name, image, ingredients, cooking_description, userName, userEmail } = recipe;

    return (
        <div className="card w-[90%] sm:w-[90%] md:w-[95%] lg:w-[80%] mx-auto bg-base-100 md:card-side lg:card-side shadow-xl" key={_id}>
            <figure><img src={image} alt="book" className='w-full md:w-72 h-[370px]' /></figure>
            <div className="card-body md:w-5/12 lg:w-8/12">
                <h2 className="card-title">{name}</h2>

                <div><strong>Ingredients: </strong><span>{ingredients}.</span>

                    <div className='mt-6'>
                        <strong>Description: </strong>
                        <span>{cooking_description.slice(0, 350) + '...'}</span>
                    </div>
                </div>

                <div className="card-actions flex justify-between items-center">
                    <button className="btn bg-[#fa894d] btn-sm text-white hover:bg-[#d66223] my-4"><Link to={`/recipes/${_id}`}>View Details</Link></button>

                    <div className='flex items-center gap-5'>
                        <BiEdit className='h-10 w-10 bg-green-200 rounded-full p-2 hover:text-white hover:bg-green-800' />
                        <MdDeleteOutline className='h-10 w-10 bg-red-200 rounded-full p-2 hover:text-white hover:bg-red-700' />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MyRecipeCard;