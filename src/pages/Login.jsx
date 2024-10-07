import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../ui/partials/login/LoginForm";
//import axios from "axios";
import useSession from "../hooks/useSession";
import axiosInterceptor from "../services/axiosInterceptor";
import { UserContext } from "../context/userContext";

export default function Login() {

  // @ts-ignore
  const loginApiURL = import.meta.env.VITE_API_LOGIN;

  const navigate = useNavigate(); // redirecionar páginas
  const axios = axiosInterceptor();

  const { setUserData } = useContext(UserContext);

  const { startToken, endToken } = useSession(); // funções de sessão do usuário



  useEffect(() => {
    endToken();
  }, []);



  // função é chamada em componente FormLogin
  const login = (userData) => {
    if(userData.login.length == 0) return

    fetchLogin(userData);
  }



  const fetchLogin = async (userData) => {
    try {
      await axios.post(

        `${loginApiURL}`, // link api
        {
          empresaId: userData.empresaId, 
          login: userData.login, 
          senha: userData.senha 
        }

      )
      .then(res => {

        if(res.data.status == 200) {
          connection(res.data.data); // sucesso conexão
        }
        else invalid(res.data.message); // erro conexão

      });
    }
    catch(error) {
      console.log(error);
    }
  }



  const invalid = (/** @type {string} */ msg) => {
    console.log(msg);
  }



  const connection = (data) => {

    const userData = {
      id: data.usuario.id,
      email: data.usuario.email,
      nome: data.usuario.nome
    }

    setUserData(userData); // user em UserContext

    startToken(data.token);

    navigate('/almoxarifados'); // redirecionar para página controle
  }



  return (
    <div id="page-login" className="flex flex-col h-screen md:flex-row-reverse">

      <section id="info-login-section" className="h-[70px] md:flex-auto md:h-screen bg-slate-900 flex flex-row justify-center items:center md:justify-start">
        Icon
      </section>

      <section id="login-section" className="flex justify-center items-center p-2 py-12 md:p-10 lg:p-20">
        <LoginForm login={login} />
      </section>

    </div>
  )
}