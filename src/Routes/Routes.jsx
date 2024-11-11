import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import '../../src/App.css'
import SingleCategoryDisplay from "../pages/singleCategory/singleCategoryDisplay/singleCategoryDisplay";
import Books from "../pages/Books/Books/Books";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Borrowings from "../pages/Borrowings/Borrowings";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../Layout/Dashboard";
import Shelf from "../pages/Dashboard/Shelf/Shelf";



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
          path: 'checkout/:id',
          element: <ProtectedRoute><CheckOut></CheckOut></ProtectedRoute>,
          loader: ({params}) => fetch(`https://booklend-server.vercel.app/books/${params.id}`)
        },
        {
          path: 'borrowings',
          element: <ProtectedRoute><Borrowings></Borrowings></ProtectedRoute>
        },
        {
            path: '/kids',
            element: <SingleCategoryDisplay></SingleCategoryDisplay>
        }
      ]
    },
    {
      path:'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'shelf',
          element: <Shelf></Shelf>
        }
      ]
    }
  ]);

  export default router;