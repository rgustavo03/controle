import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import LoginForm from "../ui/partials/LoginForm";
import axios from "axios";
import useSession from "../hooks/useSession";

export default function Login() {

  const { startSession, checkSession } = useSession();


  useEffect(() => {
    const isLogged = checkSession();

    if(isLogged) {
      console.log('logado')
      redirect('/controle'); // redirecionar para página controle
    }
  }, []);


  const [user, setUser] = useState(
    { empresaId: NaN, login: '', senha: '' }
  );


  const logar = (dataUser) => {
    setUser(dataUser);
  }


  useEffect(() => {
    if(user.login.length == 0) return
    fetchLogin();
  }, [user]);


  const fetchLogin = async () => {
    try {
      const response = await axios.post(

        'https://compsysweb.pdvfiscal.com.br/api/v1/login-empresas',
        { empresaId: user.empresaId, login: user.login, senha: user.senha }

      )
      .then(res => {

        if(res.data.status == 200) connection(res.data); // sucesso conexão
        else if (res.data.status == 401) invalid(res.data.message); // erro conexão

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
    //console.log(data.data.usuario);
    //console.log(data.data.perfilUsuario);
    //console.log(data.data.loja); // dados empresa

    const token = data.data.token;
    const expiration = data.data.expiration;

    startSession(token, expiration);

    // redirecionar para pagina almoxarifado
  }



  return (
    <div id="page-login" className="flex flex-row">

      <section id="login-section" className="w-96 p-32">
        <LoginForm logar={logar} />
      </section>

      <section id="info-login-section" className="">
        //
      </section>

    </div>
  )
}