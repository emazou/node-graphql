const { Model, DataTypes } = require('sequelize');
const { PREDIO_TABLE } = require('./predio.model');

const TERRENO_TABLE = 'terrenos';

const TerrenoSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    area: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
            min: 1
        }
    },
    fuentesAgua: {
        allowNull: false,
        field: 'fuentes_agua',
        type: DataTypes.BOOLEAN,
    },
    construcciones: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
    },
    idPredio: {
        allowNull: false,
        field: 'id_predio',
        unique: true,
        type: DataTypes.UUID,
        references: {
            model: PREDIO_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    tipoTerreno: {
        allowNull: false,
        field: 'tipo_terreno',
        type: DataTypes.STRING,
    },
    valorComercial: {
        allowNull: false,
        field: 'valor_comercial',
        type: DataTypes.INTEGER,
        validate: {
            min: 1
        }
    },
}


class Terreno extends Model {

    static associate(models) {
        this.belongsTo(models.Predio, {
            as: 'predio'
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: TERRENO_TABLE,
            modelName: 'Terreno',
            timestamps: false
        }
    }
}

module.exports = { Terreno, TerrenoSchema, TERRENO_TABLE };
