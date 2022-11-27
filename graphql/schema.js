const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const { predios } = require('./queries');
const { createPredio } = require('./mutations')
const Querytype = new GraphQLObjectType({
    name: 'QueryType',
    description: 'Queries',
    fields: {
        predios
    }

});
const Mutationtype = new GraphQLObjectType({
    name: 'MutationType',
    description: 'Queries',
    fields: {
        createPredio
    }

});

module.exports = new GraphQLSchema({
    query: Querytype,
    mutation: Mutationtype
});