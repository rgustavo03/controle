import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Controller from "../pages/Controller";


export default function Index() {

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/controle',
            element: <Controller />
        }
    ]);

    return <RouterProvider router={routes} />
}