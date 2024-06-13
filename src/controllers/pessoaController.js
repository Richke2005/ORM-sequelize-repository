const Controller = require("./controller.js");
const PessoaServices = require("../services/servicesPessoa.js");

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
            //erro
        }
    }
}

module.exports = PessoaController;