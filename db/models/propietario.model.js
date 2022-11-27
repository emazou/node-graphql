const { Model, DataTypes } = require('sequelize');

const { PREDIO_TABLE } = require('./predio.model')

const PROPIETARIO_TABLE = 'propietarios';

const PropietarioSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    tipoPersona: {
        allowNull: false,
        field: 'tipo_persona',
        type: DataTypes.STRING
    },
    tipoDocumento: {
        allowNull: true,
        field: 'tipo_documento',
        type: DataTypes.STRING,
    },
    noDocumento: {
        allowNull: true,
        field: 'no_documento',
        type: DataTypes.BIGINT,
    },
    nombres: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    apellidos: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    nit: {
        allowNull: true,
        type: DataTypes.BIGINT,
    },
    razonSocial: {
        allowNull: true,
        field: 'razon_social',
        type: DataTypes.STRING,
    },
    direccion: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    telefono: {
        allowNull: false,
        type: DataTypes.BIGINT,
    },
    email: {
        allowNull: true,
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        }
    },
    idPredio: {
        allowNull: false,
        field: 'id_predio',
        type: DataTypes.UUID,
        references: {
            model: PREDIO_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },

}


class Propietario extends Model {

    static associate(models) {
        this.belongsTo(models.Predio, {
            as: 'predio'
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PROPIETARIO_TABLE,
            modelName: 'Propietario',
            timestamps: false
        }
    }
}

module.exports = { Propietario, PropietarioSchema, PROPIETARIO_TABLE };
