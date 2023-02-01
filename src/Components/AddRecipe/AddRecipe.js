import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Context/AuthProvider';

const AddRecipe = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const [processing, setProcessing] = useState(false);

    const handleAddProduct = data => {


        //console.log(data);
        const recipe = {
            name: data.name,
            image: data.image,
            ingredients: data.ingredients,
            cooking_description: data.description,
            userName: user.displayName,
            userEmail: user.email
        }
        
        
        console.log(recipe);

    }

    return (
        <div>
            <h1 className='text-2xl font-bold text-center mt-10 mb-4'>ADD RECIPE</h1>
            <div className='flex justify-center items-center mb-20 p-4'>
                <div className='card shadow-xl w-11/12 bg-slate-100 p-7'>

                    <form onSubmit={handleSubmit(handleAddProduct)}>

                        <label className="label">
                            <span className="label-text">Name of the Recipe</span>
                        </label>
                        <input type="text" className="w-full my-3 input input-bordered"  {...register("name")} />



                        <label className="label">
                            <span className="label-text">Recipe's image</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full" {...register("image", {
                            required: 'Photo is required'
                        })} />


                        {errors.image && <p className='text-error'>{errors.image?.message}</p>}



                        <label className="label">
                            <span className="label-text">Ingredients</span>
                        </label>
                        <input type="text" className="w-full my-3 input input-bordered" placeholder='Apple, Egg, Rice' {...register("ingredients")} />

                        <input type="text"/>
     



                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" className="w-full my-3 input input-bordered"  {...register("description")} />




                        <label className="label">
                            <span className="label-text">Name of the Recipe Provider</span>
                        </label>
                        <input type="text" className="w-full my-3 input input-bordered" defaultValue={user?.displayName} readOnly {...register("userName")} />


                        <label className="label">
                            <span className="label-text">Email of the Recipe Provider</span>
                        </label>
                        <input type="text" className="w-full my-3 input input-bordered" defaultValue={user?.email}  {...register("userEmail")} readOnly />


                        <div className="flex flex-col w-full border-opacity-50">

                            <button className="w-full my-3 btn text-white" type="submit" disabled={processing}>{processing ? 'Processing' : 'Add Recipe'}</button>



                        </div>

                    </form>

                </div>


            </div>

        </div>
    );
};

export default AddRecipe;