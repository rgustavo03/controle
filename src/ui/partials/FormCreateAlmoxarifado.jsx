import React from "react";
import InputAlmoxarifado from "../components/InputAlmoxarifado";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "../components/SubmitButton";
import CancelButton from "../components/CancelButton";


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
    <form onSubmit={handleSubmit(submitItem)} className="flex flex-col gap-1 p-2">

      <h3>Novo Almoxarifado</h3>

      <InputAlmoxarifado 
        type="text" 
        placeholder="Id Empresa" 
        register={{...register("empresaId")}} 
      />

      <InputAlmoxarifado 
        type="text" 
        placeholder="Descrição" 
        register={{...register("descricao")}} 
      />
      
      <InputAlmoxarifado 
        type="text" 
        placeholder="Tipo" 
        register={{...register("tipo")}} 
      />

      <SubmitButton nome="Inserir" />
      <CancelButton toggleActive={toggleAddActive} />

    </form>
  )
}