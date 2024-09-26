import React from "react";
import { useForm } from "react-hook-form";
import InputLogin from "../components/InputLogin";
import LoginButton from "../components/LoginButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const userSchema = z.object({
  empresaId: z.coerce.number().min(1),
  login: z.string().min(1),
  senha: z.string().min(1)
});


export default function LoginForm({login}) {


  const { register, handleSubmit } = useForm({
    resolver: zodResolver(userSchema)
  });


  const submitLogin = (data) => {
    login(data);
  }


  return (
    <form onSubmit={handleSubmit(submitLogin)} className="flex flex-col gap-2 p-5" >

      <h2 className="text-2xl my-2">Login</h2>

      <InputLogin type="text" placeholder="Id da empresa" register={{...register("empresaId", { required: true })}} />

      <InputLogin type="text" placeholder="Email" register={{...register("login", { required: true })}} />

      <InputLogin type="password" placeholder="Senha" register={{...register("senha", { required: true })}} />

      <LoginButton nome="Entrar" />

    </form>
  )
}
