import React from "react";
import {
    RouterProvider,
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        
      ]
    },
  ]);
 
 const Router = () => {
    return (
        <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
 };
 
 export default Router;