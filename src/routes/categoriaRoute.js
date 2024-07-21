const { Router } = require('express');
const categoriaController = require('../controllers/categoriaController.js');

const categoriaControler = new categoriaController();
const router = Router();

router
  .get('/categorias', (req, res) => categoriaControler.pegaTodos(req, res))
  .get('/categorias/:id', (req, res) => categoriaControler.pegaUmPorId(req, res))
  .post('/categorias', (req, res) => categoriaControler.criaNovo(req, res))
  .put('/categorias/:id', (req, res) => categoriaControler.atualiza(req, res))
  .delete('/categorias/:id', (req, res) => categoriaControler.exclui(req, res));

module.exports = router;