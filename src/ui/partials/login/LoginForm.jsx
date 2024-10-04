import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/form/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Submit } from "../../components/form/Submit";


const userSchema = z.object({
  empresaId: z.coerce.number().min(1),
  login: z.string().min(1),
  senha: z.string().min(1)
});


export default function LoginForm({login}) {


  const { register, handleSubmit } = useForm({
    resolver: zodResolver(userSchema)
  });


  const submitLogin = (userData) => {
    login(userData);
  }


  return (
    <form onSubmit={handleSubmit(submitLogin)} className="flex flex-col gap-2 p-5" >

      <h2 className="text-2xl my-2">Login</h2>

      <Input 
        label="Id da empresa" 
        type="text" 
        placeholder="Id da empresa" 
        register={{...register("empresaId")}} 
      />

      <Input 
        label="Email" 
        type="text" 
        placeholder="Email" 
        register={{...register("login")}} 
      />

      <Input 
        label="Senha" 
        type="password" 
        placeholder="Senha" 
        register={{...register("senha")}} 
      />

      <Submit type="session" name="Entrar" />

    </form>
  )
}
