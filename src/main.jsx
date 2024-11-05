import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';

createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto bg-[#FAF9F6]'>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </div>
)
