import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import Recipes from './Components/Recipes/Recipes';
import MyRecipes from './Components/MyRecipes/MyRecipes';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import RecipeDetails from './RecipeDetails/RecipeDetails';
import AddRecipe from './Components/AddRecipe/AddRecipe';
import PrivateRoute from './Components/PrivateRouter/PrivateRoute';

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        loader: () => fetch(' https://recipe-jar-server.vercel.app/recentRecipes'),
        element: <Home/>
      },
      {
        path: "/recipes",
        element: <Recipes/>
      },
      {
        path: "/recipes/:id",
        loader: async ({params}) => fetch(` https://recipe-jar-server.vercel.app/recipes/${params.id}`),
        element: <RecipeDetails/>
      },
      {
        path: "/myRecipes",
        element: <PrivateRoute><MyRecipes/></PrivateRoute>
      },
      {
        path: "/addRecipe",
        element: <PrivateRoute><AddRecipe/></PrivateRoute>
      },
      {
        path: "/signIn",
        element: <SignIn/>
      },
      {
        path: "/signUp",
        element: <SignUp/>
      },
    ]
  }
])

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
