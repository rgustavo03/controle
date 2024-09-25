import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useSession from "../hooks/useSession";
import { TableItems } from "../ui/partials/TableItems";
import getAlmoxarifados from "../services/getAlmoxarifados";
import deleteAlmoxarifado from "../services/deleteAlmoxarifado";
import CreateAlmoxarifado from "../ui/partials/CreateAlmoxarifado";


const objFormat = {
  id: 0,
  empresaId: 0,
  descricao: "",
  tipo: "",
  usuarioId: 0,
  dataInclusao: "",
  dataAlteracao: null,
  dataExclusao: null
}


export default function Controller() {

  const [active, setActive] = useState(false); // pagina ativa ou não

  const navigate = useNavigate();

  const { checkSession, getToken } = useSession();

  const [list, setList] = useState([objFormat]);



  const handleSetList = (data) => {
    setList(data);
  }



  function updateListAlmoxarifados() {
    // API para listar Almoxarifados (com axios)
    getAlmoxarifados(getToken(), handleSetList); // token, funcao que altera lista de almoxarifados
  }



  useEffect(() => {
    const isLogged = checkSession();

    if(isLogged) {
      setActive(true);

      updateListAlmoxarifados();
      
      return
    }

    navigate('/');
  }, []);



  const altItem = (id) => {
    console.log('alterar ', id);
    
    //updateListAlmoxarifados();
  }



  const deleteItem = (id) => {
    deleteAlmoxarifado(getToken(), id);
    
    updateListAlmoxarifados();
  }



  if(active) return (
    <div id="content">

      <CreateAlmoxarifado updateListAlmoxarifados={updateListAlmoxarifados} token={getToken()} />

      <TableItems list={list} altItem={altItem} deleteItem={deleteItem} />

    </div>
  )
}