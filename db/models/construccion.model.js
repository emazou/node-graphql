const { Model, DataTypes } = require('sequelize');
const { PREDIO_TABLE } = require('./predio.model');

const CONSTRUCCION_TABLE = 'construcciones';

const ConstruccionSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    area: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
            min: 1
        }
    },
    noPisos: {
        allowNull: false,
        field: 'no_pisos',
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 100
        }
    },
    tipoConstruccion: {
        allowNull: false,
        field: 'tipo_construccion',
        type: DataTypes.STRING,
    },
    direccion: {
        allowNull: false,
        field: 'direccion',
        type: DataTypes.STRING,
    },
    idPredio: {
        allowNull: false,
        field: 'id_predio',
        unique: true,
        type: DataTypes.INTEGER,
        references: {
            model: PREDIO_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
}


class Construccion extends Model {

    static associate(models) {
        this.belongsTo(models.Predio, {
            as: 'predio'
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CONSTRUCCION_TABLE,
            modelName: 'Construccion',
            timestamps: false
        }
    }
}

module.exports = { Construccion, ConstruccionSchema, CONSTRUCCION_TABLE };
