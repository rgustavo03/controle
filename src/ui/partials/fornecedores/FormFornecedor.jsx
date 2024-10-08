import React, { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { FornecedoresContext } from "../../../context/fornecedoresContext";
import { UserContext } from "../../../context/userContext";


export const FormFornecedor = ({formOn, exec}) => {


  // exec == "new"
  // exec == "alt"

  const { id } = useParams();

  const { item } = useContext(FornecedoresContext);

  const { user } = useContext(UserContext);

  /*
  function updateListFornecedores() {
    getFornecedores(getToken(), user.id, handleSetList, navigate);
  }
  */

  useEffect(() => {

    console.log(user);
    console.log(exec);
    console.log(item);
    console.log(id);

    if(exec == "alt") {
      //
    }

  }, [formOn]);


  // ==============


  function submit(data) {
    if(exec == "new") {
      create(data);
    }
    if(exec == "alt") {
      alt(data);
    }
  }


  function create(data) {
    //
  }


  function alt(data) {
    //
  }




  if(formOn) return (
    <div>
      <form>
        form fornecedor
      </form>
    </div>
  )
}