const Controller = require("./controller.js");
const PessoaServices = require("../services/servicesPessoa.js");

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
    constructor(){
        super(pessoaServices);
    }
}

module.exports = PessoaController;