import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSession from "../hooks/useSession";
import getAlmoxarifados from "../services/getAlmoxarifados";
import deleteAlmoxarifado from "../services/deleteAlmoxarifado";
import AddAlmoxarifado from "../ui/partials/almoxarifado/AddAlmoxarifado";
import AlterAlmoxarifado from "../ui/partials/almoxarifado/AlterAlmoxarifado";
import Header from "../ui/partials/Header";
import AddActiveButton from "../ui/components/AddActiveButton";
import { TableAlmoxarifado } from "../ui/partials/Almoxarifado/TableAlmoxarifado";
import { ConfirmDelete } from "../ui/partials/almoxarifado/ConfirmDelete";


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

  const { getName, getToken } = useSession();

  const [list, setList] = useState([objEmpty]);

  
  // ================


  useEffect(() => {
    updateListAlmoxarifados();
  }, []);
  

  // ================


  const [addOpen, setAddOpen] = useState(false); // toggle para div de inserção de itens

  function toggleAddOpen(boolean) { // Display componente de add almoxarifado
    setAddOpen(boolean);
  }
  

  // ================


  const [altOpen, setAltOpen] = useState(false); // toggle para tela de alteração (aparecer ou sumir)

  const [itemAlt, setItemAlt] = useState(objEmpty); // item para alteração

  function toggleAltOpen(boolean) { // Display componente de alteração de almoxarifado
    setAltOpen(boolean);
  }


  // ================


  const [delOpen, setDelOpen] = useState(false);

  const [itemDel, setItemDel] = useState(objEmpty);

  function toggleDelOpen(boolean) {
    setDelOpen(boolean);
  }


  // ================




  function updateListAlmoxarifados() {
    getAlmoxarifados(getToken(), handleSetList, navigate); // requisição API para listar Almoxarifados (axios)
    // props (token, funcao que altera lista de almoxarifados, navigate)
  }



  function handleSetList(data) {
    setList(data);
    setActive(true);
  }



  const altItem = (id) => {
    const item = list.find(i => i.id == id); // encontrar item para alterá-lo

    if(!item) {
      console.log('Erro ao encontrar item');
      return
    }
    
    setItemAlt(item);
    setAltOpen(true);
  }



  const deleteItem = (id) => {
    //deleteAlmoxarifado(getToken(), id, updateListAlmoxarifados, navigate);
    const item = list.find(i => i.id == id); // encontrar item para alterá-lo

    if(!item) {
      console.log('Erro ao encontrar item');
      return
    }

    setItemDel(item);
    setAltOpen(false);
  }



  if(active) return (
    <div id="page" className="min-h-screen bg-gray-200">


      <Header name={getName()} />


      <div id="content" className="flex flex-col p-10">

        <div id="middle" className="flex flex-col border rounded-lg bg-white pb-5">
          <div id="middle-top" className="h-[70px] flex flex-row justify-between items-center p-6 border-b border-gray-200">
            <h3 className="text-lg text-gray-700 font-semibold">Almoxarifados</h3>
            <AddActiveButton toggleAddOpen={toggleAddOpen} />
          </div>

          <TableAlmoxarifado 
            list={list} 
            altItem={altItem} 
            deleteItem={deleteItem} 
          />
        </div>

      </div>


      <AddAlmoxarifado 
        addOpen={addOpen} 
        toggleAddOpen={toggleAddOpen} 
        updateListAlmoxarifados={updateListAlmoxarifados} 
        token={getToken()} 
        navigate={navigate} 
      />


      <AlterAlmoxarifado 
        itemAlt={itemAlt} 
        altOpen={altOpen} 
        toggleAltOpen={toggleAltOpen} 
        token={getToken()} 
        updateListAlmoxarifados={updateListAlmoxarifados} 
        navigate={navigate} 
      />


      <ConfirmDelete 
        open={delOpen} 
        itemDel={itemDel}
        toggle={toggleDelOpen}     
      />


    </div>
  )
}