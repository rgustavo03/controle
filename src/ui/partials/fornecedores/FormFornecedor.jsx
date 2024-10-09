import React, { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { FornecedoresContext } from "../../../context/fornecedoresContext";
import { UserContext } from "../../../context/userContext";
import { Box } from "../../components/form/Box";
import { Input } from "../../components/form/Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const fornecedorSchema = z.object({
  descricao: z.string().min(1),
  tipo: z.coerce.number().min(1)
});


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

  // user, exec, item, id

  useEffect(() => {
    
    if(exec == "alt") {
      //
    }

  }, [formOn]);


  // ==============


  const { register, handleSubmit } = useForm({
    resolver: zodResolver(fornecedorSchema)
  });


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
    <form onSubmit={handleSubmit(submit)} className="flex flex-col md:flex-row gap-3">



      <div className="h-[165px] w-[450px] bg-gray-300 border-4 border-dashed border-gray-400 rounded-lg">
        Foto
      </div>



      <div className="flex-1 flex flex-col gap-4">

        <Box title="Dados Pessoais">
          <div id="dados-pessoais-box-form" className="w-full flex flex-col gap-3">

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <Input label="Razão Social" type="text" placeholder="Razão Social" register={{...register("nomeRazaoSocial")}} />
              </div>
              <div className="flex-1">
                <Input label="Nome Fantasia" type="text" placeholder="Nome Fantasia" register={{...register("nomeFantasia")}} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <Input label="Tipo" type="text" placeholder="Tipo" register={{...register("tipo")}} />
              </div>
              <div className="grow-[4]">
                <Input label="CPF / CNPJ" type="text" placeholder="CPF / CNPJ" register={{...register("cpfCnpj")}} />
              </div>
              <div className="grow-[4]">
                <Input label="PIS Pasep NIT" type="text" placeholder="PIS Pasep NIT" register={{...register("numeroPisPasepNit")}} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-3">
                <Input label="Email" type="text" placeholder="Email" register={{...register("email")}} />
              </div>
              <div className="flex-2">
                <Input label="Telefone" type="text" placeholder="Telefone" register={{...register("telefone")}} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <Input label="Rg Inscrição Estadual" type="text" placeholder="Rg Inscrição Estadual" register={{...register("rgInscricaoEstadual")}} />
              </div>
              <div className="flex-1">
                <Input label="Inscrição Municipal" type="text" placeholder="Inscrição Municipal" register={{...register("inscricaoMunicipal")}} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <Input label="CRT" type="text" placeholder="CRT" register={{...register("crt")}} />
              </div>
              <div className="flex-2">
                <Input label="Optante Simples" type="text" placeholder="Optante Simples" register={{...register("optanteSimples")}} />
              </div>
            </div>

          </div>
        </Box>

        <Box title="Endereço">
          <div id="endereco-box-form" className="flex flex-col">

            <div className="flex flex-col md:flex-row">
              <div className="flex-1 flex flex-row">
                <div className="flex-1">CEP</div>
                <div className="flex-1">UF</div>
              </div>
              <div className="flex-1">
                <div className="flex-1">Cidade</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex-1">Bairro</div>
              <div className="flex-1">Rua</div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex-1">Número</div>
              <div className="flex-1">Complemento</div>
              <div className="flex-1">CódigoIBGE</div>
            </div>

          </div>
        </Box>

        <Box title="Situação">
          <div id="endereco-box-form" className="flex flex-col">

            <div className="flex flex-col md:flex-row">
              <div className="flex-1">Atividade</div>
              <div className="flex-1">Limite Crédito</div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex-1">Liberado</div>
              <div className="flex-1">Desconto</div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex-1">Forma Pagamento</div>
              <div className="flex-1">Condição Pagamento Id</div>
            </div>
            
          </div>
        </Box>

      </div>
  


    </form>
  )
}


const emptyItem = {
  empresaId: 0, //user.id

  nomeRazaoSocial: "",
  nomeFantasia: "",
  tipo: 0,
  cpfCnpj: "",
  numeroPisPasepNit: "",
  email: "",
  telefone: "",
  rgInscricaoEstadual: "",
  inscricaoMunicipal: "",
  crt: 0,
  optanteSimples: true,

  cep: "",
  cidade: "",
  uf: 0,
  logradouro: "",
  numero: "", 
  bairro: "",
  complemento: "",
  codigoIbge: 0,

  
  atividade: 0,
  limiteCredito: 0,
  liberado: true,
  desconto: 0,
  formaPagamentoId: null,
  condicaoPagamentoId: null
}