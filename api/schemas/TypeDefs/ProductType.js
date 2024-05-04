const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat } = require('graphql')
const UserType = require('./UserType')
const User = require('../../models/user.model')

const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
        id: { type: GraphQLID },
        product_title: { type: GraphQLString },
        catalog_name: { type: GraphQLString },
        remaining_product: { type: GraphQLFloat },
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.By_Id)
            }
        }
    })
})

module.exports = ProductType
