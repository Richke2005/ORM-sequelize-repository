'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      this.hasMany(models.Curso, {
        foreignKey: 'categoria_id'
      });
    }
  }
  Categoria.init({
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categorias',
    paranoid: true
  });
  return Categoria;
};