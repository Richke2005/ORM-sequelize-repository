const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const pessoaControler = new PessoaController();
const router = Router();

router.get('/pessoas', (req, res) => pessoaControler.pegaTodos(req, res))
.put('/pessoas/:id', (req, res) => pessoaControler.atualiza(req, res));

module.exports = router;