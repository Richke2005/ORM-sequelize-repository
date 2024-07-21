const express = require('express');
const pessoasRoute = require('./pessoaRoute.js');
const categoriasRoute = require('./categoriaRoute.js');
const cursosRoute = require('./cursoRoute.js');

module.exports = app => {
  app.route('/').get((req, res) =>{
    res.status(200).send({message: 'ORM with sequelize studies'});
  });

  app.use(
    express.json(),
    pessoasRoute,
    categoriasRoute,
    cursosRoute
  );
};