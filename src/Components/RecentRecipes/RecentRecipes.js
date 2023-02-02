import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const RecentRecipes = () => {

    const newRecipe = useLoaderData()





    return (
        <div className='my-40'>
            <p className='text-4xl text-center font-bold'>New Recipes</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-12 md:gp-9 lg:gap-9 my-16 w-10/12 mx-auto'>
                {newRecipe &&
                    newRecipe.map(recent =>

                        <div data-aos="zoom-in" data-aos-duration="1000" className="w-[90%] mx-auto bg-base-100 shadow-xl border-2" key={recent._id}>
                            <figure><img src={recent.image} alt="" className='w-[80%] h-[350px] mx-auto mt-8' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{recent.name}</h2>

                                <Link to={`/recipes/${recent._id}`} className='text-primary'>View Details</Link>

                            </div>
                        </div>
                    )
                }

            </div>

            <div className='flex items-center'>

            <Link to={'/recipes'} className="btn bg-[#fa894d] text-white hover:bg-[#d66223] text-2xl my-4 mx-auto"  data-aos="zoom-in" data-aos-duration="1000" type="submit">View All</Link>
            </div>
        </div>
    );
};

export default RecentRecipes;