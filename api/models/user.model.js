const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const UserModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone_number: {
        type: String,
        required: true,
        trim: true
    },
    e_posta: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    shoping_card: [{
        product: {
            type: ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: Number,
            default: 1
        }
    }],
    favorite: [{
        type: ObjectId,
        ref: "Product"
    }],
    location: {
        type: String,
        required: true,
        trimg: true
    },
    profilePicture: {
        type: String,
        default: "http://localhost:8000/noUser.png"
    }
}, { timestamps: true })

/*export mongodb schema*/
module.exports = mongoose.model('user', UserModel)






