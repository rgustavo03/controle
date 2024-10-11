import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { Box } from "../../components/form/Box";
import { Input } from "../../components/form/Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { initialHolder, setHolderValues } from "../../../services/fornecedores/placeholder";
import { Submit } from "../../components/form/Submit";
import { Button } from "../../components/Button";
import { Select } from "../../components/form/Select";
import { atividades, liberado, municipioEmpty, optanteSimples, tiposPessoa, ufs } from "../../../data/fornecedores";
import { SelectUf } from "../../components/form/SelectUf";
import { getMunicipios } from "../../../services/getMunicipios";
import { getItemFornecedor } from "../../../services/fornecedores/getItemFornecedor";
import useSession from "../../../hooks/useSession";
import filterFornecedor from "../../../services/fornecedores/filterFornecedor";
import createFornecedor from "../../../services/fornecedores/createFornecedor";
import altFornecedor from "../../../services/fornecedores/altFornecedor";


const fornecedorSchema = z.object({
  nomeRazaoSocial: z.string().min(1),
  nomeFantasia: z.string().min(1),
  tipo: z.coerce.number().min(1),
  cpfCnpj: z.string().min(1),
  numeroPisPasepNit: z.string().min(1),
  email: z.string().min(1),
  telefone: z.string().min(1),
  rgInscricaoEstadual: z.string().min(1),
  inscricaoMunicipal: z.string().min(1),
  crt: z.coerce.number().min(1),
  optanteSimples: z.coerce.number().min(1),
  cep: z.string().min(1),
  uf: z.coerce.number().min(1),
  cidade: z.string().min(1),
  bairro: z.string().min(1),
  logradouro: z.string().min(1),
  numero: z.string().min(1),
  complemento: z.string().min(1),
  codigoIbge: z.coerce.number().min(0),
  atividade: z.coerce.number().min(1),
  limiteCredito: z.coerce.number().min(0),
  liberado: z.coerce.number().min(1),
  desconto: z.coerce.number().min(0),
  formaPagamentoId: z.string().min(1),
  condicaoPagamentoId: z.string().min(1),
});


export const FormFornecedor = ({formOn, exec}) => {

  const navigate = useNavigate();

  const { idFornecedor } = useParams();

  const { user } = useContext(UserContext);

  const { getToken } = useSession();

  const [ itemAlt, setItemAlt ] = useState({});

  const [ holder, setHolder ] = useState(initialHolder);


  // ==============


  function setItemAltData(itemData) {
    setItemAlt(itemData);
  }


  useEffect(() => {

    if(exec == "alt") {
      getItemFornecedor(idFornecedor, user.id, getToken(), navigate, setItemAltData); // (..., itemAlt);
    }

  }, [exec]);


  useEffect(() => {
    setHolder(setHolderValues(itemAlt));
  }, [itemAlt]);


  // ==============


  const { register, handleSubmit } = useForm({
    resolver: zodResolver(fornecedorSchema)
  });


  // ==============


  const [municipios, setMunicipios] = useState([municipioEmpty]);

  function handleChangeUf(event) {
    const uf = event.target.value;
    listMunicipios(uf);
  }

  function listMunicipios(uf) {
    getMunicipios(uf, saveMunicipios);
  }

  function saveMunicipios(list) {
    setMunicipios(list);
  }


  // ==============


  function cancel() {
    navigate('/fornecedores');
  }


  // ==============


  function submit(data) {
    if(exec == "new") {
      create(data);
    }
    if(exec == "alt") {
      alt(data);
    }
  }


  // ==============


  function create(data) {

    console.log("new");

    const dataFiltered = filterFornecedor("new", data, user.id);

    createFornecedor(dataFiltered, getToken(), navigate);
  }


  function alt(data) {

    if(!idFornecedor) {
      alert("Falha ao identificar fornecedor");
      return
    }

    console.log("alt");

    const dataFiltered = filterFornecedor("new", data, idFornecedor);

    altFornecedor(dataFiltered, getToken(), navigate);
  }






  if(formOn) return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col md:flex-row gap-3">



      <div className="h-[165px] w-[450px] bg-gray-300 border-4 border-dashed border-gray-400 rounded-lg flex justify-center items-center">
        Foto
      </div>



      <div className="flex-1 flex flex-col gap-4">

        <Box title="Dados Pessoais">
          <div id="dados-pessoais-box-form" className="w-full flex flex-col gap-3">

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <Input label="Razão Social" type="text" placeholder={holder.nomeRazaoSocial} register={{...register("nomeRazaoSocial")}} />
              </div>
              <div className="flex-1">
                <Input label="Nome Fantasia" type="text" placeholder="Nome Fantasia" register={{...register("nomeFantasia")}} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <Select label="Tipo Pessoa" list={tiposPessoa} register={{...register("tipo")}} />
              </div>
              <div className="grow-[4]">
                <Input label="CPF / CNPJ" type="text" placeholder={holder.cpfCnpj} register={{...register("cpfCnpj")}} />
              </div>
              <div className="grow-[4]">
                <Input label="PIS Pasep NIT" type="text" placeholder="PIS Pasep NIT" register={{...register("numeroPisPasepNit")}} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-3">
                <Input label="Email" type="text" placeholder={holder.email} register={{...register("email")}} />
              </div>
              <div className="flex-2">
                <Input label="Telefone" type="text" placeholder={holder.numeroTelefone} register={{...register("telefone")}} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <Input label="Rg Inscrição Estadual" type="text" placeholder="Rg Inscrição Estudual" register={{...register("rgInscricaoEstadual")}} />
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
                <Select label="Optante Simples" list={optanteSimples} register={{...register("optanteSimples")}} />
              </div>
            </div>

          </div>
        </Box>

        <Box title="Endereço">
          <div id="endereco-box-form" className="w-full flex flex-col gap-3">

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 flex flex-row gap-3">
                <Input label="CEP" type="text" placeholder="CEP" register={{...register("cep")}} />
                <SelectUf label="UF" list={ufs} register={{...register("uf")}} handleChange={handleChangeUf} />
              </div>
              <Select label="Cidades" list={municipios} register={{...register("cidade")}} />
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <Input label="Bairro" type="text" placeholder="Bairro" register={{...register("bairro")}} />
              <Input label="Logradouro" type="text" placeholder="Logradouro" register={{...register("logradouro")}} />
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <Input label="Número" type="text" placeholder="n°" register={{...register("numero")}} />
              <Input label="Complemento" type="text" placeholder="Complemento" register={{...register("complemento")}} />
              <Input label="Código Ibge" type="text" placeholder="Código Ibge" register={{...register("codigoIbge")}} />
            </div>

          </div>
        </Box>

        <Box title="Situação">
          <div id="endereco-box-form" className="w-full flex flex-col gap-3">

            <div className="flex flex-col md:flex-row gap-3">
              <Select label="Atividade" list={atividades} register={{...register("atividade")}} />
              <Input label="Limite Crédito" type="text" placeholder="Limite Crédito" register={{...register("limiteCredito")}} />
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <Select label="Liberado" list={liberado} register={{...register("liberado")}} />
              <Input label="Desconto" type="text" placeholder="Desconto" register={{...register("desconto")}} />
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <Input label="Forma Pagamento Id" type="text" placeholder="Forma Pagamento Id" register={{...register("formaPagamentoId")}} />
              <Input label="Condição Pagamento Id" type="text" placeholder="Condição Pagamento Id" register={{...register("condicaoPagamentoId")}} />
            </div>
            
          </div>
        </Box>

        <div>
          <Button type="cancel" func={cancel} name="Cancelar" />
          <Submit type="session" name="Confirmar" />
        </div>

      </div>

  


    </form>
  )
}
