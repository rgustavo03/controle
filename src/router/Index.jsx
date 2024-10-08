import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Almoxarifados from "../pages/Almoxarifados";
import { Fornecedores } from "../pages/Fornecedores";


export default function Index() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/almoxarifados',
      element: <Almoxarifados />
    },
    {
      path: '/fornecedores',
      element: <Fornecedores />
    }
  ]);

  return <RouterProvider router={routes} />
}
