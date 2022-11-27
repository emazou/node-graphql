const { Model, DataTypes, Sequelize } = require('sequelize');

const PREDIO_TABLE = 'predios';

const PredioSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    noPredial: {
        allowNull: false,
        unique: true,
        field: 'no_predial',
        type: DataTypes.BIGINT
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departamento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    municipio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    avaluo: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
            min: 1
        }
    },
}


class Predio extends Model {

    static associate(models) {
        this.hasOne(models.Terreno, {
            as: 'terreno',
            foreignKey: 'idPredio'
        })
        this.hasMany(models.Propietario, {
            as: 'propietario',
            foreignKey: 'idPredio'
        });
        this.hasMany(models.Construccion, {
            as: 'construccion',
            foreignKey: 'idPredio'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PREDIO_TABLE,
            modelName: 'Predio',
            timestamps: false
        }
    }
}

module.exports = { Predio, PredioSchema, PREDIO_TABLE };
