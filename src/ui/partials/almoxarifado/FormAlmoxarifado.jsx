import React, { useContext, useEffect, useState } from "react";
import { AlmoxarifadoContext } from "../../../context/almoxarifadoContext";

import useSession from "../../../hooks/useSession";
import createAlmoxarifado from "../../../services/almoxarifado/createAlmoxarifado";
import altAlmoxarifado from "../../../services/almoxarifado/altAlmoxarifado";
import { tipos } from "../../../data/almoxarifado";
import { Submit } from "../../components/form/Submit";
import { Button } from "../../components/Button";
import { Close } from "../../svg/Close";
import { Input } from "../../components/form/Input";
import { Select } from "../../components/form/Select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UserContext } from "../../../context/userContext";


const almoxarifadoSchema = z.object({
  descricao: z.string().min(1),
  tipo: z.coerce.number().min(1)
});




export const FormAlmoxarifado = ({ navigate }) => {


  const { item, updateListAlmoxarifados, modalType, closeModal } = useContext(AlmoxarifadoContext);

  const { user } = useContext(UserContext);

  const { getToken } = useSession();


  // =============


  const { register, handleSubmit } = useForm({
    resolver: zodResolver(almoxarifadoSchema)
  });


  // =============


  const [listTipos, setListTipos] = useState([{}]);

  useEffect(() => { // definir lista de tipos
    const newList = [];
    
    tipos.forEach(t => {
      const newTipo = {
        key: t.tipo,
        value: t.tipo,
        label: t.nome
      }
      newList.push(newTipo);
    });
    
    setListTipos(newList);
  }, []);


  // =============


  const submitItem = (data) => {
    if(modalType == "new") create(data);
    if(modalType == "alt") alt(data);
  }


  // =============


  function create(data) {
    const dataAll = {
      empresaId: user.id, // id do login, UserContext
      descricao: data.descricao,
      tipo: data.tipo
    };

    createAlmoxarifado(dataAll, getToken(), updateListAlmoxarifados, navigate);

    closeModal();
  }


  // =============


  function alt(data) {
    const id = item.id;
    const descricao = (data.descricao == '') ? item.descricao : data.descricao;
    const tipo = (data.tipo == 0) ? item.tipo : data.tipo;

    // ALTERAR ALMOXARIFADO
    if(descricao != item.descricao || tipo != item.tipo) {
      altAlmoxarifado(id, descricao, tipo, getToken(), updateListAlmoxarifados, navigate);
    }

    closeModal();
  }







  return (
    <div className="h-full w-full flex flex-col bg-white">
      <form onSubmit={handleSubmit(submitItem)} className="w-full h-full flex flex-col justify-between">



        <div id="add-top" className="flex flex-col px-6">


          <div className="h-[70px] w-fit flex flex-row justify-between items-center">
            <h3 className="text-base font-semibold">
              {modalType == "new" && "Novo Almoxarifado"}
              {modalType == "alt" && "Alterar Almoxarifado"}
            </h3>

            <button className="cursor-pointer" onClick={() => closeModal()}>
              <Close size="5" color="black" />
            </button>
          </div>



          {/* Campos */}
          <div className="flex flex-col gap-3">

            {modalType == "alt" && (
              <span className="w-fit bg-gray-200 text-gray-800 p-[6px] rounded">Id: {item.id}</span>
            )}

            <Input 
              label="Descrição" 
              type="text"
              placeholder={modalType == "alt"? item.descricao : "Descrição"} 
              register={{...register("descricao")}}
            />

            <Select 
              label="Tipo" 
              list={listTipos}
              register={{...register("tipo")}} 
            />

          </div>
          {/* Campos */}



        </div>



        <div id="add-bottom" className="h-[70px] border-t flex flex-row justify-end items-center gap-3 pr-6">
          <Button type="cancel" func={closeModal} name="Cancelar" />
          <Submit type="generic" name={modalType == "new" ? "Criar" : "Alterar"} />
        </div>



      </form>
    </div>
  )
}