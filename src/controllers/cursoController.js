const Controller = require('./controller.js');
const CursosServices = require('../services/servicesCursos.js');

const cursoServices = new CursosServices();

class CursoController extends Controller {
  constructor(){
    super(cursoServices);
  }
}

module.exports = CursoController;