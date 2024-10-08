import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import useSession from "../../../hooks/useSession";
import { Button } from "../../components/Button";
import { TableFornecedores } from "./TableFornecedores";
import getFornecedores from "../../../services/fornecedores/getFornecedores";


export const ListFornecedores = ({listOn}) => {

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const { getToken } = useSession();

  const [list, setList] = useState([]);


  useEffect(() => {
    updateListFornecedores();
  }, []);



  function updateListFornecedores() {
    getFornecedores(getToken(), user.id, handleSetList, navigate);
  }


  function handleSetList(data) {
    setList(data);
  }


  function newFornecedor() {
    navigate('/fornecedores/form');
  }


  if(listOn) return (
    <div id="middle" className="flex flex-col border rounded-md md:rounded-lg bg-white pb-5">
      <div id="middle-top" className="h-[70px] flex flex-row justify-between items-center p-4 md:p-6 border-b border-gray-200">
        <h3 className="text-lg text-gray-700 font-semibold">Fornecedores</h3>
        <Button type="add" func={newFornecedor} name="Novo +" />
      </div>

      <TableFornecedores list={list} />
    </div>
  )
}