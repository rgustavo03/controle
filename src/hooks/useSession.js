import { useState } from "react";

export default function useSession() {

  const key = 'session';

  const [user, setUser] = useState(JSON.parse(localStorage.getItem(key) || '{}'));



  const startSession = (token, expiration) => {
    const session = {
      token: token, 
      expiration: expiration
    };

    window.localStorage.setItem(key, JSON.stringify(session));
  }



  const checkSession = () => {
    const expDate = new Date(user.expiration);

    const actualDate = new Date();

    if(expDate > actualDate) return true // dentro do tempo limite de login

    // tempo de login excedido
    setStorage({}); // usuario vazio
    return false
  }



  const setStorage = (data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }



  return { startSession, checkSession }
}



/*

https://compsysweb.pdvfiscal.com.br/api/v1/almoxarifado/listar

{
  "data": [
    {
      "id": 1,
      "empresaId": 1,
      "descricao": "PRINCIPAL",
      "tipo": 1,
      "usuarioId": 0,
      "dataInclusao": "2024-08-20T01:25:16.643044",
      "dataAlteracao": null,
      "dataExclusao": null
    }
  ],
  "message": "",
  "status": 200,
  "notificacoes": null
}

// =======================

"data": [
  {
    "id": 1,
    "empresaId": 1,
    "descricao": "PRINCIPAL",
    "tipo": 1,
    "usuarioId": 0,
    "dataInclusao": "2024-08-20T01:25:16.643044",
    "dataAlteracao": null,
    "dataExclusao": null
  }
]
*/