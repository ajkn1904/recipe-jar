import React from 'react';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'

const MyRecipeCard = ({ recipe, setEditRecipe, handleDelete }) => {

    const { _id, name, image, ingredients, cooking_description, status } = recipe;


    const handleRecipe = data => {
        setEditRecipe(data)
    }


    

    return (
        <div className="card w-[90%] sm:w-[90%] md:w-[95%] lg:w-[80%] mx-auto bg-base-100 md:card-side lg:card-side shadow-xl" key={_id}>
            <figure><img src={image} alt={name} className='w-full md:w-72 h-[370px]' /></figure>
            <div className="card-body md:w-5/12 lg:w-8/12">

                <div className='flex justify-between'>
                    <h2 className="card-title">{name}</h2>
                    {status &&
                        <small className='text-gray-400'>({status})</small>
                    }
                </div>

                <div><strong>Ingredients: </strong><span>{ingredients}.</span>

                    <div className='mt-6'>
                        <strong>Description: </strong>
                        <span>{cooking_description.slice(0, 350) + '...'}</span>
                    </div>
                </div>

                <div className="card-actions flex justify-between items-center">
                    <button className="btn bg-[#fa894d] btn-sm text-white hover:bg-[#d66223] my-4"><Link to={`/recipes/${_id}`}>View Details</Link></button>

                    <div className='flex items-center gap-5'>

                        <label className='btn btn-circle border-0 bg-green-400 rounded-full hover:text-white hover:bg-green-800' htmlFor="recipe-modal" onClick={() => handleRecipe(recipe)}>
                            <BiEdit className='text-4xl p-1' />
                        </label>


                        <label className='btn btn-circle border-0 bg-red-400 rounded-full hover:text-white hover:bg-red-700' htmlFor="recipe-modal" onClick={() => handleDelete(_id, name)}>
                            <MdDeleteOutline className='text-4xl p-1' />
                        </label>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default MyRecipeCard;