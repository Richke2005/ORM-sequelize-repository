const Controller = require("./controller.js");
const MatriculaServices = require("../services/servicesMatricula.js");

const matriculaServices = new MatriculaServices();

class MatriculaController extends Controller {
    constructor(){
        super(matriculaServices);
    }
}

module.exports = MatriculaController;