import React from "react";
import InputAlmoxarifado from "../components/InputAlmoxarifado";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "../components/SubmitButton";
import CancelButton from "../components/CancelButton";


const userSchema = z.object({
  descricao: z.string(),
  tipo: z.coerce.number()
});


export default function FormAltAlmoxarifado({itemAlt, alt, toggleAltActive}) {


  const { register, handleSubmit } = useForm({
    resolver: zodResolver(userSchema)
  });


  const submitItem = (data) => {
    alt(data);
  }


  return (
    <div className="fixed size-full inset-0 bg-[rgba(255,255,255,0.5)] flex justify-center items-center">


      <div className="flex">
        <form onSubmit={handleSubmit(submitItem)} className="flex flex-col gap-1 p-8 bg-white border border-slate-400 rounded">

          <h6 className="text-lg mb-3">
            Alterar
          </h6>

          <h6 className="size-fit text-base bg-slate-300 rounded p-2">
            Id: {itemAlt.id}
          </h6>

          <InputAlmoxarifado type="text" placeholder={itemAlt.descricao} register={{...register("descricao")}} />
          <InputAlmoxarifado type="text" placeholder={itemAlt.tipo} register={{...register("tipo")}} />

          <SubmitButton nome="Alterar" />
          <CancelButton toggleActive={toggleAltActive} />

        </form>
      </div>


    </div>
  )
}