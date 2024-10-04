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
  empresaId: z.coerce.number().min(1),
  descricao: z.string().min(1),
  tipo: z.coerce.number().min(1)
});


export default function FormCreateAlmoxarifado({create, closeThis}) {


  const { register, handleSubmit } = useForm({
    resolver: zodResolver(userSchema)
  });


  const tiposAlmoxarifados = tipos;


  const submitItem = (data) => {
    create(data);
  }


  return (
    <div className="h-full flex flex-col bg-white">
      <form onSubmit={handleSubmit(submitItem)} className="w-full h-full flex flex-col justify-between">

        <div id="add-top" className="flex flex-col px-6">

          <div className="h-[70px] flex flex-row justify-between items-center">
            <h3 className="text-base font-semibold">Novo Almoxarifado</h3>

            <div className="cursor-pointer" onClick={() => closeThis()}>
              <Close size="5" color="black" />
            </div>
          </div>


          {/* Campos */}
          <div className="flex flex-col gap-3">
            <Input 
              label="Id Empresa" 
              type="text" 
              placeholder="Id Empresa" 
              register={{...register("empresaId")}}
            />
            <Input 
              label="Descrição" 
              type="text" placeholder="Descrição" 
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
          <Submit type="generic" name="Criar" />
        </div>

      </form>
    </div>
  )
}