const cep = "36020-090";

fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.json())
  .then(data => {
    const endereco = {
      logradouro: data.logradouro,
      complemento: data.complemento,
      bairro: data.bairro,
      localidade: data.localidade,
      uf: data.uf
    };
    console.log(`${endereco.logradouro}, ${endereco.complemento} ${endereco.bairro}, ${endereco.localidade}/${endereco.uf}`);
  })
  .catch(error => console.error(error));