import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import LogIn from "../Aurhentications/LogIn/LogIn";
import SignUp from "../Aurhentications/SignUp/SignUp";
import Home from "../Home/Home/Home";
import ChefsDetails from "../ChefsDetails/ChefsDetails";
import Blog from "../Blog/Blog";
import PrivateRoute from "../Shared/PrivetRoute/PrivetRoute";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "chef/:chefId",
        element: <PrivateRoute><ChefsDetails></ChefsDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-sarver-site.vercel.app/chef/${params.chefId}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      }
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
