import React from "react";
import InputAlmoxarifado from "../InputAlmoxarifado";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "../SubmitButton";
import CancelButton from "../CancelButton";
import { Close } from "../../svg/Close";


const userSchema = z.object({
  descricao: z.string(),
  tipo: z.coerce.number()
});


export default function FormAltAlmoxarifado({itemAlt, alt, toggleAltOpen}) {


  const { register, handleSubmit } = useForm({
    resolver: zodResolver(userSchema)
  });


  const submitItem = (data) => {
    alt(data);
  }


  return (
    <div className="h-full flex flex-col bg-white">
      <form onSubmit={handleSubmit(submitItem)} className="w-full h-full flex flex-col justify-between">

        <div id="add-top" className="flex flex-col px-6">

          <div className="h-[70px] flex flex-row justify-between items-center">
            <h3 className="text-base font-semibold">Alterar Almoxarifado</h3>

            <div className="cursor-pointer" onClick={() => toggleAltOpen(false)}>
              <Close size="5" color="black" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <InputAlmoxarifado type="text" label="Descrição" placeholder={itemAlt.descricao} register={{...register("descricao")}} />
            <InputAlmoxarifado type="text" label="Tipo" placeholder={itemAlt.tipo} register={{...register("tipo")}} />
          </div>

        </div>


        <div id="add-bottom" className="h-[70px] border-t flex flex-row justify-end items-center gap-3 pr-6">
          <CancelButton toggleOpen={toggleAltOpen} />
          <SubmitButton nome="Criar" />
        </div>

      </form>
    </div>
  )
}

/*
<div className="h-full flex flex-col bg-white">
  <form onSubmit={handleSubmit(submitItem)} className="flex flex-col gap-1 p-8 bg-white border border-slate-400 rounded">

      <h6 className="text-lg mb-3">
        Alterar
      </h6>

      <h6 className="size-fit text-base bg-slate-300 rounded p-2">
        Id: {itemAlt.id}
      </h6>

      <InputAlmoxarifado type="text" label="Descrição" placeholder={itemAlt.descricao} register={{...register("descricao")}} />
      <InputAlmoxarifado type="text" label="Tipo" placeholder={itemAlt.tipo} register={{...register("tipo")}} />

      <SubmitButton nome="Alterar" />
      <CancelButton toggleOpen={toggleAltOpen} />

  </form>
</div>
*/