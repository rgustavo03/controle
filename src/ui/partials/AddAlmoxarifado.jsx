import React from "react";
import FormCreateAlmoxarifado from "./FormCreateAlmoxarifado";
import createAlmoxarifado from "../../services/createAlmoxarifado";

export default function AddAlmoxarifado({addActive, toggleAddActive, updateListAlmoxarifados, token, navigate}) {

  function create(data) {
    createAlmoxarifado(data, token, updateListAlmoxarifados, navigate);
    toggleAddActive(false);
  }


  if(addActive) return (
    <div id="create-almoxarifado" className="bg-white absolute z-10 top-0 right-0 h-screen w-[440px] flex justify-end">
      <FormCreateAlmoxarifado create={create} toggleAddActive={toggleAddActive} />
    </div>
  )
}
