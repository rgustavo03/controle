import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Almoxarifados from "../pages/Almoxarifados";
import { Fornecedores } from "../pages/Fornecedores";
import { FormFornecedor } from "../ui/partials/fornecedores/FormFornecedor";


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
      path: '/fornecedores/',
      element: <Fornecedores exec="list" />
    },
    {
      path: '/fornecedores/form',
      element: <Fornecedores exec="new" />
    },
    {
      path: '/fornecedores/form/:id',
      element: <Fornecedores exec="alt" />
    }
  ]);

  return <RouterProvider router={routes} />
}
