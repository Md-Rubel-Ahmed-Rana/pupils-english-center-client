import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../components/Blogs/Blogs';
import Checkout from '../components/Checkout/Checkout';
import Courses from '../components/Courses/Courses';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Questions from '../components/Questions/Questions';
import Register from '../components/Register/Register';
import Main from '../Layout/Main';


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
                element: <Checkout />
            },
            {
                path: "/fqa",
                element: <Questions />
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
        ]
    }
])

export default routes;