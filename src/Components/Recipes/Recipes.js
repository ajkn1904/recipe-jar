import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import RecipeCard from '../RecipeCard/RecipeCard';

const Recipes = () => {

    const { loading } = useContext(AuthContext)


    const { data = [], isLoading, refetch } =
        useQuery({
            queryKey: ['recipes'],

            queryFn: async () => {
                const res = await fetch('http://localhost:5000/recipes');
                const data = await res.json();
                return data;
            }
        })

        console.log(data)


    if (loading || isLoading) {
        return <button className="btn btn-ghost text-red-700 loading"></button>
    }


    return (
        <div>
        <h1 className='text-center text-5xl font-bold mt-14 mb-8'>All Recipes</h1>
            
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-12 sm:mx-12 md:mx-14 lg:mx-20 my-20'>
                {
                    data.map(recipe => <RecipeCard recipe={recipe} key={recipe._id}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default Recipes;