import axiosInterceptor from "../axiosInterceptor";

export default async function altFornecedor(data, token, navigate) {

  // @ts-ignore
  const apiUrl = import.meta.env.VITE_API_FORNECEDORES;

  const axios = axiosInterceptor(navigate);

  try {
    
    await axios.put(
      `${apiUrl}/alterar`,
      data,
      {headers: { Authorization: `Bearer ${token}` }}
    )
    .then(res => {

      console.log(res.data);
      
      if(res.data.status == 200) {
        navigate('/fornecedores');
      }

    })
    .catch(error => {

      console.log(error);
      alert('Falha ao cadastrar fornecedor.');

    });

  }
  catch (error) {

    console.log(error);

  }

}