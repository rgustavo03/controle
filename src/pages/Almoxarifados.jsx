import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSession from "../hooks/useSession";
import getAlmoxarifados from "../services/almoxarifado/getAlmoxarifados";
import Header from "../ui/partials/Header";
import { TableAlmoxarifado } from "../ui/partials/almoxarifado/TableAlmoxarifado";
import { DelAlmoxarifado } from "../ui/partials/almoxarifado/DelAlmoxarifado";
import { Button } from "../ui/components/Button";
import { UserContext } from "../context/userContext";
import { AlmoxarifadoContext, emptyItem } from "../context/almoxarifadoContext";
import { Modal } from "../ui/partials/Modal";
import { FormAlmoxarifado } from "../ui/partials/almoxarifado/FormAlmoxarifado";
import { Delete } from "../ui/partials/Delete";



export default function Almoxarifados() {

  const [active, setActive] = useState(false); // pagina ativa ou não

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const { getToken } = useSession();

  const [list, setList] = useState([emptyItem]);


  // ================


  const [item, setItem] = useState(emptyItem);

  function setItemData(data) {
    setItem(data);
  }

  
  // ================


  useEffect(() => {

    /*
    if(user.nome.length == 0) { // Acredito que isso será desnecessário eventualmente (por causa useMemo)
      endToken();
      navigate('/');
      return
    }
    */

    updateListAlmoxarifados();

  }, []);


  // ================


  const [modalOpen, setModalOpen] = useState(false);

  const [modalType, setModalType] = useState("");

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function newAlmoxarifado() {
    setModalType("new");
    openModal();
  }

  function altAlmoxarifado() {
    setModalType("alt");
    openModal();
  }


  // ================


  const [delOpen, setDelOpen] = useState(false);

  function openDelete() {
    setDelOpen(true);
    closeModal();
  }

  function closeDelete() {
    setDelOpen(false);
  }


  // ================


  function updateListAlmoxarifados() {
    getAlmoxarifados(getToken(), handleSetList, navigate); // requisição API para listar Almoxarifados (axios)
  }


  function handleSetList(data) {
    setList(data);
    setActive(true);
  }






  if(active) return (
    <AlmoxarifadoContext.Provider value={{ item, setItemData, updateListAlmoxarifados, altAlmoxarifado, modalType, closeModal, openDelete, closeDelete }}>
      <div id="page-almoxarifado" className="min-h-screen pb-10 bg-gray-200">


        <Header />


        <div id="content" className="flex flex-col my-10 px-2 md:px-10">

          <div id="middle" className="flex flex-col border rounded-md md:rounded-lg bg-white pb-5">
            <div id="middle-top" className="h-[70px] flex flex-row justify-between items-center p-4 md:p-6 border-b border-gray-200">
              <h3 className="text-md text-gray-700 font-semibold">Almoxarifados</h3>
              <Button type="add" func={newAlmoxarifado} name="Novo +" />
            </div>

            <TableAlmoxarifado list={list} />
          </div>

        </div>


        <Modal modalOpen={modalOpen} closeModal={closeModal}>
          <FormAlmoxarifado navigate={navigate} />
        </Modal>


        <Delete delOpen={delOpen} closeDelete={closeDelete}>
          <DelAlmoxarifado navigate={navigate} />
        </Delete>


      </div>
    </AlmoxarifadoContext.Provider>
  )
}