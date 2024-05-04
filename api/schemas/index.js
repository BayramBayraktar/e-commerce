const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, GraphQLInt, GraphQLNonNull, GraphQLFloat } = require('graphql');
const User = require('../models/user.model')
const Product = require('../models/product.model')
const ProductType = require('./TypeDefs/ProductType')
const UserType = require('./TypeDefs/UserType')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                return Product.find();
            }
        },
        User: {
            type: UserType,
            args: { name: { type: GraphQLString } },
            resolve(parent, args) {
                return User.findOne({ name: args.name });
            }
        }
    }
})


//Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        AddnewUser: {
            type: UserType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                phone_number: { type: GraphQLNonNull(GraphQLString) },
                e_posta: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) },
                location: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {


                const user = new User({
                    name: args.name,
                    phone_number: args.phone_number,
                    e_posta: args.e_posta,
                    password: args.password,
                    location: args.location,
                })

                return user.save()
            }
        },

        DeleteUser: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return User.findByIdAndDelete(args.id)
            }
        },

        AddProduct: {
            type: ProductType,
            args: {
                By_Id: { type: GraphQLNonNull(GraphQLID) },
                product_title: { type: GraphQLNonNull(GraphQLString) },
                catalog_name: { type: GraphQLNonNull(GraphQLString) },
                remaining_product: { type: GraphQLNonNull(GraphQLInt) },
                images: { type: GraphQLNonNull(GraphQLString) },
                product_price: { type: GraphQLNonNull(GraphQLFloat) },
                description: { type: GraphQLNonNull(GraphQLString) },
                additionalInfo: { type: GraphQLNonNull(GraphQLString) },
                product_colors: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
            },
            resolve(parent, args) {
                console.log(args)
                const Product = new Product({
                    By_Id: args.By_Id,
                    product_title: args.product_title,
                    catalog_name: args.catalog_name,
                    remaining_product: args.remaining_product,
                    image: args.images,
                    product_price: args.product_price,
                    description: args.description,
                    additionalInfo: args.additionalInfo,
                    product_colors: args.product_colors
                })
                return Product.save()
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})