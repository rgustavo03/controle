import React from "react";
import InputAlmoxarifado from "../components/InputAlmoxarifado";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "../components/SubmitButton";


const userSchema = z.object({
  descricao: z.string(),
  tipo: z.coerce.number()
});


export default function FormAltAlmoxarifado({alt}) {


  const { register, handleSubmit } = useForm({
    resolver: zodResolver(userSchema)
  });


  const submitItem = (data) => {
    alt(data);
  }


  return (
    <form onSubmit={handleSubmit(submitItem)}>
      <InputAlmoxarifado type="text" placeholder="Descrição" register={{...register("descricao")}} />
      <InputAlmoxarifado type="text" placeholder="Tipo" register={{...register("tipo")}} />

      <SubmitButton nome="Alterar" />
    </form>
  )
}