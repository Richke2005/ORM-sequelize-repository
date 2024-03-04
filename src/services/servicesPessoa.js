const Services = require("./services.js");

class PessoaService extends Services{
    constructor(){
        super("Pessoa");
    }
}

module.exports = PessoaService;