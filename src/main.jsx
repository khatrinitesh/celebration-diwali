
import { createRoot } from 'react-dom/client'
import './index.css'
// library
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// pages
import Welcome from './pages/Welcome'
import ThankYou from './pages/ThankYou'
import AppLayout from './layout/AppLayout';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Welcome/> //welcome page
  },
  {
    path:'/details',
    element:<AppLayout/> // details page
  },
  {
    path:'/thankyou',
    element:<ThankYou/> // thank you page
  },
  {
    path:"*",
    element:<Navigate to="/" replace/> // if there is not a found page
  }
])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
