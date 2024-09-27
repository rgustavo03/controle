import React from "react";
import FormAltAlmoxarifado from "./FormAltAlmoxarifado";
import altAlmoxarifado from "../../services/altAlmoxarifado";

export default function AlterAlmoxarifado({itemAlt, altActive, toggleAltActive, token, updateListAlmoxarifados, navigate}) {

  function alt(item) {
    const id = itemAlt.id;

    const descricao = item.descricao == '' ? itemAlt.descricao : item.descricao;
    const tipo = item.tipo == 0 ? itemAlt.tipo : item.tipo;

    if(descricao != itemAlt.descricao || tipo != itemAlt.tipo) {
      altAlmoxarifado(id, descricao, tipo, token, updateListAlmoxarifados, navigate);
    }

    toggleAltActive(false);
  }


  if(altActive) return (
    <FormAltAlmoxarifado itemAlt={itemAlt} alt={alt} toggleAltActive={toggleAltActive} />
  )
}
