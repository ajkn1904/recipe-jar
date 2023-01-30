import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import Recipes from './Components/Recipes/Recipes';
import MyRecipes from './Components/MyRecipes/MyRecipes';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/recipes",
        element: <Recipes/>
      },
      {
        path: "/myRecipes",
        element: <MyRecipes/>
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
