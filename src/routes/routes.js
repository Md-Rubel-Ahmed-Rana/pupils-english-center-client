import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../components/Blogs/Blogs';
import Checkout from '../components/Checkout/Checkout';
import CourseDetails from '../components/CourseDetails/CourseDetails';
import Courses from '../components/Courses/Courses';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Profile from '../components/Profile/Profile';
import Questions from '../components/Questions/Questions';
import Register from '../components/Register/Register';
import Main from '../Layout/Main';
import PrivateRoute from './PrivateRoute';


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/courses",
                element: <Courses />
            },
            {
                path: "/courses/:id",
                loader: ({ params }) => fetch(`https://assignment-server-xi.vercel.app/courses/${params.id}`),
                element: <CourseDetails />
            },
            {
                path: "/fqa",
                element: <Questions />
            },
            {
                path: "/checkout",
                element: <PrivateRoute> <Checkout /> </PrivateRoute>
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/profile",
                element: <Profile />
            },
        ]
    }
])

export default routes;