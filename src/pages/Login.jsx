import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../ui/partials/LoginForm";
import axios from "axios";
import useSession from "../hooks/useSession";

export default function Login() {

  const [active, setActive] = useState(false); // pagina ativa ou não

  const navigate = useNavigate(); // redirecionar páginas

  const { startSession, checkSession } = useSession(); // funções de sessão do usuário


  useEffect(() => {
    const isLogged = checkSession();

    if(!isLogged) {
      setActive(true);
      return
    }

    navigate('/controle'); // redirecionar para página controle
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

        'https://compsysweb.pdvfiscal.com.br/api/v1/login-empresas',
        { empresaId: user.empresaId, login: user.login, senha: user.senha }

      )
      .then(res => {

        if(res.data.status == 200) connection(res.data); // sucesso conexão
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
    //console.log(data.data.usuario);
    //console.log(data.data.perfilUsuario);
    //console.log(data.data.loja); // dados empresa

    const token = data.data.token;
    const expiration = data.data.expiration;

    startSession(token, expiration);

    navigate('/controle'); // redirecionar para página controle
  }



  if(active) return (
    <div id="page-login" className="flex flex-row h-screen">

      <section id="login-section" className="p-20 flex justify-center">
        <LoginForm login={login} />
      </section>

      <section id="info-login-section" className="flex-auto bg-slate-900"></section>

    </div>
  )
}