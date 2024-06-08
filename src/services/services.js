const dataSource = require('../models');

class Services {
    constructor(nomeDoModel){
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros(){
        return dataSource[this.model].findAll();
    }

    async pegaUmPorId(id){
        return dataSource[this.model].findByPk(id);
    }

    async criaNovoRegistro(dadosDoRegistro){
        return dataSource[this.model].create(dadosDoRegistro);
    }

   async atualizaRegistro(dadosAtualizados, id){
    const listaDeregistrosAtualizados = dataSource[this.model].update(dadosAtualizados, { 
        where: { id: id }
        }
    );
    if(listaDeregistrosAtualizados[0] === 0 ){
        return false;
    }
    return true;
   }

   async excluiRegistro(id){
    const registroExcluido = dataSource[this.model].destroy({
        where: { id: id }
    });
    if(registroExcluido === 0){
        return false;
    }
    return true;
   }
}

    

module.exports = Services;