const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const ProductModel = new mongoose.Schema({
    product_title: {
        type: String,
        required: true,
        trim: true,
    },
    catalog_name: {
        type: String,
        required: true,
        trim: true,
    },
    remaining_product: {
        type: Number,
        require: true,
        trim: true
    },
    image: {
        type: Array,
        required: true
    },
    product_price: {
        type: Number,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    additionalInfo: {
        type: String,
        required: true,
        trim: true
    },
    reviews: [{
        text: String,
        comment_by: {
            type: ObjectId,
            required: true
        }
    }],
    product_colors: {
        type: Array,
        required: true
    },
    pageviews: {
        type: Number
    },
    NumberOfSales: {
        type: Number
    }

}, { timestamps: true })


module.exports = mongoose.model('Product', ProductModel)