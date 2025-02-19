import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from '@/layouts/DefaultLayout'

// import Home from '@/views/Home'
const Home = lazy(() => import('@/views/Home'))
const About = lazy(() => import('@/views/about'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])

const AppRoutes = () => <RouterProvider router={router} />

export default AppRoutes
