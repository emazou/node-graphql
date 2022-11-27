const { GraphQLList, GraphQLID, GraphQLNonNull } = require('graphql');
const { PredioType } = require('./types')
const { models } = require('../libs/sequelize');

const predios = {
    type: new GraphQLList(PredioType),
    description: 'Get predios',
    resolve: () => models.Predio.findAll()
}

module.exports = { predios }