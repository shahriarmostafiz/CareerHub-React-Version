import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import AppliedJobs from './Components/Applied Jobs/AppliedJobs.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import JobDetails from './Components/Home/FeaturedJobs/JobDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>

      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/jobs.json")


      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch("../jobs.json")
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
