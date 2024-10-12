import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TableFornecedores } from "./TableFornecedores";
import { FornecedoresContext } from "../../../context/fornecedoresContext";


export const ListFornecedores = ({listOn, exec}) => {

  const navigate = useNavigate();

  const { list, updateListFornecedores } = useContext(FornecedoresContext);


  useEffect(() => {
    if(exec == "list") {
      updateListFornecedores();
    }
  }, [exec]);


  function newFornecedor() {
    navigate('/fornecedores/form');
  }



  if(listOn) return (
    <div id="middle" className="flex flex-col border rounded-md md:rounded-lg bg-white pb-5">
      <div id="middle-top" className="h-[70px] flex flex-row justify-between items-center p-4 md:p-6 border-b border-gray-200">
        <h3 className="text-md text-gray-700 font-semibold">Fornecedores</h3>
        <Button type="add" func={newFornecedor} name="Novo +" />
      </div>

      <TableFornecedores list={list} />
    </div>
  )
}