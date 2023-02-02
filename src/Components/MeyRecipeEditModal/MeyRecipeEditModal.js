import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Context/AuthProvider';

const MeyRecipeEditModal = ({ editRecipe, setEditRecipe, refetch }) => {

    const { user } = useContext(AuthContext)

    const { _id, name, ingredients, cooking_description } = editRecipe;
    const { register, handleSubmit } = useForm();
    const [processing, setProcessing] = useState(false);


    const handleModalOff = () => {
        setEditRecipe(null)
    }

    const handleEditRecipe = data => {
        
        const editedRecipe = {
            name: data.name,
            ingredients: data.ingredients,
            cooking_description: data.cooking_description,
            userName: user.displayName,
            userEmail: user.email,
            status: 'edited'
        }
       

        fetch(` https://recipe-jar-server.vercel.app/users/recipes/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',

                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(editedRecipe)
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.modifiedCount > 0) {
                    setProcessing(false)
                    setEditRecipe(null)
                    console.log(data)
                    toast.success('Recipe edited Successful');
                    refetch();
                }
                else {
                    toast.error(data.response)
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="recipe-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="recipe-modal" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={handleModalOff} >✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleSubmit(handleEditRecipe)}>

                        <label className="label">
                            <span className="label-text">Name of the Recipe</span>
                        </label>
                        <input type="text" className="w-full my-3 input input-bordered" defaultValue={name} {...register("name")} />





                        <label className="label">
                            <span className="label-text">Ingredients</span>
                        </label>
                        <input type="text" className="w-full my-3 input input-bordered" defaultValue={ingredients} {...register("ingredients")} />




                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" className="w-full my-3 input input-bordered" defaultValue={cooking_description}  {...register("cooking_description")} />


                        <div className="flex flex-col w-full border-opacity-50">

                        <button className="btn bg-[#fa894d] btn-sm text-white hover:bg-[#d66223] my-4"  data-aos="zoom-in" data-aos-duration="1000" type="submit" disabled={processing}>{processing ? 'Processing' : 'Add Recipe'}</button>



                        </div>

                    </form>

                </div>
            </div>

        </div>
    );
};

export default MeyRecipeEditModal;