import React from "react";
import InputAlmoxarifado from "../components/InputAlmoxarifado";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "../components/SubmitButton";
import CancelButton from "../components/CancelButton";
import { Close } from "../components/Close";


const userSchema = z.object({
  empresaId: z.coerce.number().min(1),
  descricao: z.string().min(1),
  tipo: z.coerce.number().min(1)
});


export default function FormCreateAlmoxarifado({create, toggleAddActive}) {


  const { register, handleSubmit } = useForm({
    resolver: zodResolver(userSchema)
  });


  const submitItem = (data) => {
    create(data);
  }


  return (
    <form onSubmit={handleSubmit(submitItem)} className="w-full flex flex-col justify-between">

      <div id="add-top" className="flex flex-col px-6">

        <div className="h-[70px] flex flex-row justify-between items-center">
          <h3 className="text-base font-semibold">Novo Almoxarifado</h3>

          <div className="cursor-pointer" onClick={() => toggleAddActive(false)}>
            <Close size="6" color="black" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <InputAlmoxarifado type="text" placeholder="Id Empresa" register={{...register("empresaId")}} />
          <InputAlmoxarifado type="text" placeholder="Descrição"  register={{...register("descricao")}} />
          <InputAlmoxarifado type="text" placeholder="Tipo"       register={{...register("tipo")}}      />
        </div>

      </div>


      <div id="add-bottom" className="h-[70px] border-t flex flex-row justify-end items-center gap-3 pr-6">
        <CancelButton toggleActive={toggleAddActive} />
        <SubmitButton nome="Criar" />
      </div>

    </form>
  )
}