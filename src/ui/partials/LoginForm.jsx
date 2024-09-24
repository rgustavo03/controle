import React from "react";
import { useForm } from "react-hook-form";
import InputLogin from "../components/InputLogin";
import LoginButton from "../components/LoginButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const userSchema = z.object({
  empresaId: z.coerce.number(),
  login: z.string(),
  senha: z.string()
});


export default function LoginForm({logar}) {


  const { register, handleSubmit } = useForm({
    resolver: zodResolver(userSchema)
  });


  const submitLogin = (data) => {
    logar(data);
  }


  return (
    <form onSubmit={handleSubmit(submitLogin)}>

      <InputLogin type="text" placeholder="Id da empresa" register={{...register("empresaId")}} />

      <InputLogin type="text" placeholder="Email" register={{...register("login")}} />

      <InputLogin type="password" placeholder="Senha" register={{...register("senha")}} />

      <LoginButton nome="Entrar" />

    </form>
  )
}
