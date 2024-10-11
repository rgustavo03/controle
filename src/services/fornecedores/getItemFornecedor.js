
import getFornecedores from "./getFornecedores";


export function getItemFornecedor(idItem, idUsuario, token, navigate, setItemAltData) {

  function handleSetList(list) {
    list.forEach(item => {

      if(item.id == idItem) {
        setItemAltData(item);
      }

    });
  }

  getFornecedores(token, idUsuario, navigate, handleSetList);

}
