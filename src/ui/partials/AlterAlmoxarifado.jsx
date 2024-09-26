import React, { useEffect } from "react";
import FormAltAlmoxarifado from "./FormAltAlmoxarifado";
import altAlmoxarifado from "../../services/altAlmoxarifado";

export default function AlterAlmoxarifado({itemAlt, altActive, toggleAltActive, token, updateListAlmoxarifados}) {


  function alt(item) {
    const id = itemAlt.id;
    const descricao = item.descricao;
    const tipo = item.tipo;

    altAlmoxarifado(id, descricao, tipo, token, updateListAlmoxarifados);
  }


  if(altActive) return (
    <FormAltAlmoxarifado itemAlt={itemAlt} alt={alt} toggleAltActive={toggleAltActive} />
  )
}
