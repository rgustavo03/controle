import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Almoxarifados from "../pages/Almoxarifados";
import { Fornecedores } from "../pages/Fornecedores";
import { CadastroFornecedor } from "../pages/CadastroFornecedor";


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
    },
    {
      path: '/cadastrar-fornecedor',
      element: <CadastroFornecedor />
    }
  ]);

  return <RouterProvider router={routes} />
}
