const express = require('express');
const pessoasRoute = require('./pessoaRoute.js');

module.exports = app => {
    app.route("/").get((req, res) =>{
        res.status(200).send({message: "ORM with sequelize studies"})
    })

    app.use(
        express.json(),
        pessoasRoute
    )
}