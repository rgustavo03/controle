import React, { useContext, useEffect, useState } from "react"
import { emptyItem, FornecedoresContext } from "../context/fornecedoresContext"
import Header from "../ui/partials/Header"
import { UserContext } from "../context/userContext";
import getFornecedores from "../services/fornecedores/getFornecedores";
import useSession from "../hooks/useSession";
import { useNavigate } from "react-router-dom";
import createFornecedor from "../services/fornecedores/createFornecedor";
import { Button } from "../ui/components/Button";
import { TableFornecedores } from "../ui/partials/fornecedores/TableFornecedores";
import { Delete } from "../ui/partials/Delete";
import { DelFornecedor } from "../ui/partials/fornecedores/DelFornecedor";


export const Fornecedores = () => {

  const navigate = useNavigate();

  const { user } = useContext(UserContext); // user.id para listar

  const { getToken } = useSession();

  const [list, setList] = useState([]);


  // ==============


  useEffect(() => {
    updateListFornecedores();
  }, []);


  // ==============


  const [item, setItem] = useState(emptyItem);

  function setItemData(data) {
    setItem(data);
  }


  // ==============


  function newFornecedor() {
    //
  }

  function altFornecedor() {
    //
    console.log('aaalllttt')
  }


  // ==============


  const [delOpen, setDelOpen] = useState(false);

  function openDelete() {
    setDelOpen(true);
  }

  function closeDelete() {
    setDelOpen(false);
  }


  // ==============


  function updateListFornecedores() {
    getFornecedores(getToken(), user.id, handleSetList, navigate);
  }


  function handleSetList(data) {
    setList(data);
  }



  return (
    <FornecedoresContext.Provider value={{item, setItemData, updateListFornecedores, altFornecedor, openDelete, closeDelete}}>
      <div id="page-fornecedores" className="min-h-screen bg-gray-200">


        <Header />


        <div id="content" className="flex flex-col mt-10 px-2 md:px-10">

          <div id="middle" className="flex flex-col border rounded-md md:rounded-lg bg-white pb-5">
            <div id="middle-top" className="h-[70px] flex flex-row justify-between items-center p-4 md:p-6 border-b border-gray-200">
              <h3 className="text-lg text-gray-700 font-semibold">Fornecedores</h3>
              <Button type="add" func={newFornecedor} name="Novo +" />
            </div>

            <TableFornecedores list={list} />
          </div>

        </div>


        <Delete 
          delOpen={delOpen} 
          closeDelete={closeDelete} 
          children={<DelFornecedor navigate={navigate} />} 
        />


      </div>
    </FornecedoresContext.Provider>
  )
}

// https://stackoverflow.com/questions/68528582/how-to-use-usecontext-to-translate-different-pages


/*
const data = {
  empresaId: 1,
  nomeRazaoSocial: "GUS 2",
  cpfCnpj: "90982039988",
  telefone: "123456789",
  email: "string",
  rgInscricaoEstadual: "string",
  tipo: 1,
  optanteSimples: true,
  limiteCredito: 0,
  numeroPisPasepNit: "string",
  cep: "string",
  cidade: "string",
  uf: 11,
  logradouro: "string",
  numero: "string",
  bairro: "string",
  complemento: "string",
  codigoIbge: 0,
  nomeFantasia: "string",
  atividade: 1,
  crt: 1,
  liberado: true,
  desconto: 0,
  formaPagamentoId: null,
  condicaoPagamentoId: null,
  inscricaoMunicipal: "string"
}
*/