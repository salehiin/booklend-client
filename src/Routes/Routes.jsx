import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import '../../src/App.css'
import SingleCategoryDisplay from "../pages/singleCategory/singleCategoryDisplay/singleCategoryDisplay";


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
            path: '/kids',
            element: <SingleCategoryDisplay></SingleCategoryDisplay>
        }
      ]
    },
  ]);

  export default router;