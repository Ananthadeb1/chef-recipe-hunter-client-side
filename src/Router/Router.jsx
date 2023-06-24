import React from "react";
import {
    RouterProvider,
    createBrowserRouter,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Starting</div>,
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