import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const [processing, setProcessing] = useState(false);
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate()





    const handleAddRecipe = data => {

        setProcessing(true);

      
        const formData = new FormData();
        formData.append('image', data.image[0]);

        const url = `https://api.imgbb.com/1/upload?&key=${imgHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {



                
                    const recipe = {
                        name: data.name,
                        image: result.data.url,
                        ingredients: data.ingredients,
                        cooking_description: data.description,
                        userName: user.displayName,
                        userEmail: user.email
                    }




                    fetch(' https://recipe-jar-server.vercel.app/users/recipes', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(recipe)
                    })
                        .then(res => res.json())
                        .then(data => {
                           
                            toast.success('Recipe added successful');
                            setProcessing(false);
                            navigate('/myRecipes')
                        })
                }
            })
    }







    return (
        <div>
            <h1 className='text-2xl font-bold text-center mt-10 mb-4'>ADD RECIPE</h1>
            <div className='flex justify-center items-center mb-20 p-4'>
                <div className='card shadow-xl w-11/12 md:w-5/12 bg-gradient-to-r from-green-200 to-orange-50 p-7'>

                    <form onSubmit={handleSubmit(handleAddRecipe)}>

                        <label className="label">
                            <span className="label-text text-lg">Name of the Recipe</span>
                        </label>
                        <input type="text" className="w-full my-1 input input-bordered"  {...register("name")} />



                        <label className="label">
                            <span className="label-text text-lg">Recipe's image</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full" {...register("image", {
                            required: 'Photo is required'
                        })} />


                        {errors.image && <p className='text-error'>{errors.image?.message}</p>}



                        <label className="label">
                            <span className="label-text text-lg">Ingredients</span>
                        </label>
                        <input type="text" className="w-full my-1 input input-bordered" placeholder='Apple, Egg, Rice' {...register("ingredients")} />




                        <label className="label">
                            <span className="label-text text-lg">Description</span>
                        </label>
                        <input type="text" className="w-full my-1 input input-bordered"  {...register("description")} />




                        <label className="label">
                            <span className="label-text text-lg">Name of the Recipe Provider</span>
                        </label>
                        <input type="text" className="w-full my-1 input input-bordered" defaultValue={user?.displayName} readOnly {...register("userName")} />


                        <label className="label">
                            <span className="label-text text-lg">Email of the Recipe Provider</span>
                        </label>
                        <input type="text" className="w-full my-1 input input-bordered" defaultValue={user?.email}  {...register("userEmail")} readOnly />


                        <div className="flex flex-col w-full border-opacity-50">

                            <button className="w-full my-10 btn bg-[#fa894d] text-white hover:bg-[#d66223" type="submit" disabled={processing}>{processing ? 'Processing' : 'Add Recipe'}</button>



                        </div>

                    </form>

                </div>


            </div>

        </div>
    );
};

export default AddRecipe;