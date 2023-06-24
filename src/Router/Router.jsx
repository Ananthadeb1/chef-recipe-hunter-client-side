import {
    RouterProvider,
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import LogIn from "../Aurhentications/LogIn/LogIn";
import SignUp from "../Aurhentications/SignUp/SignUp";
import Home from "../Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <LogIn></LogIn>
        },
        {
            path: 'signup',
            element:<SignUp></SignUp>
        }
      ]
    },
  ]);
 
 const Router = () => {
    return (
        <RouterProvider router={router} />
    );
 };
 
 export default Router;