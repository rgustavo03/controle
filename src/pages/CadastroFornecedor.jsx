// link: /cadastrar-fornecedor

import React from "react"
import Header from "../ui/partials/Header"
import { FormFornecedor } from "../ui/partials/fornecedores/FormFornecedor"



export const CadastroFornecedor = () => {


  //


  return (
    <div id="cadastro-fornecedor-page" className="min-h-screen bg-gray-200">


      <Header />


      {/* ============ Conteúdo ============ */}
      <div id="content" className="flex flex-col my-10 px-2 md:px-10">

        <div id="middle" className="flex flex-col border rounded-md md:rounded-lg bg-white pb-5">
          <div id="middle-top" className="h-[70px] flex flex-row justify-between items-center p-4 md:p-6 border-b border-gray-200">
            <h3 className="text-lg text-gray-700 font-semibold">Cadastrar fornecedor</h3>
            <h3 className="text-lg text-gray-700 font-semibold">Alterar fornecedor</h3>
          </div>

          <FormFornecedor />
        </div>

      </div>
      {/* ============ Conteúdo ============ */}


    </div>
  )
}
