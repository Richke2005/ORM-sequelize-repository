const database = require('../models')

class PessoaController{
    static async getAll(req, res){
        try{
            const listaDePessoas = await database.Pessoa.findAll();
            return res.status(200).send(listaDePessoas);
        }catch(error){
            res.status(500).send(error.message);
        }
    }
}

module.exports = PessoaController;