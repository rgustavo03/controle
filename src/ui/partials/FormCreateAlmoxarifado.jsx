import React from "react";
import InputAlmoxarifado from "../components/InputAlmoxarifado";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "../components/SubmitButton";


const userSchema = z.object({
  empresaId: z.coerce.number(),
  descricao: z.string(),
  tipo: z.coerce.number()
});


export default function FormCreateAlmoxarifado({create}) {


  const { register, handleSubmit } = useForm({
    resolver: zodResolver(userSchema)
  });


  const submitItem = (data) => {
    create(data);
  }


  return (
    <form onSubmit={handleSubmit(submitItem)}>
      <InputAlmoxarifado type="text" placeholder="Id Empresa" register={{...register("empresaId")}} />
      <InputAlmoxarifado type="text" placeholder="Descrição" register={{...register("descricao")}} />
      <InputAlmoxarifado type="text" placeholder="Tipo" register={{...register("tipo")}} />

      <SubmitButton nome="Inserir" />
    </form>
  )
}