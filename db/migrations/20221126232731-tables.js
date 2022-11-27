'use strict';

const { PREDIO_TABLE, PredioSchema } = require('../models/predio.model');
const { TERRENO_TABLE, TerrenoSchema } = require('../models/terreno.model');
const { CONSTRUCCION_TABLE, ConstruccionSchema } = require('../models/construccion.model');
const { PROPIETARIO_TABLE, PropietarioSchema } = require('../models/propietario.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PREDIO_TABLE, PredioSchema);
    await queryInterface.createTable(TERRENO_TABLE, TerrenoSchema);
    await queryInterface.createTable(CONSTRUCCION_TABLE, ConstruccionSchema);
    await queryInterface.createTable(PROPIETARIO_TABLE, PropietarioSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(PREDIO_TABLE);
    await queryInterface.dropTable(TERRENO_TABLE);
    await queryInterface.dropTable(CONSTRUCCION_TABLE);
    await queryInterface.dropTable(PROPIETARIO_TABLE);
  }
};