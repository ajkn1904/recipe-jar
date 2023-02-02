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

        //setProcessing(true);
        console.log(data.image[0]);
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


                    fetch('http://localhost:5000/users/recipes', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(recipe)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
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
                <div className='card shadow-xl w-11/12 bg-slate-100 p-7'>

                    <form onSubmit={handleSubmit(handleAddRecipe)}>

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