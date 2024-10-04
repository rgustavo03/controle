import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "../form/Input"
import { zodResolver } from "@hookform/resolvers/zod";
import { Close } from "../../svg/Close";
import { Button } from "../Button";
import { Submit } from "../form/Submit";
import { Select } from "../form/Select";
import { tipos } from "../../../data/almoxarifado";


const userSchema = z.object({
  descricao: z.string(),
  tipo: z.coerce.number()
});


export default function FormAltAlmoxarifado({itemAlt, alt, closeThis}) {


  const { register, handleSubmit } = useForm({
    resolver: zodResolver(userSchema)
  });


  const tiposAlmoxarifados = tipos;


  const submitItem = (data) => {
    alt(data);
  }


  return (
    <div className="h-full flex flex-col bg-white">
      <form onSubmit={handleSubmit(submitItem)} className="w-full h-full flex flex-col justify-between">

        <div id="add-top" className="flex flex-col px-6">

          <div className="h-[70px] flex flex-row justify-between items-center">
            <h3 className="text-base font-semibold">Alterar Almoxarifado</h3>

            <div className="cursor-pointer" onClick={() => closeThis()}>
              <Close size="5" color="black" />
            </div>
          </div>


          {/* Campos */}
          <div className="flex flex-col gap-3">
            <Input 
              label="Descrição" 
              type="text" 
              placeholder={itemAlt.descricao} 
              register={{...register("descricao")}}
            />
            <Select 
              label="Tipo" 
              items={tiposAlmoxarifados} 
              register={{...register("tipo")}}
            />
          </div>


        </div>


        <div id="add-bottom" className="h-[70px] border-t flex flex-row justify-end items-center gap-3 pr-6">
          <Button type="cancel" func={closeThis} name="Cancelar" />
          <Submit type="generic" name="Alterar" />
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