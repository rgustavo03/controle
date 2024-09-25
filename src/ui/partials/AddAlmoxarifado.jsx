import React from "react";
import FormCreateAlmoxarifado from "./FormCreateAlmoxarifado";
import createAlmoxarifado from "../../services/createAlmoxarifado";

export default function AddAlmoxarifado({updateListAlmoxarifados, token}) {

  function create(data) {
    createAlmoxarifado(data, token, updateListAlmoxarifados);
  }

  return (
    <div id="create-almoxarifado" className="">
      <FormCreateAlmoxarifado create={create} />
    </div>
  )
}
