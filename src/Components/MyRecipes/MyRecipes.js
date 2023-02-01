import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import MyRecipeCard from '../MyRecipeCard/MyRecipeCard';

const MyRecipes = () => {

    const { user } = useContext(AuthContext);

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['recipes'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/recipes?email=${user?.email}`);

            const data = res.json()
            return data;

        }
    });


    console.log(data)

    if (isLoading) {
        return <button className="btn btn-ghost text-red-700 loading"></button>
    }

    return (
        <div className='w-[80%] mx-auto min-h-screen my-20'>
        <h1 className='text-4xl text-center font-semibold mb-10'>My Recipes</h1>

{ user?.uid && 
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 sm:gap-12 md:gp-9 lg:gap-9 my-24'>
            {data &&
                data?.map(recipe => <MyRecipeCard recipe={recipe} key={recipe._id} refetch={refetch} />)
            }
        </div>
}

    </div>
    );
};

export default MyRecipes;