import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ViewFullImage from '../Components/ViewFullImage/ViewFullImage';




const RecipeDetails = () => {

    const { name, image, ingredients, cooking_description, userName } = useLoaderData();
    const navigate = useNavigate()

   

    return (
        <div className='w-[80%] md:w-[70%] mx-auto flex justify-between flex-col md:flex-row gap-10 my-20'>
            
            <ViewFullImage img={image} alt={name} className='w-96 md:w-[400px] h-96' title='Click to view full image.'/>
            
            
            <div className='md:w-[50%]'>
                <h1 className='text-4xl font-bold'>{name}</h1>

                <div className='flex justify-between items-center'>
                    <div className="badge bg-gradient-to-r from-[#3c597a] to-[#41ad35] p-3 font-semibold my-5">
                        <FaUser className='mr-2' /> by {userName}
                    </div>

                    <button onClick={() => navigate(-1)} size="sm" className='btn bg-[#fa894d] btn-sm text-white hover:bg-[#d66223] my-4 mx-auto'>Back</button>
                </div>

                <div>
                    <strong>Ingredients: </strong><span>{ingredients}.</span>


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