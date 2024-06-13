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

     this.hasMany(models.Matricula, {
      foreignKey: 'estudante_id',
      scope: { status: 'matriculado' },
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
    tableName: 'pessoas'
  });
  return Pessoa;
};