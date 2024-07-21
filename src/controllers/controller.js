//controllers por regra geral lidam apenas com parte de requisições e respostas 
// já os services fazem a interação com o banco de dados aplicando as regras de negócios

class Controller {
  constructor(entidadeService){
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res){
    try{
      const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).send(listaDeRegistros);
    }catch(error){
      return res.status(500).send({error: error.message});
    }
  }

  async pegaUmPorId(req, res){
    try{
      const { id } = req.params;
      const registro = await this.entidadeService.pegaUmPorId(Number.parseInt(id));
      return res.status(200).send(registro);
    }catch(error){
      res.status(400).send({message: 'Id da requisição não encontrado'});
    }
  }

  async criaNovo(req, res){
    const dadosDoRegistro = req.body;
    try{
      const registroCriado = await this.entidadeService.criaNovoRegistro(dadosDoRegistro);
      return res.status(201).send(registroCriado);
    }catch(error){
      res.status(500).send({error: error.message});
    }
  }

  async atualiza(req, res){
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try{
      const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number.parseInt(id));
      if(!foiAtualizado){
        res.status(400).send({message: 'Id da requisição não encontrado'});
      }
      return res.status(200).send({message: `registro ${id} atualizado com sucesso`});
    }catch(error){
      res.status(500).send({message: error.message});
    }
  }

  async exclui(req, res){
    const { id } = req.params;
    try {
      const registroExcluido = await this.entidadeService.excluiRegistro(Number.parseInt(id));
      if(!registroExcluido){
        res.status(400).send({message: 'Id da requisição não encontrado'});
      }
      return res.status(200).send({message: `registro ${id} excluido com sucesso`});
    }catch(error){
      res.status(500).send({error: error.message});
    }
  }
}

module.exports = Controller;