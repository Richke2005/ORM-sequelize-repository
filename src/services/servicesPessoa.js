const Services = require("./services.js");

class PessoaService extends Services{
    constructor(){
        super("Pessoa");
    }

    async pegaMatriculasPorEstudante(estudanteId){
        const estudante = await super.pegaUmPorId(estudanteId);
        const listaMatriculas = await estudante.getAulasMatriculadas();
        return listaMatriculas;
    }
    //Pessoa.getCursos() existe
}

module.exports = PessoaService;