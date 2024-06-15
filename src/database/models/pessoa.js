'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
     this.hasMany(models.Curso, {
      foreignKey: 'docente_id'
     });
     // faço a rota com base no objeto que quero pesquisar na tabela de muitos 
     //ex: quero pesquisar id x do estudante na tabela de mariculas
     this.hasMany(models.Matricula, {
      foreignKey: 'estudante_id',
      scope: { status: 'matriculado'},
      // Os métodos mixins são criados através destes alias 
      as: 'aulasMatriculadas'
     });
    }
  }
  Pessoa.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas',
    //responsavel pela exclusão suave do banco
    paranoid: true
  });
  return Pessoa;
};