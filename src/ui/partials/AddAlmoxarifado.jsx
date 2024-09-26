import React from "react";
import FormCreateAlmoxarifado from "./FormCreateAlmoxarifado";
import createAlmoxarifado from "../../services/createAlmoxarifado";
import AddActiveButton from "../components/AddActiveButton";

export default function AddAlmoxarifado({addActive, toggleAddActive, updateListAlmoxarifados, token}) {

  function create(data) {
    createAlmoxarifado(data, token, updateListAlmoxarifados);
    toggleAddActive(false);
  }


  



  return (
    <div id="create-almoxarifado" className="flex justify-start">
      {addActive? (
        <FormCreateAlmoxarifado create={create} toggleAddActive={toggleAddActive} />
      ) : (
        <AddActiveButton toggleAddActive={toggleAddActive} />
      )}
    </div>
  )
}
