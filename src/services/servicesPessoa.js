const Services = require('./services.js');

class PessoaService extends Services{
  constructor(){
    super('Pessoa');
  }

  async pegaMatriculasPorEstudante(estudanteId){
    const estudante = await super.pegaUmPorId(estudanteId);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }

  async pegaPessoasEscopoTodos(){
    const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');
    return listaPessoas;
  }
  //Pessoa.getCursos() existe
}

module.exports = PessoaService;