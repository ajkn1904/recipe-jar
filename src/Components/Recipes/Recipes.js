import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import RecipeCard from '../RecipeCard/RecipeCard';
import { useForm } from 'react-hook-form';
import { ImSad } from 'react-icons/im';
import { FaSearch } from 'react-icons/fa';

const Recipes = () => {

    const { loading } = useContext(AuthContext)
    const [searchRecipe, setSearchRecipe] = useState('');
    const [sort, setSort] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();


    const { data = [], isLoading, refetch } =
        useQuery({
            queryKey: ['recipes'],

            queryFn: async () => {
                const res = await fetch('http://localhost:5000/recipes');
                const data = await res.json();
                return data;
            }
        })

    //console.log(data)



    const handleSearch = (value) => {
        setSort(true)

        const item = data.filter(item => {
            const findByName = item.name.toLowerCase().includes(value.search.toLowerCase());

            if (!findByName) {
                const findByIngredient = item.ingredients.toLowerCase().includes(value.search.toLowerCase());
                return findByIngredient;
            }
            return findByName;
        });
        setSearchRecipe(item)

    }
    console.log(searchRecipe)




    if (loading || isLoading) {
        return <button className="btn btn-ghost text-red-700 loading"></button>
    }


    return (
        <div>
            <h1 className='text-center text-5xl font-bold mt-14 mb-8'>All Recipes</h1>
            <div className='flex justify-end items-center gap-2 mr-10'>

                <form onSubmit={handleSubmit(handleSearch)} className='flex items-center'>

                    <FaSearch className='tex-center text-xl text-orange-600 m-2'/>
                    <input type="text" className="w-[100px] input input-bordered border-orange-700"  {...register("search")} />

                </form>

            </div>





            {sort ?
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-12 sm:mx-12 md:mx-14 lg:mx-20 my-20'>
                    {searchRecipe.length ?
                        searchRecipe.map(recipe => <RecipeCard recipe={recipe} key={recipe._id}></RecipeCard>)

                        :
                        
                        <div className='flex justify-center items-center'>
                            <p className='tex-center text-4xl font-bold'>No Recipe Found </p> <ImSad className='tex-center text-5xl text-orange-600 ml-2'/>
                        </div>
                    }

                </div>

                :

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-12 sm:mx-12 md:mx-14 lg:mx-20 my-20'>
                    {
                        data.map(recipe => <RecipeCard recipe={recipe} key={recipe._id}></RecipeCard>)
                    }
                </div>
            }


        </div>
    );
};

export default Recipes;