import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import MyRecipeCard from '../MyRecipeCard/MyRecipeCard';
import MeyRecipeEditModal from '../MeyRecipeEditModal/MeyRecipeEditModal';
import { toast } from 'react-hot-toast';

const MyRecipes = () => {

    const { user } = useContext(AuthContext);
    const [ editRecipe, setEditRecipe ] = useState(null)

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['recipes'],
        queryFn: async () => {
            const res = await fetch(` https://recipe-jar-server.vercel.app/users/recipes?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });

            const data = res.json()
            return data;

        }
    });




    

    const handleDelete = (recipeId, recipeName) => {
        const doDelete = window.confirm(`Do you want to delete ${recipeName}'s recipe?`);
        if (doDelete) {

            fetch(`http://localhost:5000/users/recipes/${recipeId}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.error('Recipe deleted successful')
                    refetch()

                })
        }
    }



    console.log(data)

    if (isLoading) {
        return <button className="btn btn-ghost text-red-700 loading"></button>
    }



    

    return (
        <div className='w-[80%] mx-auto min-h-[60vh] my-20'>
            <h1 className='text-4xl text-center font-semibold mb-10'>My Recipes</h1>

            {user?.uid && data.length ?
                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 sm:gap-12 md:gp-9 lg:gap-9 my-24'>
                    {data &&
                        data?.map(recipe => <MyRecipeCard recipe={recipe} key={recipe._id} refetch={refetch} setEditRecipe={setEditRecipe} handleDelete={handleDelete}/>)
                    }
                </div>
                :
                <p className='text-center text-5xl text-orange-600 my-[30vh]'>No Recipe added yet!</p>
            }
            {
                editRecipe &&
                <MeyRecipeEditModal editRecipe={editRecipe} setEditRecipe={setEditRecipe} refetch={refetch}></MeyRecipeEditModal>
            }

        </div>
    );
};

export default MyRecipes;