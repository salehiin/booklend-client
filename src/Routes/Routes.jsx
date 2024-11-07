import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import '../../src/App.css'
import SingleCategoryDisplay from "../pages/singleCategory/singleCategoryDisplay/singleCategoryDisplay";
import Books from "../pages/Books/Books/Books";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";


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
          path: '/books',
          element: <Books></Books>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
            path: '/kids',
            element: <SingleCategoryDisplay></SingleCategoryDisplay>
        }
      ]
    },
  ]);

  export default router;