const { GraphQLObjectType, GraphQLID, GraphQLBoolean, GraphQLInt, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLScalarType } = require('graphql');

const PredioType = new GraphQLObjectType({
    name: "Predio",
    description: "Predio Type",
    fields: () => ({
        id: { type: GraphQLID },
        noPredial: { type: GraphQLInt },
        avaluo: { type: GraphQLInt },
        nombre: { type: GraphQLString },
        departamento: { type: GraphQLString },
        municipio: { type: GraphQLString }
    })
});

const TerrenoType = new GraphQLObjectType({
    name: "Terreno",
    description: "Terreno Type",
    fields: () => ({
        id: { type: GraphQLID },
        area: { type: GraphQLInt },
        valorComercial: { type: GraphQLInt },
        fuentesAgua: { type: GraphQLBoolean },
        construcciones: { type: GraphQLBoolean },
        idPredio: { type: GraphQLInt },
        tipoTerreno: { type: GraphQLString }
    })
});

module.exports = { PredioType, TerrenoType }
