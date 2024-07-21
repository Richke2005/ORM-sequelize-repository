const Controller = require('./controller.js');
const CategoriaServices = require('../services/servicesCategoria.js');

const categoriaServices = new CategoriaServices();

class categoriaController extends Controller {
  constructor(){
    super(categoriaServices);
  }
}

module.exports = categoriaController;