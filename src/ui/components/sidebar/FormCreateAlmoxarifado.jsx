import React from "react";
import InputAlmoxarifado from "../InputAlmoxarifado";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "../SubmitButton";
import CancelButton from "../CancelButton";
import { Close } from "../../svg/Close";


const userSchema = z.object({
  empresaId: z.coerce.number().min(1),
  descricao: z.string().min(1),
  tipo: z.coerce.number().min(1)
});


export default function FormCreateAlmoxarifado({create, toggleAddOpen}) {


  const { register, handleSubmit } = useForm({
    resolver: zodResolver(userSchema)
  });


  const submitItem = (data) => {
    create(data);
  }


  return (
    <div className="h-full flex flex-col bg-white">
      <form onSubmit={handleSubmit(submitItem)} className="w-full h-full flex flex-col justify-between">

        <div id="add-top" className="flex flex-col px-6">

          <div className="h-[70px] flex flex-row justify-between items-center">
            <h3 className="text-base font-semibold">Novo Almoxarifado</h3>

            <div className="cursor-pointer" onClick={() => toggleAddOpen(false)}>
              <Close size="5" color="black" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <InputAlmoxarifado type="text" label="Id Empresa" placeholder="Id Empresa" register={{...register("empresaId")}} />
            <InputAlmoxarifado type="text" label="Descrição"  placeholder="Descrição"  register={{...register("descricao")}} />
            <InputAlmoxarifado type="text" label="Tipo"       placeholder="Tipo"       register={{...register("tipo")}}      />
          </div>

        </div>


        <div id="add-bottom" className="h-[70px] border-t flex flex-row justify-end items-center gap-3 pr-6">
          <CancelButton toggleOpen={toggleAddOpen} />
          <SubmitButton nome="Criar" />
        </div>

      </form>
    </div>
  )
}