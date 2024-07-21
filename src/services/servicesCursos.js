const Services = require('./services.js');

class CursoService extends Services{
  constructor(){
    super('Curso');
  }
}

module.exports = CursoService;