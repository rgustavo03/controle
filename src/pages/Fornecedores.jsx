import React, { useEffect, useState } from "react"
import { emptyItem, FornecedoresContext } from "../context/fornecedoresContext"
import Header from "../ui/partials/Header"
import { useNavigate } from "react-router-dom";
import { Delete } from "../ui/partials/Delete";
import { DelFornecedor } from "../ui/partials/fornecedores/DelFornecedor";
import { ListFornecedores } from "../ui/partials/fornecedores/ListFornecedores";
import { FormFornecedor } from "../ui/partials/fornecedores/FormFornecedor";


export const Fornecedores = ({exec}) => {

  const navigate = useNavigate();


  // ==============


  const [item, setItem] = useState(emptyItem);

  function setItemData(data) {
    setItem(data);
  }


  // ==============


  const [listOn, setListOn] = useState(false);
  const [formOn, setFormOn] = useState(false);

  function openList() {
    setListOn(true);
    setFormOn(false);
  }

  function openForm() {
    setFormOn(true);
    setListOn(false);
  }

  useEffect(() => {
    if(exec == "list") {
      openList();
    }
    if(exec == "new" || exec == "alt") {
      openForm();
    }
  },[exec]);


  // ==============


  const [delOpen, setDelOpen] = useState(false);

  function openDelete() {
    setDelOpen(true);
  }

  function closeDelete() {
    setDelOpen(false);
  }




  return (
    <FornecedoresContext.Provider value={{item, setItemData, openDelete, closeDelete}}>
      <div id="page-fornecedores" className="min-h-screen bg-gray-200">


        <Header />


        {/*  Conteúdo  */}
        <div id="content" className="flex flex-col my-10 px-2 md:px-10">

          <ListFornecedores listOn={listOn} exec={exec} />

          <FormFornecedor formOn={formOn} exec={exec} />

        </div>
        {/*  Conteúdo  */}


        <Delete delOpen={delOpen} closeDelete={closeDelete}>
          <DelFornecedor navigate={navigate} />
        </Delete>


      </div>
    </FornecedoresContext.Provider>
  )
}
