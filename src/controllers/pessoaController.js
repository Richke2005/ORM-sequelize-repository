const Controller = require('./controller.js');
const PessoaServices = require('../services/servicesPessoa.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor(){
    super(pessoaServices);
  }

  async pegaMatriculas(req, res){
    const { estudanteId } = req.params;
    try{
      const listaMatriculas = await pessoaServices.pegaMatriculasPorEstudante(Number.parseInt(estudanteId));
      return res.status(200).send(listaMatriculas);
    }catch(error){
      res.status(500).send({error: error.message});
    }
  }

  async pegaTodasAsPessoas(req, res){
    try{
      const listaTodasAsPessoas = await pessoaServices.pegaPessoasEscopoTodos();
      return res.status(200).send(listaTodasAsPessoas);
    }catch(error){
      return res.status(500).send({error: error.message});
    }
  }
}

module.exports = PessoaController;