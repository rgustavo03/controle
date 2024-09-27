import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../ui/partials/LoginForm";
//import axios from "axios";
import useSession from "../hooks/useSession";
import axiosInterceptor from "../services/axiosInterceptor";

export default function Login() {

  // @ts-ignore
  const loginApiURL = import.meta.env.VITE_API_LOGIN;

  const navigate = useNavigate(); // redirecionar páginas
  const axios = axiosInterceptor();

  const { startSession, endSession } = useSession(); // funções de sessão do usuário


  useEffect(() => {
    endSession();
  }, []);


  const [user, setUser] = useState(
    { empresaId: NaN, login: '', senha: '' }
  );


  // função é chamada em componente FormLogin
  const login = (dataUser) => {
    setUser(dataUser);
  }


  useEffect(() => {
    if(user.login.length == 0) return
    fetchLogin();
  }, [user]);


  const fetchLogin = async () => {
    try {
      await axios.post(

        `${loginApiURL}`,
        { empresaId: user.empresaId, login: user.login, senha: user.senha }

      )
      .then(res => {

        if(res.data.status == 200) connection(res.data.data.token); // sucesso conexão
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


  const connection = (token) => {
    startSession(token);

    navigate('/controle'); // redirecionar para página controle
  }



  return (
    <div id="page-login" className="flex flex-row h-screen">

      <section id="login-section" className="p-20 flex justify-center">
        <LoginForm login={login} />
      </section>

      <section id="info-login-section" className="flex-auto bg-slate-900"></section>

    </div>
  )
}