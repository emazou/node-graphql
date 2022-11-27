const { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLString } = require('graphql');

const { models } = require('../libs/sequelize');

const { PredioType } = require('./types');

const createPredio = {
    type: PredioType,
    args: {
        noPredial: { type: new GraphQLNonNull(GraphQLInt) },
        avaluo: { type: new GraphQLNonNull(GraphQLInt) },
        nombre: { type: new GraphQLNonNull(GraphQLString) },
        departamento: { type: new GraphQLNonNull(GraphQLString) },
        municipio: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (_, args) => {
        const predio = await models.Predio.findOne({
            where: {
                noPredial: args.noPredial
            }
        });
        console.log(predio)
        if (!predio) {
            const newPredio = await models.Predio.create(args);
            return newPredio;
        } else {
            throw new Error('The predio already exists')
        }
    }
}

module.exports = { createPredio }
