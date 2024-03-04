class Controller {
    constructor(entidadeService){
        this.entidadeService = entidadeService;
    }

    async pegaTodos(req, res){
        try{
            const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).send(listaDeRegistros);
        }catch(error){

        }
    }


    async atualiza(req, res){
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try{
          const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number.parseInt(id))
            if(!foiAtualizado){
                res.status(400).json({message: "Id da requisição não encontrado"});
            }
            return res.status(200).json({message: `registro ${id} atualizado com sucesso`});
        }catch(error){

        }
    }
}

module.exports = Controller;