'use strict';
const isCpfValid = require('../../helpers/validaCpfHelper.js');

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
    nome: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 40], 
          msg: 'The name must be minimum length 3 characters'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true, 
          msg: 'Email format invalid'
        }
      }
    },
    cpf:{ 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        cpfIsValid: (cpf) => {
          //se passar na condiçao passa no validador
          if(!isCpfValid(cpf)) 
            throw new Error(`Invalid cpf number: ${cpf}`);
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas',
    //responsavel pela exclusão suave do banco
    paranoid: true,
    defaultScope: {
      where: {
        ativo: true
      }
    },
    scopes: {
      todosOsRegistros: {
        where: {}
      }
    }
  });

  return Pessoa;
};