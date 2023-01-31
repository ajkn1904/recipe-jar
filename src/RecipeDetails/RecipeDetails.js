import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const RecipeDetails = () => {

    const { _id, name, image, ingredients, cooking_description, userName, userEmail } = useLoaderData();

    console.log(name)

    return (
        <div className='w-[80%] md:w-[70%] mx-auto flex justify-between flex-col md:flex-row gap-10 my-20'>
            <img src={image} alt={name} className='w-96 h-96' />
            <div>
                <h1 className='text-4xl font-bold'>{name}</h1>
                <div className="badge bg-gradient-to-r from-[#3c597a] to-[#41ad35] p-3 font-semibold my-5">
                    <FaUser className='mr-2' /> by {userName}</div>

                <div><strong>Ingredients: </strong>
                    {
                        ingredients.map(data => <span>{data}, </span>)
                    }

                    <div className='mt-6'>
                        <strong>Description: </strong>
                        <span>{cooking_description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;