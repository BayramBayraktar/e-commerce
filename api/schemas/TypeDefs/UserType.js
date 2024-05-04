const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        phone_number: { type: GraphQLString },
        e_posta: { type: GraphQLString },
        password: { type: GraphQLString },
    })
})

module.exports = UserType
