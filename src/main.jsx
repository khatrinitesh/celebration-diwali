
import { createRoot } from 'react-dom/client'
import './index.css'
// library
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// pages
import Welcome from './pages/Welcome'
import ThankYou from './pages/ThankYou'
import AppLayout from './layout/AppLayout';
import AdminLogin from './Admin/pages/Login';
import Dashboard from './Admin/pages/Dashboard';
import DashboardLayout from './Admin/layout/DashboardLayout';


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
  },
  // BELOW >>> IT IS ADMIN DASHBOARD TEMPLATE
  {
    path: "/admin-user",
    element: <AdminLogin />,  // ADMIN LOGIN PAGE
},
{
    path: "/",
    element: <DashboardLayout />, // DASHBOARD LAYOUT
    children: [
        {
            path: "dashboard",
            element: <Dashboard />, // DASHBOARD PAGE
        },
    ],
}
])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
