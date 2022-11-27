const { Predio, PredioSchema } = require('./predio.model');
const { Terreno, TerrenoSchema } = require('./terreno.model');
const { Propietario, PropietarioSchema } = require('./propietario.model');
const { Construccion, ConstruccionSchema } = require('./construccion.model');

function setupModels(sequelize) {
    Predio.init(PredioSchema, Predio.config(sequelize));
    Terreno.init(TerrenoSchema, Terreno.config(sequelize));
    Propietario.init(PropietarioSchema, Propietario.config(sequelize));
    Construccion.init(ConstruccionSchema, Construccion.config(sequelize));

    Predio.associate(sequelize.models);
    Terreno.associate(sequelize.models);
    Propietario.associate(sequelize.models);
    Construccion.associate(sequelize.models);
}

module.exports = setupModels;