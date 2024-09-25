import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSession from "../hooks/useSession";
import { TableItems } from "../ui/partials/TableItems";
import getAlmoxarifados from "../services/getAlmoxarifados";
import deleteAlmoxarifado from "../services/deleteAlmoxarifado";
import AddAlmoxarifado from "../ui/partials/AddAlmoxarifado";
import AlterAlmoxarifado from "../ui/partials/AlterAlmoxarifado";


const objEmpty = {
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

  const [list, setList] = useState([objEmpty]);

  const [itemAlt, setItemAlt] = useState(objEmpty); // item para alteração

  const [altActive, setAltActive] = useState(false); // toggle para tela de alteração (aparecer ou sumir)



  useEffect(() => {
    const isLogged = checkSession();

    if(isLogged) {
      setActive(true); // página ativa
      updateListAlmoxarifados(); 
      return
    }

    navigate('/'); // deslogado, redirecionar para login
  }, []);



  function updateListAlmoxarifados() {
    // API para listar Almoxarifados (com axios)
    getAlmoxarifados(getToken(), handleSetList); // token, funcao que altera lista de almoxarifados
    //console.log('lista alterada', list);
  }



  function handleSetList(data) {
    setList(data);
  }



  const altItem = (id) => {
    const item = list.find(i => i.id == id); // encontrar item para alterá-lo

    if(!item) {
      console.log('Erro ao encontrar item');
      return
    }
    
    setItemAlt(item);
    setAltActive(true);
  }



  const deleteItem = (id) => {
    deleteAlmoxarifado(getToken(), id, updateListAlmoxarifados);
  }





  if(active) return (
    <div id="content">

      <AddAlmoxarifado updateListAlmoxarifados={updateListAlmoxarifados} token={getToken()} />

      <TableItems list={list} altItem={altItem} deleteItem={deleteItem} />

      <AlterAlmoxarifado itemAlt={itemAlt} altActive={altActive} token={getToken()} updateListAlmoxarifados={updateListAlmoxarifados} />

    </div>
  )
}